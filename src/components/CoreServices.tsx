// import React from 'react';
// import { 
//   Code2, Database, CreditCard, Brain, 
//   Palette, Globe, Smartphone ,CalendarCheck , MessageCircle
// } from 'lucide-react';

// const CoreServices = () => {
//   const services = [
//     {
//       icon: Code2,
//       title: 'Custom Development',
//       description: 'Tailored software solutions for unique business needs.',
//     },
//     {
//       icon: Database,
//       title: 'CRM Software',
//       description: 'Boost sales team efficiency and overall revenue.',
//     },
//     {
//       icon: CreditCard,
//       title: 'POS Billing Software',
//       description: 'Automate transactions and monitor critical data.',
//     },
//     {
//       icon: Brain,
//       title: 'AI/ML Solutions',
//       description: 'Cutting-edge solutions for reliability, speed, and security.',
//     },
//     {
//       icon: Palette,
//       title: 'UI/UX Development',
//       description: 'Interactive and appealing designs to elevate projects.',
//     },
//     {
//       icon: Globe,
//       title: 'Web App Development',
//       description: 'High-quality applications for seamless operations.',
//     },
//     {
//       icon: Smartphone,
//       title: 'Mobile App Development',
//       description: 'Engaging mobile applications for growing audiences.',
//     },
//     {
//       icon: CalendarCheck,
//       title: 'Attendance System',
//       description: 'Efficient tracking and management of attendance for businesses and schools.',
//     },
//     {
//       icon: MessageCircle,
//       title: 'Chatbot Solution',
//       description: 'Interactive AI-powered chatbot to enhance customer engagement and support.',
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
//           <p className="text-xl text-gray-600">"Our Services Empower Enterprises in the Digital Sphere"</p>
//           <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
//                   <Icon className="h-6 w-6 text-indigo-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreServices;

import React from 'react';
import { 
  Code2, Database, CreditCard, Brain, 
  Palette, Globe, Smartphone, CalendarCheck, MessageCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const CoreServices = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Tailored software solutions for unique business needs.',
    },
    {
      icon: Database,
      title: 'CRM Software',
      description: 'Boost sales team efficiency and overall revenue.',
    },
    {
      icon: CreditCard,
      title: 'POS Billing Software',
      description: 'Automate transactions and monitor critical data.',
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Cutting-edge solutions for reliability, speed, and security.',
    },
    {
      icon: Palette,
      title: 'UI/UX Development',
      description: 'Interactive and appealing designs to elevate projects.',
    },
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'High-quality applications for seamless operations.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Engaging mobile applications for growing audiences.',
    },
    {
      icon: CalendarCheck,
      title: 'Attendance System',
      description: 'Efficient tracking and management of attendance for businesses and schools.',
    },
    {
      icon: MessageCircle,
      title: 'Chatbot Solution',
      description: 'Interactive AI-powered chatbot to enhance customer engagement and support.',
    },
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
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
            Core Services
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            "Our Services Empower Enterprises in the Digital Sphere"
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden group"
              >
                {/* Decorative Hover Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {service.description}
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

export default CoreServices;