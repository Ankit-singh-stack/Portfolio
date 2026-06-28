import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => (
  <footer className="bg-slate-950/90 px-6 py-10 text-slate-400 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-slate-800/80 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-3">
        <p className="text-base font-semibold text-slate-100">© 2026 Ankit Anand Singh. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-4 text-slate-400">
          <a href="#home" className="hover:text-sky-300">Home</a>
          <a href="#projects" className="hover:text-sky-300">Projects</a>
          <a href="#contact" className="hover:text-sky-300">Contact</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/Ankitcr7m1o" target="_blank" rel="noreferrer" className="rounded-full bg-slate-900/80 p-3 text-slate-200 transition hover:bg-sky-400/20 hover:text-sky-300">
          <FiGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/ankit-anand-singh" target="_blank" rel="noreferrer" className="rounded-full bg-slate-900/80 p-3 text-slate-200 transition hover:bg-sky-400/20 hover:text-sky-300">
          <FiLinkedin size={18} />
        </a>
        <a href="mailto:ankitanandsingh28@gmail.com" className="rounded-full bg-slate-900/80 p-3 text-slate-200 transition hover:bg-sky-400/20 hover:text-sky-300">
          <FiMail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
