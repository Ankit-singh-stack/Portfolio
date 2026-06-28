const AnimatedParticle = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-16 top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl animate-blob" />
    <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl animate-blob animation-delay-2000" />
    <div className="absolute left-1/2 top-3/4 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl animate-blob animation-delay-1500" />
  </div>
);

export default AnimatedParticle;
