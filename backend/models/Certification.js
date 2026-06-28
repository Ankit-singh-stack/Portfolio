import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  issuer: { type: String, trim: true },
  year: { type: String, trim: true },
  link: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;
