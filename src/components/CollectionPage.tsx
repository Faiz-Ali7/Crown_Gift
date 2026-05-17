import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Filter } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

export const CollectionPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'flowers', 'cakes', 'gifts'];

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-sage mb-4 block animate-fade-in">Exquisite Selection</span>
        <h2 className="font-serif text-5xl md:text-7xl font-light mb-8 italic">The Studio <br /> Collection</h2>
        
        <div className="flex flex-wrap items-center gap-4 mt-12 border-b border-botanical/10 pb-8">
          <div className="flex items-center gap-2 mr-8 text-xs font-bold uppercase tracking-widest text-sage/50">
            <Filter size={14} /> Filter:
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all border ${
                activeCategory === cat 
                ? 'bg-botanical text-ivory border-botanical' 
                : 'border-botanical/10 text-sage hover:border-botanical/30'
              } cursor-pointer`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group"
          >
            <div className="aspect-[4/5] bg-beige rounded-[32px] overflow-hidden relative mb-6 glass group-hover:shadow-2xl transition-all duration-700">
              <div className="absolute inset-0 bg-botanical/5 group-hover:bg-transparent transition-all duration-700" />
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {product.tag && (
                <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold text-sage">
                  {product.tag}
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-serif text-2xl group-hover:italic transition-all duration-300">{product.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sage mt-2 opacity-60">
                  {product.category === 'flowers' ? 'Artisan Bouquet' : 
                   product.category === 'cakes' ? 'Custom Cake' : 'Curated Gift'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-botanical">{product.price}</span>
              </div>
            </div>
            
            <button className="mt-8 w-full py-4 glass rounded-2xl text-[10px] uppercase tracking-widest font-bold text-sage hover:bg-botanical hover:text-ivory transition-all duration-500 flex items-center justify-center gap-2 group-hover:border-transparent cursor-pointer">
              Add to Gifting <ChevronRight size={12} />
            </button>
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-40 text-center">
          <p className="font-serif text-2xl italic opacity-50">More exquisite arrivals coming soon.</p>
        </div>
      )}
    </div>
  );
};
