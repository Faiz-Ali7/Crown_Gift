import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flower, 
  ShoppingBag, 
  MapPin, 
  Phone, 
  Instagram, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Truck, 
  Heart, 
  Gift,
  Clock
} from 'lucide-react';

// --- Types & Constants ---
import { ViewState } from './types';
import { PRODUCTS } from './constants';

// --- Components ---
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionPage } from './components/CollectionPage';

// --- Sections ---

const CollectionBento = ({ setView }: { setView: (v: ViewState) => void }) => {
  const categories = [
    { 
      title: "Flower Bouquets", 
      tag: "Freshly Cut", 
      img: "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?auto=format&fit=crop&q=80&w=800",
      size: "col-span-12 md:col-span-7 h-[400px] md:h-[600px]" 
    },
    { 
      title: "Cakes", 
      tag: "Artisan Sweets", 
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
      size: "col-span-12 md:col-span-5 h-[400px] md:h-[600px]" 
    },
    { 
      title: "Gift Boxes", 
      tag: "Curated Moments", 
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
      size: "col-span-12 md:col-span-5 h-[400px]" 
    },
    { 
      title: "Events", 
      tag: "Unforgettable Sets", 
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
      size: "col-span-12 md:col-span-7 h-[400px]" 
    },
  ];

  return (
    <section id="collections" className="max-w-7xl mx-auto px-6 py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-60">The Artisan Gallery</span>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 leading-tight">Curated with <span className="italic">precision</span>.</h3>
        </div>
        <button 
          onClick={() => setView('collection')}
          className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-botanical pb-1 hover:opacity-70 transition-opacity cursor-pointer"
        >
          View All Collections
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setView('collection')}
            className={`relative group overflow-hidden cursor-pointer glass rounded-[30px] ${cat.size}`}
          >
            <div className="absolute inset-0 bg-botanical/5 group-hover:bg-botanical/10 transition-all duration-700 z-10" />
            <img 
              src={cat.img} 
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 text-botanical">
              <div className="glass p-6 rounded-[24px] bg-white/60">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sage mb-2 block">{cat.tag}</span>
                <h4 className="font-serif text-3xl italic">{cat.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BestSellers = () => {
  const products = PRODUCTS.filter(p => p.tag === 'Best Seller' || p.tag === 'Premium').slice(0, 4);

  return (
    <section className="bg-white/30 py-32 overflow-hidden border-y border-botanical/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-60">Seasonal Favorites</span>
          <h3 className="font-serif text-4xl md:text-5xl font-light mt-4">The Best Sellers</h3>
        </div>
        <div className="flex gap-4">
           {/* Slider controls could go here */}
        </div>
      </div>
      
      <div className="px-6 flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-12 max-w-7xl mx-auto">
        {products.map((p, idx) => (
          <motion.div 
            key={idx}
            className="flex-shrink-0 w-[280px] md:w-[350px]"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-ivory shadow-lg rounded-[24px] relative group">
              <img 
                src={p.img} 
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-botanical/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <button className="bg-ivory text-botanical px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">Quick View</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-serif text-xl">{p.name}</h4>
                <p className="text-[10px] uppercase tracking-widest mt-1 opacity-60">{p.category === 'flowers' ? 'Bespoke Bouquet' : 'Artisan Piece'}</p>
              </div>
              <span className="text-sm font-semibold">{p.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const ArtisanStory = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-[16/10] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=1200" 
            alt="Artisan Story"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 border border-botanical/10 p-4 bg-ivory shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?auto=format&fit=crop&q=80&w=600" 
            alt="Flower Detail"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-60">The Artisan Voice</span>
        <h3 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-8">Crafting emotions, <span className="italic">one stem</span> at a time.</h3>
        <p className="text-botanical/70 leading-relaxed mb-6">
          At Crown Garden, we believe that flowers are more than just botanical arrangements—they are a language of the heart. Located in the heart of I-8 Markaz, Islamabad, we've spent years perfecting the art of floral gift-giving.
        </p>
        <p className="text-botanical/70 leading-relaxed mb-10">
          From custom-designed bouquets to artisan cakes and curated gift boxes, every piece that leaves our studio is handcrafted with an obsessive attention to detail. We are proud to be Islamabad's most trusted luxury florist, with a <span className="font-semibold text-botanical">4.8 rating</span> from our cherished community.
        </p>
        
        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-botanical/10">
          <div>
            <h5 className="font-serif text-3xl">70+</h5>
            <p className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Verified Reviews</p>
          </div>
          <div>
            <h5 className="font-serif text-3xl">100%</h5>
            <p className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Freshness Guarantee</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Occasions = () => {
  const occasions = [
    { title: "Anniversaries", icon: <Heart size={20} /> },
    { title: "Birthdays", icon: <Gift size={20} /> },
    { title: "Weddings", icon: <Flower size={20} /> },
    { title: "Congratulations", icon: <ShoppingBag size={20} /> },
    { title: "Sympathy", icon: <Clock size={20} /> },
  ];

  return (
    <section className="bg-botanical text-ivory py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-60 mb-6">Curated For Moments</span>
        <h3 className="font-serif text-4xl md:text-6xl font-light mb-20 max-w-4xl">Gifts for the <span className="italic font-normal">occasions</span> that matter most</h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          {occasions.map((occ, idx) => (
            <motion.button 
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-ivory/20 flex items-center justify-center group-hover:bg-ivory group-hover:text-botanical transition-all duration-500">
                {occ.icon}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 group-hover:opacity-100 transition-opacity">{occ.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const features = [
    { title: "Same-Day Delivery", desc: "Fast delivery in Islamabad for orders before 4 PM", icon: <Truck size={24} /> },
    { title: "Custom Designs", desc: "Bespoke arrangements tailored to your specific vision", icon: <Flower size={24} /> },
    { title: "Quality Guaranteed", desc: "The freshest stems and highest quality gift items", icon: <Star size={24} /> },
  ];

  return (
    <section className="py-32 border-b border-botanical/5 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {features.map((f, idx) => (
          <div key={idx} className={`flex flex-col items-center text-center p-12 rounded-deep glass ${idx === 0 ? 'bg-orange-50/20' : idx === 1 ? 'bg-green-50/20' : 'bg-rose-50/20'}`}>
            <div className="mb-6 text-sage">{f.icon}</div>
            <h4 className="font-serif text-2xl mb-4 italic">{f.title}</h4>
            <p className="text-sm text-sage/70 leading-relaxed font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { text: "Every bouquet was exactly what I imagined — fresh, elegant, and delivered on time to my home in I-8.", author: "Areeba J.", rating: 5 },
    { text: "The cake was as beautiful as it was delicious. The perfect centerpiece for our anniversary celebration.", author: "Zainab K.", rating: 5 },
    { text: "Exceptional service and the most stunning floral arrangements I've found in Islamabad. Truly artisan.", author: "Faisal M.", rating: 4.8 },
  ];

  return (
    <section className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#141414" className="text-botanical" />)}
          </div>
          <h3 className="font-serif text-4xl md:text-5xl font-light italic text-botanical">Trusted by our community</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-botanical/10 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 bg-white"
            >
              <p className="font-serif text-lg leading-relaxed italic mb-8">“{r.text}”</p>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold">{r.author}</p>
                <p className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Verified Customer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CinematicMarquee = () => {
  const images = [
    "https://images.unsplash.com/photo-1563241527-3004b7be0686?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section className="py-32 overflow-hidden bg-beige/10">
      <div className="mb-12 px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">Art of Arrangement</span>
        <h3 className="font-serif text-3xl md:text-4xl font-light mt-4">Floral Motion Gallery</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden mask-fade-x">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 min-w-max"
        >
          {[...images, ...images].map((img, idx) => (
            <div key={idx} className="w-[300px] md:w-[450px] aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={img} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                alt="Cinematic Flower" 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-60">Get In Touch</span>
          <h3 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-12">Visit our <span className="italic">Boutique</span>.</h3>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-botanical" />
              </div>
              <div>
                <h5 className="font-serif text-xl mb-1">Our Location</h5>
                <p className="text-sm text-botanical/60 font-light leading-relaxed">Shop #5, Ground Floor, Royal Plaza,<br />I-8 Markaz, Islamabad</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center shrink-0">
                <Phone size={20} className="text-botanical" />
              </div>
              <div>
                <h5 className="font-serif text-xl mb-1">Contact Us</h5>
                <p className="text-sm text-botanical/60 font-light leading-relaxed">+92 300 5564122</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="p-2 border border-botanical/10 hover:bg-botanical hover:text-ivory transition-all">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="p-2 border border-botanical/10 hover:bg-botanical hover:text-ivory transition-all">
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-16 w-full md:w-auto bg-green-600/90 text-ivory px-10 py-5 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-3 hover:bg-green-700 transition-colors cursor-pointer">
            <MessageCircle size={18} /> Order on WhatsApp
          </button>
        </div>

        <div className="h-[400px] md:h-full bg-botanical text-beige p-12 rounded-deep relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-10 right-10 opacity-20">
              <Star size={40} />
           </div>
           <div className="relative z-10">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-8">Our Signature Experience</div>
              <p className="font-serif text-3xl md:text-4xl italic leading-tight mb-12">The perfect bouquet <br/> is waiting for you <br/> at I-8 Markaz.</p>
              <div className="flex justify-between items-end border-t border-beige/20 pt-8">
                <div>
                  <div className="text-2xl font-serif">4.8 / 5.0</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-60">Verified Rating</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-serif italic">Islamabad</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-60">Pakistan</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-botanical text-ivory/80 py-20 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 md:gap-8">
        <div className="md:col-span-2">
          <h4 className="font-serif text-3xl text-ivory tracking-wider mb-6">CROWN GARDEN</h4>
          <p className="text-sm font-light max-w-sm leading-relaxed mb-8 opacity-60">
            A luxury floral design studio in Islamabad where every bouquet, cake, and gift is presented as an emotional, handcrafted piece of art.
          </p>
        </div>
        
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-ivory mb-8">Navigation</h5>
          <ul className="space-y-4 text-xs font-medium tracking-widest opacity-60">
            <li><a href="#" className="hover:opacity-100 transition-opacity">HOME</a></li>
            <li><a href="#collections" className="hover:opacity-100 transition-opacity">COLLECTIONS</a></li>
            <li><a href="#about" className="hover:opacity-100 transition-opacity">OUR STORY</a></li>
            <li><a href="#contact" className="hover:opacity-100 transition-opacity">CONTACT</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-ivory mb-8">Follow Us</h5>
          <ul className="space-y-4 text-xs font-medium tracking-widest opacity-60">
            <li><a href="#" className="hover:opacity-100 transition-opacity">INSTAGRAM</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">FACEBOOK</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">WHATSAPP</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] opacity-40 font-medium">
        <p>© 2026 CROWN GARDEN ISLAMABAD</p>
        <p>Crafted With Love By Artisan Florists</p>
      </div>
    </footer>
  );
};

export default function App() {
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <main className="font-sans antialiased text-botanical overflow-x-hidden selection:bg-champagne selection:text-botanical relative min-h-screen">
      <div className="fixed -top-10 -left-10 w-[500px] h-[500px] bg-blush rounded-full blur-[120px] opacity-40 z-0" />
      <div className="fixed top-1/2 -right-10 w-[400px] h-[400px] bg-[#E8EBD8] rounded-full blur-[120px] opacity-40 z-0" />
      
      <div className="relative z-10">
        <Navbar currentView={view} setView={setView} />
        
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero setView={setView} />
              <CollectionBento setView={setView} />
              <BestSellers />
              <ArtisanStory />
              <Occasions />
              <TrustSection />
              <Reviews />
              <CinematicMarquee />
            </motion.div>
          ) : (
            <motion.div
              key="collection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CollectionPage />
            </motion.div>
          )}
        </AnimatePresence>

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
