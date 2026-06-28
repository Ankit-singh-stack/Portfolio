import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="relative overflow-hidden bg-slate-950/95 px-6 py-28 lg:px-10">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
    <div className="pointer-events-none absolute right-0 top-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center"
      >
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            About Me
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A full-width, polished profile built for modern web experiences.
            </h2>
            <p className="max-w-3xl text-slate-300 leading-8 sm:text-lg">
              I am Ankit Anand Singh, a passionate Full Stack Developer with a Bachelor's degree in Computer Science. I build polished, responsive, and maintainable web applications with the MERN stack, and I love creating thoughtful experiences that scale across devices.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Experience</p>
              <p className="mt-4 text-3xl font-semibold text-white">4+ Years</p>
              <p className="mt-2 text-slate-400">Creating web apps and developer tools.</p>
            </div>
            <div className="rounded-3xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Focus</p>
              <p className="mt-4 text-3xl font-semibold text-white">MERN Stack</p>
              <p className="mt-2 text-slate-400">React, Node, MongoDB, Express, modern JS.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass rounded-[44px] border border-slate-700/90 p-8 shadow-2xl shadow-slate-950/30"
        >
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/95 p-6 text-slate-300 shadow-slate-950/20 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Personal Overview</p>
              <p className="mt-4 leading-8 text-slate-300">
                I help turn ideas into production-ready web applications with clean UI, strong front-end architecture, and efficient backend services. My work is focused on quality, performance, and accessibility.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/95 p-5 text-slate-100">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Hobbies</p>
                <p className="mt-3 font-semibold">Design systems, animation, and tooling.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/95 p-5 text-slate-100">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Strengths</p>
                <p className="mt-3 font-semibold">Fast iteration, clean code, collaborative delivery.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
