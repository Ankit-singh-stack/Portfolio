import { motion } from 'framer-motion';
import { experiences } from '../data/experience.js';

const Experience = () => (
  <section id="experience" className="px-6 py-24 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-10 space-y-4"
      >
        <p className="section-heading text-fuchsia-300">Experience</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Impactful roles with measurable results.</h2>
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-2">
        {experiences.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.09 }}
            viewport={{ once: true }}
            className="group rounded-[36px] border border-slate-800/80 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/30"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                {item.company && <p className="mt-1 text-slate-400">{item.company}</p>}
              </div>
              <span className="rounded-3xl bg-gradient-to-r from-fuchsia-500/15 to-sky-400/20 px-4 py-2 text-sm font-medium text-sky-200">
                {item.duration}
              </span>
            </div>
            <div className="mt-6 space-y-3 text-slate-300">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 text-sm leading-7 transition group-hover:bg-slate-900/95">
                  • {bullet}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
