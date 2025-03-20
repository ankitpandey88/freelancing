import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Briefcase, Book, Mail, BarChart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' }}
    whileTap={{ scale: 0.98 }}
    className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 overflow-hidden group"
  >
    {/* Decorative Corner Element */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 opacity-10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:opacity-20 transition-opacity duration-300"></div>
    
    <div className="relative z-10 flex items-start space-x-4">
      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 transform group-hover:rotate-6 transition-transform duration-300">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-700 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  </motion.div>
);

const DynamicFeatures = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Interactive Service Showcase',
      description:
        'Hover effects and animations that provide more information about each service, enhancing user engagement.',
    },
    {
      icon: Users,
      title: 'Client Testimonials Slider',
      description:
        'A rotating carousel featuring feedback from satisfied clients to build trust and credibility.',
    },
    {
      icon: Briefcase,
      title: 'Case Studies Section',
      description:
        'Highlighting our successful projects with measurable outcomes to showcase our expertise.',
    },
    {
      icon: Book,
      title: 'Blog Integration',
      description:
        'Regularly updated articles on industry trends, tips, and insights to provide value to our audience.',
    },
    {
      icon: Mail,
      title: 'Contact Form with CTAs',
      description:
        'Strategically placed call-to-action buttons encouraging visitors to get in touch, request a quote, or subscribe to our newsletter.',
    },
    {
      icon: BarChart,
      title: 'Live Analytics Dashboard',
      description:
        'Real-time insights and performance metrics to help visitors understand our impact and results.',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Dynamic Features for Enhanced User Experience
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            To engage our visitors effectively, our homepage incorporates the following dynamic features:
          </p>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicFeatures;