import { motion } from 'framer-motion';
import { certifications } from '../data/certifications.js';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => (
  <section id="certifications" className="relative overflow-hidden px-6 py-24 lg:px-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_30%)]" />
    <div className="relative mx-auto max-w-6xl space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="section-heading text-emerald-300">Certifications</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Verified credentials that showcase real-world expertise.</h2>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[36px] border border-slate-700/70 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  <FiAward /> Certified
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{cert.title}</h3>
                <p className="mt-3 text-slate-400">{cert.issuer}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 px-4 py-3 text-sm font-semibold text-sky-300 shadow-inner shadow-slate-950/40">
                {cert.year}
              </div>
            </div>
            <div className="mt-8 rounded-[28px] border border-slate-800/80 bg-slate-950/80 p-5">
              <p className="text-sm leading-7 text-slate-300">This certification demonstrates hands-on knowledge of modern web development tools, responsive interfaces, and production-ready app building.</p>
            </div>
            <div className="mt-8 flex items-center justify-between gap-3">
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                <FiExternalLink /> View Certificate
              </a>
              <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Verified badge</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
