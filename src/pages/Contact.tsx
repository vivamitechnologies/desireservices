import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-[#0f172a] py-24 border-b border-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">Contact Us</h1>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? Reach out to us for expert consultation 
            and high-quality infrastructure solutions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a1f44]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 text-white">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 font-display">Get In Touch</h2>
              <p className="text-blue-100 mb-12 leading-relaxed">
                Contact our office in Patna for detailed discussions regarding Government Contracting, 
                MSME Consultancy, or any Building Construction needs. We are here to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 p-6 bg-[#0f2a5a] rounded-3xl border border-blue-900 group hover:border-primary transition-all text-white">
                  <div className="w-14 h-14 bg-[#1a3668] text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Call Us</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-xl font-bold text-white hover:text-secondary transition-colors">{siteConfig.contact.phone}</a>
                    <p className="text-sm text-blue-200 mt-1">Mon - Sat, 10am - 6pm</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-[#0f2a5a] rounded-3xl border border-blue-900 group hover:border-primary transition-all text-white">
                  <div className="w-14 h-14 bg-[#1a3668] text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Email Us</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-bold text-white hover:text-secondary transition-colors">{siteConfig.contact.email}</a>
                    <p className="text-sm text-blue-200 mt-1">Supporting business since 2017</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-[#0f2a5a] rounded-3xl border border-blue-900 group hover:border-primary transition-all text-white">
                  <div className="w-14 h-14 bg-[#1a3668] text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Office Location</p>
                    <p className="text-lg font-bold text-white">{siteConfig.contact.address}</p>
                    <p className="text-sm text-blue-200 mt-1">Patna, Bihar, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                 <a 
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-6 rounded-3xl font-bold text-xl hover:brightness-110 transition-all shadow-xl"
                 >
                    <MessageCircle size={28} /> Chat on WhatsApp
                 </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-primary rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <h3 className="text-2xl font-bold mb-8 font-display">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest opacity-70">Full Name</label>
                       <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/40 focus:bg-white/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest opacity-70">Phone Number</label>
                       <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/40 focus:bg-white/20 outline-none transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest opacity-70">Email Address</label>
                     <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/40 focus:bg-white/20 outline-none transition-all" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest opacity-70">Service Required</label>
                     <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white/70 outline-none transition-all">
                        <option className="bg-gray-900">Building Construction</option>
                        <option className="bg-gray-900">MSME Consultancy</option>
                        <option className="bg-gray-900">Maintenance Work</option>
                        <option className="bg-gray-900">Others</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest opacity-70">Your Message</label>
                     <textarea className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/40 focus:bg-white/20 outline-none transition-all h-32" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button className="w-full bg-white text-primary py-5 rounded-none font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-xl">
                    Submit Inquiry <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100 mt-24 grayscale hover:grayscale-0 transition-all outline-none border-none">
          {/* Embedding a professional looking map area */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14391.314644557997!2d85.12754655!3d25.6105809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5837ff653559%3A0xc3f9821811e59!2sMauryalok%20Complex%2C%20Patna!5e0!3m2!1sen!2sin!4v1713291244123!5m2!1sen!2sin" 
            className="w-full h-full"
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
      </section>
    </div>
  );
}
