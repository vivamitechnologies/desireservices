import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';
import { siteConfig } from '../../constants/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051025] text-blue-200 pt-16 pb-8 border-t border-blue-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Bio */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <Logo light />
            </Link>
            <p className="text-sm leading-relaxed text-blue-300/80">
              Your trusted partner for construction and consultancy in Bihar. We build dreams with quality, 
              integrity, and excellence in every project we undertake.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors flex items-center gap-2"><ExternalLink size={14} /> Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors flex items-center gap-2"><ExternalLink size={14} /> About Us</Link></li>
              <li><Link to="/chairman" className="hover:text-secondary transition-colors flex items-center gap-2"><ExternalLink size={14} /> Our Chairman</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors flex items-center gap-2"><ExternalLink size={14} /> Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-secondary transition-colors flex items-center gap-2"><ExternalLink size={14} /> Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors flex items-center gap-2"><ExternalLink size={14} /> Contact Us</Link></li>
              <li><Link to="/departments" className="hover:text-secondary transition-colors flex items-center gap-2"><ExternalLink size={14} /> Departments Served</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-display">Popular Services</h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="hover:text-secondary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-display">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors truncate">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300/50">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
