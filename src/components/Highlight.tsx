import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Highlight = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-400 opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 to-white"
          >
            Pushing The Business Boundaries By Innovative Solutions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Here at No Days Off Services, we specialize in challenging the limits through custom software development services tailored to suit your business. Addressing the diverse needs of our clients is our primary forte.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-indigo-100 text-indigo-600 rounded-lg text-lg font-semibold hover:from-indigo-100 hover:to-white hover:text-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Learn More
              <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlight;