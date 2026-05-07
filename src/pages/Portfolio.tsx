import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { siteConfig } from '../constants/siteConfig';

export default function Portfolio() {
  const [filter, setFilter] = useState("All Projects");
  
  const categories = ["All Projects", "Government", "Construction", "MSME", "Maintenance", "Patna Metro"];

  const filteredProjects = filter === "All Projects" 
    ? siteConfig.portfolio 
    : siteConfig.portfolio.filter(project => project.category === filter);

  return (
    <div className="pt-20">
      <section className="bg-[#0f172a] py-24 border-b border-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Showcasing our commitment to quality across Bihar's landscape. 
            From government infrastructure to MSME growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#0a1f44]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold border-2 transition-all duration-300 ${
                  filter === cat 
                    ? "bg-secondary border-secondary text-white shadow-lg shadow-secondary/20" 
                    : "border-blue-900 text-blue-200 hover:border-primary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-[#1a3668] aspect-[4/5] shadow-xl border border-blue-900"
                >
                  {/* Image with Zoom Effect */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-in-out" 
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 self-start">
                      {item.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 font-display group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <div className="h-1 w-0 bg-primary group-hover:w-16 transition-all duration-500 rounded-full mt-2" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-blue-300 italic text-xl">No projects found in this category yet.</p>
            </motion.div>
          )}

          {/* Coming Soon Section */}
          <div className="mt-32 text-center">
             <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               viewport={{ once: true }}
               className="bg-[#0f2a5a] p-12 md:p-20 rounded-[4rem] border-2 border-dashed border-blue-900 relative overflow-hidden group shadow-2xl"
             >
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -translate-x-full group-hover:translate-x-full transition-transform duration-[2s] pointer-events-none" />
                <h3 className="text-3xl font-bold text-white mb-6 font-display italic">More Landmarks in Progress</h3>
                <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
                  Desire Services is currently executing multiple high-impact government and private tenders across 
                  <span className="text-primary font-bold"> Patna</span>, 
                  <span className="text-secondary font-bold"> Bhagalpur</span>, and 
                  <span className="text-primary font-bold"> Gaya</span>.
                </p>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
