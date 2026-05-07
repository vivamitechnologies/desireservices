import { motion } from 'motion/react';
import { Building2, Landmark, GraduationCap, HeartPulse, Hammer, Train } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';
import metroImage from '../assets/images/regenerated_image_1778067643495.jpg';

export default function Departments() {
  const icons = [Building2, Landmark, GraduationCap, HeartPulse, Hammer, Train];

  return (
    <div className="pt-20">
      <section className="bg-primary py-24 text-white text-center rounded-b-[4rem]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Departments We Serve</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto opacity-80">
            A diverse range of government sectors that trust Desire Services for infrastructure and maintenance.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a1f44]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.departments.map((dept, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={dept}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a3668] border border-blue-900 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group text-white"
                >
                  <div className="w-20 h-20 bg-blue-900/50 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:rotate-12 group-hover:text-white transition-all mb-8">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-display leading-tight">{dept}</h3>
                  <div className="h-1 w-12 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-blue-200 mt-6 text-sm leading-relaxed">
                    Long-standing partnership in delivering quality {dept.toLowerCase()} solutions for the people of Bihar.
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-24 relative rounded-[3rem] overflow-hidden bg-gray-900 text-white p-12 md:p-20">
             <div className="absolute inset-0 opacity-30">
               <img src={metroImage} className="w-full h-full object-cover" alt="" />
             </div>
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                   <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Major Partnership</span>
                   <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display italic">Patna Metro Projects</h2>
                   <p className="text-gray-300 leading-relaxed mb-10">
                      We are honored to contribute to the landmark <strong>Patna Metro Project</strong>, helping build the foundation of Bihar's future rapid transit system. 
                      Our commitment to engineering precision and safety protocols makes us a reliable partner for such large-scale urban infrastructure.
                   </p>
                   <div className="flex items-center gap-4 text-secondary font-bold">
                      <span className="w-12 h-0.5 bg-secondary" />
                      Contributing to Progress
                   </div>
                </div>
                <div className="flex justify-center">
                   <div className="w-48 h-48 rounded-none border-4 border-secondary/30 flex items-center justify-center p-4">
                      <div className="w-full h-full rounded-none border border-secondary/50 flex items-center justify-center">
                         <Train size={64} className="text-secondary" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
