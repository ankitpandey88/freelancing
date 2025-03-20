

// import React from 'react';
// import { Monitor, Smartphone, Database, Megaphone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // Service Card Component
// const ServiceCard = ({ icon: Icon, title, description, link }) => (
//   <motion.div
//     whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
//     className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
//   >
//     <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mb-5">
//       <Icon className="h-7 w-7 text-white" />
//     </div>
//     <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
//     <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>
//     <Link
//       to={link}
//       className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 group"
//     >
//       Learn More
//       <svg
//         className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 5l7 7-7 7"
//         />
//       </svg>
//     </Link>
//   </motion.div>
// );

// // Scrollable Highlight Card
// const HighlightCard = ({ icon: Icon, title, description }) => (
//   <motion.div
//     whileHover={{ scale: 1.02 }}
//     className="flex-shrink-0 w-72 bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-6 rounded-xl shadow-lg"
//   >
//     <Icon className="h-8 w-8 mb-4" />
//     <h4 className="text-lg font-semibold mb-2">{title}</h4>
//     <p className="text-sm opacity-90">{description}</p>
//   </motion.div>
// );

// const ServicesOverview = () => {
//   const services = [
//     {
//       icon: Database,
//       title: 'Customized CRM Development',
//       description:
//         'Tailored CRM solutions built with cutting-edge technology to streamline your business processes and enhance customer relationships.',
//       link: '/service/crm',
//     },
//     {
//       icon: Smartphone,
//       title: 'Mobile App Development',
//       description:
//         'From concept to launch, we craft intuitive mobile apps with robust backends and stunning UI/UX for iOS and Android.',
//       link: '/service/mobile',
//     },
//     {
//       icon: Monitor,
//       title: 'Web App Development',
//       description:
//         'Full-stack web solutions with seamless migrations, real-time updates, and proactive maintenance for optimal performance.',
//       link: '/service/web',
//     },
//     {
//       icon: Megaphone,
//       title: 'Digital Marketing',
//       description:
//         'Boost your online presence with SEO, social media strategies, and targeted campaigns designed to maximize ROI.',
//       link: '/service/digital-marketing',
//     },
//   ];

//   const highlights = [
//     {
//       icon: Database,
//       title: 'Data-Driven Insights',
//       description: 'Leverage analytics to make informed decisions and optimize your strategy.',
//     },
//     {
//       icon: Smartphone,
//       title: 'Cross-Platform Apps',
//       description: 'Reach users on any device with apps that perform flawlessly.',
//     },
//     {
//       icon: Megaphone,
//       title: 'Marketing Automation',
//       description: 'Streamline campaigns with smart automation tools.',
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50" id="services">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our Expert Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Transforming your ideas into reality with innovative solutions tailored to your needs.
//           </p>
//           <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mt-4 rounded-full"></div>
//         </motion.div>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} />
//           ))}
//         </div>

      
//       </div>
//     </section>
//   );
// };

// export default ServicesOverview;


import React from 'react';
import { Monitor, Smartphone, Database, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
  >
    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mb-5">
      <Icon className="h-7 w-7 text-white" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

// Scrollable Highlight Card
const HighlightCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex-shrink-0 w-72 bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-6 rounded-xl shadow-lg"
  >
    <Icon className="h-8 w-8 mb-4" />
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm opacity-90">{description}</p>
  </motion.div>
);

const ServicesOverview = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Innovative Marketing',
      description:
        'Cutting-edge marketing strategies to set trends and elevate your brand above the competition.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Custom mobile solutions designed to enhance user experience and drive business growth.',
    },
    {
      icon: Monitor,
      title: 'Software Development',
      description:
        'Comprehensive software solutions built by visionary minds to keep your business ahead.',
    },
    {
      icon: Database,
      title: 'Business Consultancy',
      description:
        'Strategic guidance to optimize operations and achieve sustainable success.',
    },
  ];

  const highlights = [
    {
      icon: Megaphone,
      title: 'Trend Setting',
      description: 'We identify and create market trends to keep your brand leading the way.',
    },
    {
      icon: Monitor,
      title: 'Innovative Tech',
      description: 'Leverage the latest technology for standout digital solutions.',
    },
    {
      icon: Database,
      title: 'Strategic Success',
      description: 'Data-backed consultancy for impactful business decisions.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At No Days Off, we deliver marketing, development, and consultancy solutions to build brands that lead.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;