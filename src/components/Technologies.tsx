import React from 'react';
import { 
  Cloud, Bitcoin, Glasses, Palette, 
  Brain, Wifi, Database, Headphones 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const technologies = [
    { icon: Cloud, name: 'Cloud Computing' },
    { icon: Bitcoin, name: 'Blockchain Development' },
    { icon: Glasses, name: 'Augmented Reality Solutions' },
    { icon: Palette, name: 'UX/UI Design' },
    { icon: Brain, name: 'Artificial Intelligence' },
    { icon: Wifi, name: 'Internet of Things (IoT)' },
    { icon: Database, name: 'Machine Learning' },
    { icon: Headphones, name: 'Virtual Reality Solutions' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Technologies
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            "Serving Cutting-Edge Technologies to Fulfill the Dreams of Businesses"
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100 flex flex-col items-center text-center relative overflow-hidden group"
              >
                {/* Decorative Hover Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;