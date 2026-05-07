import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = siteConfig.services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4 font-display">Service Not Found</h2>
        <Link to="/services" className="text-primary font-bold">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Link to="/services" className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold font-display"
          >
            {service.title} in <span className="text-secondary">Patna</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6 font-display">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.longDescription}
              </p>
              
              <h3 className="text-2xl font-bold mb-6 font-display">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {service.features.map(feature => (
                  <div key={feature} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="text-secondary shrink-0" size={24} />
                    <span className="font-bold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6 font-display">Our Process</h3>
              <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                {[
                  { step: '01', title: 'Consultation & Planning', desc: 'We start by understanding your requirements and planning the project scope.' },
                  { step: '02', title: 'Design & Engineering', desc: 'Our experts create detailed designs and technical blueprints.' },
                  { step: '03', title: 'Execution & Supervision', desc: 'Standard materials are gathered and the execution phase begins under strict supervision.' },
                  { step: '04', title: 'Final Delivery', desc: 'After rigorous quality testing, we deliver the project as per the agreed timeline.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-8 relative z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold font-display shrink-0 shadow-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 font-display">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-primary p-10 rounded-[3rem] text-white sticky top-28 shadow-2xl">
                <h4 className="text-2xl font-bold mb-6 font-display">Need a Quote?</h4>
                <p className="text-blue-100 mb-10 leading-relaxed text-sm">
                  Whether it's for <strong>{service.title}</strong> or any infrastructure consultancy, 
                  our team is here to help you with the best solutions.
                </p>
                <div className="space-y-4">
                  <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all">
                    <Phone className="text-secondary" />
                    <div>
                      <p className="text-xs text-blue-200">Call Now</p>
                      <p className="font-bold">+91 9431662724</p>
                    </div>
                  </a>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="flex items-center gap-4 bg-[#25D366] p-4 rounded-2xl hover:brightness-110 transition-all">
                    <MessageCircle className="text-white" />
                    <div>
                      <p className="text-xs text-white/80">WhatsApp</p>
                      <p className="font-bold">Chat with Experts</p>
                    </div>
                  </a>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                   <p className="text-xs text-blue-200 italic">"Desire Services - Built On Trust, Delivering Excellence."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
