import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext.jsx';

const sections = ['home', 'skills', 'experience', 'projects', 'certifications', 'contact'];

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a className="text-xl font-semibold tracking-[0.18em] text-sky-300" href="#home">AN</a>

        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`transition-colors duration-200 ${active === section ? 'text-sky-300' : 'text-slate-400 hover:text-slate-100'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/admin" className="hidden rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-300 md:inline-flex">
            Admin
          </Link>
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition ${active === section ? 'text-sky-300' : 'text-slate-300 hover:text-slate-100'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
