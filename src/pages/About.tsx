import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';

export default function About() {
  return (
    <div className="pt-20">
      {/* Breadcrumb Header */}
      <section className="bg-[#0f172a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Construction Site Background" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">About Desire Services</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            A decade of building infrastructure and empowering businesses across Bihar.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 bg-[#0a1f44]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
            <div className="space-y-6">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm block">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight text-white">
                Rooted in <span className="text-primary italic">Patna</span>, Building for Bihar.
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Desire Services is a premier construction firm and consultancy located in the heart of Patna, Bihar. 
                With a focus on quality, reliability, and innovative engineering, we have established ourselves 
                as a preferred partner for both private and government sectors.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Our expertise spans across diverse sectors including building construction, maintenance work, 
                and high-level MSME consultancy. We take pride in being a registered government contractor, 
                contributing to building schools, hospitals, and critical urban infrastructure across the state.
              </p>
              <div className="flex gap-4 p-6 bg-[#0f2a5a] rounded-3xl border border-blue-900">
                <Award className="text-secondary shrink-0" size={32} />
                <div>
                  <p className="font-bold text-white">Registered Govt. Contractor</p>
                  <p className="text-sm text-blue-200 italic">Trusted by various state government departments of Bihar.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
                alt="Construction Site in Patna" 
                className="rounded-[3rem] shadow-2xl w-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#1a3668] p-8 rounded-3xl shadow-xl max-w-xs border border-blue-900 hidden md:block">
                 <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-green-400" size={24} />
                    <span className="font-bold text-white">Certified Quality</span>
                 </div>
                 <p className="text-xs text-blue-100 leading-relaxed">
                    Authorized dealers of Growel Paints ensure that all our finishes are industry-grade.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-[#0f2a5a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1a3668] p-10 rounded-[2.5rem] shadow-sm border border-blue-900 text-center text-white"
            >
              <div className="w-16 h-16 bg-blue-900/50 text-blue-200 rounded-none flex items-center justify-center mx-auto mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">To provide top-tier construction and consultancy services that exceed client expectations through innovation and integrity.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1a3668] p-10 rounded-[2.5rem] shadow-sm border border-blue-900 text-center text-white"
            >
              <div className="w-16 h-16 bg-orange-900/30 text-secondary rounded-none flex items-center justify-center mx-auto mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">To be the catalyst for Bihar's infrastructure transformation, known for building sustainable and high-quality structures.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1a3668] p-10 rounded-[2.5rem] shadow-sm border border-blue-900 text-center text-white"
            >
              <div className="w-16 h-16 bg-red-900/30 text-red-400 rounded-none flex items-center justify-center mx-auto mb-8">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Our Values</h3>
              <p className="text-blue-100 leading-relaxed">Integrity, Quality, Punctuality, and Client Centricity are the pillars that support everything we do.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="py-24 bg-[#0a1f44] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center text-white">
            <div className="lg:w-1/2">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-4">Regional Expertise</span>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Experience In Various Sectors</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-none bg-primary flex items-center justify-center text-white shrink-0 mt-1">1</div>
                        <div>
                            <h4 className="font-bold text-xl mb-1">Health Department</h4>
                            <p className="text-blue-100 text-sm">Specializing in hospital maintenance and medical infrastructure upgrades across Bihar.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-none bg-primary flex items-center justify-center text-white shrink-0 mt-1">2</div>
                        <div>
                            <h4 className="font-bold text-xl mb-1">Education Sector</h4>
                            <p className="text-blue-100 text-sm">Empowering the youth by building modern schools and training centers with quality finishes.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-none bg-primary flex items-center justify-center text-white shrink-0 mt-1">3</div>
                        <div>
                            <h4 className="font-bold text-xl mb-1">Patna Metro Projects</h4>
                            <p className="text-blue-100 text-sm">Proud contributor to one of Bihar's most ambitious transit projects.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
                 className="rounded-2xl w-full h-64 object-cover shadow-lg" 
                 alt="Desire Services Construction Team" 
                 referrerPolicy="no-referrer"
               />
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                 className="rounded-2xl mt-8 w-full h-64 object-cover shadow-lg" 
                 alt="Desire Services Team" 
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
