import { motion } from 'motion/react';
import { ArrowRight, Building2, HardHat, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../constants/siteConfig';

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-gray-900 py-32 relative">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">Our Services</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Providing end-to-end infrastructure solutions and professional consultancy in Bihar.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a1f44]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1a3668] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-blue-900 flex flex-col"
              >
                <div className="h-60 overflow-hidden relative">
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white font-bold flex items-center gap-2">View Details <ChevronRight size={18} /></span>
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow text-white">
                    <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-secondary transition-colors">{service.title}</h3>
                    <p className="text-blue-100 mb-8 flex-grow leading-relaxed">
                        {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                        {service.features.slice(0, 3).map(f => (
                            <li key={f} className="flex items-center gap-2 text-sm font-medium text-blue-200">
                                <CheckCircle2 size={16} className="text-secondary" /> {f}
                            </li>
                        ))}
                    </ul>
                    <Link 
                        to={`/services/${service.slug}`} 
                        className="bg-blue-900/50 text-white px-6 py-3 rounded-none font-bold flex items-center justify-center gap-2 group-hover:bg-primary transition-all border border-blue-800"
                    >
                        Learn More <ArrowRight size={18} />
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-24 bg-[#0a1f44] border-t border-blue-900">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto bg-[#0f2a5a] p-12 rounded-[3.5rem] shadow-xl border border-blue-900 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16" />
               <div className="text-center text-white">
                   <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Specialized Solutions</span>
                   <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display">Growel Paints & MSME Support</h2>
                   <p className="text-blue-100 mb-10 leading-relaxed">
                     We are not just builders; we are partners in your growth. As authorized dealers of <strong>Growel Paints in Patna</strong>, we offer premium coating solutions. 
                     Simultaneously, our <strong>MSME Consultancy in Bihar</strong> empowers local entrepreneurs to thrive with institutional support.
                   </p>
                   <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-none font-bold inline-flex items-center gap-3 hover:bg-primary/90 transition-all">
                      Special consultation <ArrowRight size={20} />
                   </Link>
               </div>
           </div>
        </div>
      </section>
    </div>
  );
}
