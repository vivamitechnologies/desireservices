import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2, HardHat, FileText, Users2, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../constants/siteConfig';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Carousel Placeholder - Animated BG */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop" 
            alt="Desire Services Construction Project" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-secondary text-white px-4 py-1 rounded-none text-sm font-bold mb-6 tracking-wide uppercase">
              Registered Govt. Contractor in Bihar
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-display">
              Building Trust with <span className="text-secondary">Quality Services</span> In Patna
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Desire Services is a leading contractor in Patna specializing in construction, 
              MSME consultancy, and government infrastructure projects across Bihar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-primary text-white px-8 py-4 rounded-none font-bold flex items-center gap-2 hover:bg-primary/90 transition-all transform hover:-translate-y-1"
              >
                Get Free Consultation <ArrowRight size={20} />
              </Link>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-white text-gray-900 px-8 py-4 rounded-none font-bold flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Stats overlay */}
        <div className="absolute bottom-12 left-0 w-full z-20 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 bg-white p-8 rounded-2xl shadow-2xl">
              {[
                { label: 'Project Completed', value: '50+' },
                { label: 'Happy Clients', value: '200+' },
                { label: 'Experience', value: '10+ Yrs' },
                { label: 'Govt Projects', value: '20+' }
              ].map((stat, i) => (
                <div key={i} className={i !== 3 ? "border-r border-gray-100 flex flex-col items-center" : "flex flex-col items-center"}>
                  <span className="text-3xl font-bold text-primary font-display">{stat.value}</span>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section (SEO Content) */}
      <section className="py-24 bg-[#0a1f44] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop" 
                alt="MSME Consultancy Team" 
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl text-white shadow-xl z-20 max-w-[240px] hidden sm:block">
                <p className="text-sm font-medium mb-2 opacity-80">Serving Bihar since</p>
                <p className="text-4xl font-bold font-display">2017</p>
                <div className="h-1 w-12 bg-secondary mt-4" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Welcome to Desire Services</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-display text-white">
                Leading <span className="text-primary italic underline decoration-secondary underline-offset-4">Contractor in Patna</span> & Bihar
              </h2>
              <p className="text-blue-100 mb-6 leading-relaxed text-lg">
                For over a decade, Desire Services has been at the forefront of Bihar's infrastructure development. 
                As a premier <strong>Government Contractor in Bihar</strong> and a trusted 
                <strong> MSME Consultant in Bihar</strong>, we bridge the gap between vision and reality.
              </p>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Whether it's building modern educational institutions, maintaining healthcare infrastructure, or 
                providing expert consultancy for budding MSMEs, our commitment to quality remains unshakeable. 
                We are proud to be associated with key landmark projects including the <strong>Patna Metro Projects</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Quality Construction',
                  'Timely Delivery',
                  'Cost Effective Solution',
                  'Govt. Approved Vendor'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-secondary" />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn More About Our Journey <ChevronRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0f2a5a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">Comprehensive Solutions for Bihar's Progress</h2>
            <p className="text-blue-100">From high-rise buildings to MSME consultancy, we offer a diverse range of services designed to meet the evolving needs of Patna and beyond.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1a3668] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-blue-900 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#0a1f44]/90 backdrop-blur rounded-xl flex items-center justify-center text-primary shadow-sm">
                    {index === 0 && <Building2 size={24} />}
                    {index === 1 && <FileText size={24} />}
                    {index === 2 && <HardHat size={24} />}
                    {index > 2 && <CheckCircle2 size={24} />}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-secondary text-white transition-colors">{service.title}</h3>
                  <p className="text-blue-100 mb-8 flex-grow">{service.description}</p>
                  <Link to={`/services/${service.slug}`} className="flex items-center gap-2 font-bold text-blue-300 group-hover:text-secondary transition-all">
                    Read More <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a1f44] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#0f2a5a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display">Why Industry Leaders Trust Desire Services?</h2>
                <div className="space-y-8">
                  {[
                    { title: "Expert Leadership", desc: "Led by Mr. Jay Kumar, our team brings decades of combined experience in complex infra projects." },
                    { title: "Quality Commitment", desc: "We use premium materials like Growel Paints and follow strict ISI standards for construction." },
                    { title: "On-Time Delivery", desc: "Our project management ensures that every project reaches completion within the agreed timeline." },
                    { title: "Govt. Registered", desc: "Fully registered and compliant with Bihar Government departments and MSME guidelines." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-secondary font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 font-display">{benefit.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-full max-w-md aspect-square bg-white/10 rounded-full border border-white/20 flex items-center justify-center p-8 animate-pulse">
                  <div className="w-full h-full bg-white/10 rounded-full border border-white/20 flex items-center justify-center">
                     <span className="text-8xl font-bold text-secondary">10+</span>
                  </div>
                </div>
                <p className="absolute bottom-0 text-center font-bold tracking-widest uppercase opacity-50">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-display">Ready to Start Your Next Big Project?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Get in touch with our experts today for a free consultation and project estimation. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary px-8 py-4 rounded-none font-bold flex items-center gap-2 hover:bg-gray-100 transition-all shadow-xl"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
              <Link 
                to="/contact" 
                className="bg-primary text-white px-8 py-4 rounded-none font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl"
              >
                Contact Us Now <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
