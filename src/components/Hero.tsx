import { motion, useScroll, useTransform } from 'motion/react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero = ({ setView }: HeroProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Floral Showcase"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-botanical/20 via-transparent to-ivory/60" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6 glass rounded-deep p-12 md:p-24 max-w-6xl mx-6"
      >
        <span className="block text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-sage mb-6">Handcrafted with Emotion</span>
        <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight leading-[1] max-w-5xl mx-auto mb-8 text-botanical">
          Flowers, Cakes <br /> <span className="italic font-light text-sage">& Gifts</span> Crafted With Love
        </h2>
        <p className="text-sm text-sage max-w-md mx-auto mb-10 leading-relaxed font-light">
          A premium digital florist studio offering artisan arrangements and luxury gifting experiences in the heart of Islamabad.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setView('collection')}
            className="bg-botanical text-ivory px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-botanical/90 transition-colors cursor-pointer"
          >
            Order Now
          </button>
          <button 
            onClick={() => setView('collection')}
            className="border border-botanical text-botanical px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-botanical hover:text-ivory transition-all cursor-pointer"
          >
            The Collection
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-botanical animate-bounce" />
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
      </motion.div>
    </section>
  );
};
