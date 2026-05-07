import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../ui/Logo';
import { siteConfig } from '../../constants/siteConfig';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Chairman', href: '/chairman' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-[#1e90ff] shadow-2xl py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <Logo scrolled={scrolled} light={true} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-secondary",
                  location.pathname === link.href
                    ? "text-secondary"
                    : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-none text-sm font-bold transition-all shadow-sm bg-white text-[#1e90ff] hover:bg-[#ffff00] hover:text-[#1e90ff]"
              )}
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "flex items-center justify-between py-2 text-lg font-medium",
                    location.pathname === link.href ? "text-primary" : "text-gray-600"
                  )}
                >
                  {link.name}
                  <ChevronRight size={18} />
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="mt-4 w-full bg-white text-[#1e90ff] py-4 rounded-none flex items-center justify-center gap-3 font-bold hover:bg-[#ffff00] transition-colors"
              >
                <Phone size={20} />
                Call +91 9431662724
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
