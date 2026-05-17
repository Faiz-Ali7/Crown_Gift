import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar = ({ currentView, setView }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', view: 'collection' as ViewState },
    { label: 'Bespoke', view: 'home' as ViewState, id: 'about' },
    { label: 'The Studio', view: 'home' as ViewState, id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex-1 hidden md:flex gap-8 items-center text-[10px] uppercase tracking-[0.3em] font-semibold text-sage">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                setView(link.view);
                if (link.id) {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-botanical transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.1em] font-medium leading-none">CROWN GARDEN</h1>
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light mt-1 opacity-60">Islamabad</p>
        </div>

        <div className="flex-1 hidden md:flex gap-8 items-center justify-end text-xs uppercase tracking-[0.2em] font-medium opacity-70">
          <button onClick={() => setView('collection')} className="hover:opacity-100 transition-opacity cursor-pointer">Shop</button>
          <button className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer">
            <ShoppingBag size={14} />
            <span>(0)</span>
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 cursor-pointer">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory border-b border-champagne/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center text-sm uppercase tracking-[0.2em] font-medium">
              <button 
                onClick={() => { setView('collection'); setIsMobileMenuOpen(false); }}
                className="cursor-pointer"
              >
                Collections
              </button>
              <button 
                onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}
                className="cursor-pointer"
              >
                Home
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
