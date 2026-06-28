import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="h-24 w-24 rounded-full border-4 border-t-sky-400 border-slate-700 animate-spin" />
      <div className="text-slate-200 text-lg font-medium tracking-widest">Loading Portfolio</div>
    </div>
  </motion.div>
);

export default Loader;
