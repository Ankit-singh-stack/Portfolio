import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 520);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`fixed bottom-8 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-700/90 bg-slate-950/90 text-slate-100 shadow-xl transition-transform duration-200 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      aria-label="Scroll back to top"
    >
      <FiArrowUp className="h-6 w-6" />
    </a>
  );
};

export default BackToTop;
