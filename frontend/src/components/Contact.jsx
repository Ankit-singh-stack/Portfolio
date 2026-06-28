import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setIsSending(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`, form);
      toast.success('Message sent successfully. I will get back to you soon!');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong while sending the message.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-700/80 bg-slate-950/85 p-8 shadow-glow backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-heading text-sky-300">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build the next digital experience together.</h2>
        </motion.div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
              <p className="text-slate-300">Email</p>
              <p className="mt-2 text-xl font-semibold text-white">ankitanandsingh28@gmail.com</p>
            </div>
            <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
              <p className="text-slate-300">Phone</p>
              <a href="tel:+919346718469" className="mt-2 block text-xl break-words font-semibold text-white transition hover:text-sky-300">
                +91 93467 18469
              </a>
            </div>
            <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
              <p className="text-slate-300">Location</p>
              <p className="mt-2 text-xl font-semibold text-white">Bangalore, India</p>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                type="email"
                className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="w-full rounded-3xl border border-slate-700/80 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400"
            />
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
