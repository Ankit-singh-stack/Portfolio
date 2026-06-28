import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects.js';

const Projects = () => (
  <section id="projects" className="px-6 py-24 lg:px-8">
    <div className="mx-auto max-w-7xl space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="section-heading text-amber-300">Projects</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected work built with modern technologies.</h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[36px] border border-slate-800/90 bg-slate-950/95 shadow-2xl shadow-slate-950/40"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-slate-950/0" />
              <img src={project.image} alt={project.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                live case
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-2xl bg-slate-900/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 shadow-sm shadow-slate-950/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="rounded-3xl border border-slate-800/90 bg-slate-900/90 px-4 py-3 text-sm text-slate-300">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 transition hover:border-amber-300 hover:text-amber-300">
                  <FiGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
