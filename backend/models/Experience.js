import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  company: { type: String, trim: true },
  duration: { type: String, required: true },
  description: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
