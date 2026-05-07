import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { siteConfig } from '../../constants/siteConfig';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gray-900 text-white rounded-none flex items-center justify-center shadow-lg hover:bg-black transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${siteConfig.contact.phone}`}
        className="w-14 h-14 bg-primary text-white rounded-none flex items-center justify-center shadow-xl hover:bg-primary/90 transition-colors"
        id="call-floating"
      >
        <Phone size={24} />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-none flex items-center justify-center shadow-xl hover:bg-[#128C7E] transition-colors"
        id="whatsapp-floating"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
