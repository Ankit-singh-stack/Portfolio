import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Project from '../models/Project.js';
import Experience from '../models/Experience.js';
import Certification from '../models/Certification.js';

dotenv.config();
const seed = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await User.deleteMany();
    await Project.deleteMany();
    await Experience.deleteMany();
    await Certification.deleteMany();

    const password = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'AdminPass123', 10);
    const adminUser = await User.create({
      email: process.env.ADMIN_EMAIL || 'admin@portfolio.com',
      password,
    });

    await Project.create([
      {
        title: 'HR Management Portal',
        description: 'A comprehensive HR management system for employee, attendance, leave, and records management.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
        github: '',
        demo: '',
        image: '',
      },
      {
        title: 'Personal Portfolio Website',
        description: 'A premium portfolio showcasing skills, experience, projects, and achievements.',
        tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
        github: '',
        demo: '',
        image: '',
      },
      {
        title: 'Hotel Booking Application',
        description: 'A platform for hotel search, room booking, and reservation management.',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        github: '',
        demo: '',
        image: '',
      },
      {
        title: 'Securing Data using Blockchain and AI',
        description: 'A project focused on securing sensitive information using blockchain concepts and AI techniques.',
        tags: ['Blockchain', 'AI', 'Java'],
        github: '',
        demo: '',
        image: '',
      },
    ]);

    await Experience.create([
      {
        title: 'Data Annotation Specialist',
        company: '',
        duration: 'January 2025 - Present',
        description: [
          'Annotating and labeling large datasets for AI and Machine Learning models.',
          'Ensuring high-quality data accuracy and consistency.',
          'Reviewing and validating annotated datasets.',
          'Collaborating with teams to improve data quality standards.',
          'Working with text, image, and structured data annotation tasks.',
        ],
      },
      {
        title: 'Web Developer Intern',
        company: 'Coincent.ai',
        duration: '2024',
        description: [
          'Developed responsive web pages using HTML and CSS.',
          'Collaborated with team members to deliver projects.',
          'Built user-friendly and responsive interfaces.',
        ],
      },
      {
        title: 'Software Developer',
        company: '',
        duration: 'Present',
        description: [
          'Developing and maintaining web applications.',
          'Creating scalable frontend and backend solutions.',
          'Integrating APIs and improving application performance.',
        ],
      },
    ]);

    await Certification.create([
      {
        title: 'Web Developer Internship Certificate',
        issuer: 'Coincent.ai',
        year: '2024',
        link: '',
      },
      {
        title: 'QA Tester Internship Certificate',
        issuer: 'Nukebox Studios',
        year: '2023',
        link: '',
      },
    ]);

    console.log('Database seeded successfully:', adminUser.email);
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seed();
