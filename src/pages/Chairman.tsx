import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Rocket, GraduationCap, Users, Lightbulb, BookOpen, Briefcase, Award } from 'lucide-react';

export default function Chairman() {
  useEffect(() => {
    document.title = "Our Chairman – Mr. Jai Kumar | Desire Services";
    
    // Add meta description dynamically
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Meet Mr. Jai Kumar, Chairman of Desire Services. An educationist, social thinker, and youth motivator dedicated to Bihar's development and youth empowerment.");
    }
  }, []);

  const objectives = [
    {
      icon: <GraduationCap className="text-secondary" size={32} />,
      text: "To provide quality education and career guidance to students"
    },
    {
      icon: <Users className="text-secondary" size={32} />,
      text: "To create better job opportunities for the youth of Bihar"
    },
    {
      icon: <Lightbulb className="text-secondary" size={32} />,
      text: "To support skill development and entrepreneurship"
    },
    {
      icon: <Briefcase className="text-secondary" size={32} />,
      text: "To connect education with employment and practical growth"
    },
    {
      icon: <Award className="text-secondary" size={32} />,
      text: "To inspire students to achieve success with confidence and dedication"
    }
  ];

  const missions = [
    "To work towards 100% literacy and quality education in Bihar",
    "To guide students for competitive exams, careers, and professional growth",
    "To create awareness about skills, technology, and modern opportunities",
    "To motivate youth to become job creators instead of job seekers",
    "To bring positive social and educational transformation in Bihar"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
            alt="Mr. Jai Kumar Chairman of Desire Services Bihar" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold mb-6 inline-block tracking-wider uppercase">
              Leading with Vision
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
              A New Hope for <span className="text-secondary">Bihar’s Youth</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium">
              Educationist | Social Thinker | Youth Motivator
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="bg-secondary text-white px-10 py-4 rounded-none font-bold hover:bg-orange-600 transition-all flex items-center gap-2 shadow-lg">
                Contact Us
              </a>
              <a href="#about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-none font-bold hover:bg-white/20 transition-all">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="text-9xl text-gray-100 absolute -top-16 left-1/2 -translate-x-1/2 -z-10 font-serif">"</span>
              <p className="text-2xl md:text-3xl italic leading-relaxed text-gray-700 font-medium">
                Every student carries a dream, but many dreams remain incomplete due to lack of guidance and opportunities. Mr. Jai Kumar has taken a step to change this reality. Through education, motivation, and employment support, he is building hope for thousands of young minds in Bihar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src="/chairman.jpg" 
                  alt="Mr. Jai Kumar Chairman of Desire Services Bihar" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="font-bold text-3xl">Founder</p>
                <p className="text-blue-200">Desire Services</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary font-bold tracking-widest uppercase mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-primary font-display">Mr. Jai Kumar</h3>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Mr. Jai Kumar is an educationist, social thinker, and youth motivator from Bihar who believes that education is the strongest tool to transform society.
                </p>
                <p>
                  He completed his <strong>Post Graduation in Chemistry from Patna University</strong> and dedicated several years to teaching NEET and JEE aspirants.
                </p>
                <p>
                  During his teaching journey, he closely observed the struggles of talented students and unemployed youth in Bihar. This inspired him to start <strong>Desire Services</strong>, an initiative focused on education, skill development, career guidance, and employment opportunities for the youth of Bihar.
                </p>
                <p>
                  His vision is not only to educate students but also to create opportunities that empower them to become self-dependent and successful in life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary font-display">Our Objectives</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {obj.icon}
                </div>
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {obj.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10"
            >
              <Eye size={64} className="text-secondary mb-8" />
              <h2 className="text-5xl font-bold mb-8 font-display">Vision</h2>
              <p className="text-2xl md:text-3xl font-light italic leading-snug mb-8">
                “To build an educated, skilled, and self-reliant Bihar where every student gets equal opportunities to learn, grow, and succeed.”
              </p>
              <div className="w-16 h-1 bg-secondary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg text-blue-100 space-y-6"
            >
              <p>
                Mr. Jai Kumar believes that education is not only about degrees but about creating a better future for society. 
              </p>
              <p className="text-2xl text-white font-medium">
                His dream is to reduce unemployment and help Bihar emerge as a center of knowledge, talent, and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-10 text-primary font-display flex items-center gap-4">
                <Rocket className="text-secondary" size={48} />
                Mission
              </h2>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border-l-4 border-secondary hover:bg-orange-50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 mt-1" />
                    <span className="text-lg font-medium text-gray-800">{mission}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                  alt="Career guidance and success for youth in Bihar" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl w-[120%] h-[120%] rounded-full -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">Let's Build the Future of Bihar Together</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Join Mr. Jai Kumar's vision for an empowered and skilled youth in Bihar. Education, career guidance, and employment support—all under one roof.
            </p>
            <a href="/contact" className="bg-primary text-white border-2 border-primary px-12 py-5 rounded-none font-bold text-lg hover:bg-transparent hover:text-white transition-all shadow-2xl inline-block">
              Connect With Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
