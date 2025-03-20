import React from 'react';
import { 
  Rocket, Map, Lightbulb, Award, 
  Search, Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Skyrocketing Growth',
      description: 'Thriving towards world-class development standards.',
    },
    {
      icon: Map,
      title: 'Project Mapping',
      description: 'Validating ideas through real-time mapping.',
    },
    {
      icon: Lightbulb,
      title: 'Realistic Thinking',
      description: 'Modernizing businesses for exponential growth.',
    },
    {
      icon: Award,
      title: 'Digital Excellence',
      description: 'Enabling operational excellence.',
    },
    {
      icon: Search,
      title: 'Competitor Research',
      description: 'Strategies to keep our clients ahead.',
    },
    {
      icon: Zap,
      title: 'Innovative Ideas',
      description: 'Revamping businesses without changing core values.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-indigo-50 relative overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            About Us
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Building Custom Solutions Across Industries
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100 relative overflow-hidden group"
              >
                {/* Decorative Hover Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;