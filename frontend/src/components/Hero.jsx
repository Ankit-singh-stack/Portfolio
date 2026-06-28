import { motion } from 'framer-motion';
import { FiDownload, FiArrowDownRight, FiMail } from 'react-icons/fi';

const titles = ['Full Stack Developer', 'MERN Stack Developer', 'React Developer', 'Node.js Developer'];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="glass mx-auto max-w-7xl rounded-[32px] border border-slate-700/80 p-8 shadow-glow backdrop-blur-xl lg:p-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Full Stack Developer
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Hi, I am <span className="text-sky-300">Ankit Anand Singh</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Passionate Full Stack Developer with expertise in building scalable, responsive, and user-friendly web applications using the MERN Stack. Enthusiastic about creating modern digital experiences and continuously learning new technologies.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="/Ankit_Anand_Singh_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                <FiDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-300"
              >
                <FiMail /> Contact Me
              </a>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/10">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">I build with</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
                {titles.map((title) => (
                  <span key={title} className="rounded-full bg-slate-800/70 px-4 py-2 text-slate-100/90 shadow-sm">
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto flex max-w-[360px] justify-center"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-slate-700/80 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/30">
              <img src="/my%20hoto.jpeg" alt="Ankit Anand Singh" className="h-[420px] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#about" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-sky-300">
          Scroll Down <FiArrowDownRight />
        </a>
      </div>
    </section>
  );
};

export default Hero;
