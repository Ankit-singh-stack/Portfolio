import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import AnimatedParticle from './components/AnimatedParticle.jsx';
import Loader from './components/Loader.jsx';
import Admin from './components/Admin.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
      <AnimatedParticle />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <BrowserRouter>
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Certifications />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <BackToTop />
          <ToastContainer theme="dark" position="bottom-right" />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
