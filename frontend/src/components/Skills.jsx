import { motion } from 'framer-motion';
import { skills } from '../data/skills.js';

const Skills = () => (
  <section id="skills" className="relative overflow-hidden bg-slate-950/95 px-6 py-12 lg:px-10">
    <div className="pointer-events-none absolute left-0 top-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
    <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-4 text-center"
      >
        <p className="section-heading text-cyan-300">Skills</p>
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Daily technologies I use to build polished web applications.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-8 overflow-hidden rounded-[34px] border border-slate-700/80 bg-slate-900/90 p-5 shadow-2xl shadow-slate-950/25"
      >
        {skills.map((skill) => (
          <div key={skill.category} className="space-y-3">
            <div className="flex items-center gap-3 text-slate-300">
              <span className="inline-flex h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.18)]" />
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{skill.category}</p>
            </div>
            <div className="flex min-h-[58px] flex-nowrap items-center gap-3 overflow-x-auto pb-1">
              {skill.items.map((item) => (
                <div
                  key={item}
                  className="min-w-max rounded-full border border-slate-800/70 bg-slate-950/95 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/80 hover:bg-slate-800/95"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
