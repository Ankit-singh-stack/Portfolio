import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import bcrypt from 'bcryptjs';
import connectDB from './config/db.js';
import contactRoutes from './routes/contact.js';
import adminRoutes from './routes/admin.js';
import User from './models/User.js';
import path from 'path';
import url from 'url';

dotenv.config();
const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
const JWT_SECRET = process.env.JWT_SECRET || 'change_me_if_possible';
process.env.JWT_SECRET = JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@portfolio.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'AdminPass123';

if (!process.env.MONGODB_URI) {
  console.warn('Warning: MONGODB_URI is not set. Falling back to local MongoDB at mongodb://127.0.0.1:27017/portfolio');
}
if (!process.env.JWT_SECRET) {
  console.warn('Warning: JWT_SECRET is not set. Admin authentication will not be secure until a secret is configured.');
}

const createAdminUser = async () => {
  const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
  if (!existingAdmin) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, salt);
    await User.create({ email: ADMIN_EMAIL, password: hashedPassword });
    console.log(`Created default admin user: ${ADMIN_EMAIL}`);
  }
};

const startServer = async () => {
  await connectDB(MONGODB_URI);
  await createAdminUser();

  app.use('/api/contact', contactRoutes);
  app.use('/api/admin', adminRoutes);

  app.get('/', (req, res) => {
    res.json({ message: 'MERN Portfolio API is running' });
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Server error' });
  });

  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start backend:', error);
  process.exit(1);
});
