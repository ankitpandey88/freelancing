// // import React from 'react';

// // const Footer = () => {
// //   const links = {
// //     useful: [
// //       'Home',
// //       'About Us',
// //       'Contact Us',
// //       'Blog',
// //       'Sitemap',
// //       'Shipping Policy',
// //       'Terms and Conditions',
// //       'Refund and Cancellation',
// //       'Privacy Policy',
// //     ],
// //     services: [
// //       'Custom ERP Development',
// //       'E-commerce Development',
// //       'Custom Application Development',
// //       'CRM Software',
// //       'GST Software',
// //       'Content Management',
// //     ],
// //   };

// //   return (
// //     <footer className="bg-gray-900 text-gray-300">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           <div>
// //             <h3 className="text-2xl font-bold text-white mb-4">Nodaysoff</h3>
// //             <p className="text-gray-400">
// //               Empowering businesses with innovative software solutions and cutting-edge technology.
// //             </p>
// //           </div>

// //           <div>
// //             <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
// //             <ul className="space-y-2">
// //               {links.useful.map((link, index) => (
// //                 <li key={index}>
// //                   <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
// //                     {link}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-lg font-semibold text-white mb-4">Additional Services</h4>
// //             <ul className="space-y-2">
// //               {links.services.map((service, index) => (
// //                 <li key={index}>
// //                   <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
// //                     {service}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
// //             <p className="text-gray-400 mb-4">
// //               Subscribe to our newsletter for updates and insights.
// //             </p>
// //             <div className="flex">
// //               <input
// //                 type="email"
// //                 placeholder="Your email"
// //                 className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
// //               />
// //               <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors duration-200">
// //                 Subscribe
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="border-t border-gray-800 mt-12 pt-8 text-center">
// //           <p className="text-gray-400">
// //             © {new Date().getFullYear()} Nodaysoff. All rights reserved.
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;










// import React from 'react';
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-black py-8">
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
//         {/* Decorative Background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-transparent opacity-20 pointer-events-none" />

//         {/* Company Info Section */}
//         <div className="text-center lg:text-left space-y-2">
//           <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-purple-600">
//             Nodaysoff
//           </h1>
//           <p className="text-lg font-medium text-gray-700">
//           Custom Software Development Services For Businesses.
//           </p>
//         </div>

//         {/* Contact Section */}
//         <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6">
//           {/* Email Link */}
//           <a
//             href="mailto:info@elxon.in"
//             className="flex items-center space-x-3 group"
//           >
//             <AiOutlineMail className="text-3xl text-black group-hover:text-purple-600 transition-transform transform group-hover:scale-110 duration-300" />
//             <span className="text-lg font-semibold group-hover:text-purple-600 transition-colors duration-300">
//               ankitpandey1259@gmail.com
//             </span>
//           </a>

//           {/* Phone Link */}
//           <a
//             href="tel:+917518588115"
//             className="flex items-center space-x-3 group"
//           >
//             <AiOutlinePhone className="text-3xl text-black group-hover:text-purple-600 transition-transform transform group-hover:scale-110 duration-300" />
//             <span className="text-lg font-semibold group-hover:text-purple-600 transition-colors duration-300">
//               +91 8858484220
//             </span>
//           </a>
//         </div>

//         {/* Social Media Section */}
//         <div className="flex space-x-4">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125 duration-300 text-3xl"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-125 duration-300 text-3xl"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125 duration-300 text-3xl"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-125 duration-300 text-3xl"
//           >
//             <FaLinkedinIn />
//           </a>
//         </div>
//       </div>

//       {/* Decorative Border */}
//       <div className="mt-6 h-1 bg-gradient-to-r from-black via-purple-600 to-black rounded-full shadow-lg"></div>

//       {/* Copyright Section */}
//       <div className="mt-6 pt-2 text-center">
//         <p className="text-sm font-medium text-gray-800">
//           &copy; {new Date().getFullYear()}  Nodaysoff. All Rights Reserved.
//         </p>
//       </div>


//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
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
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 relative z-10">
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="text-center lg:text-left space-y-3">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-purple-400">
              No Days Off
            </h1>
            <p className="text-lg font-medium text-gray-300 max-w-md">
              Custom Software Development Services For Businesses. Empowering innovation with cutting-edge solutions.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Email Link */}
            <a
              href="mailto:contact@nodaysoff.in"
              className="flex items-center space-x-3 group"
            >
              <AiOutlineMail className="text-3xl text-indigo-400 group-hover:text-purple-400 transition-transform transform group-hover:scale-110 duration-300" />
              <span className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                contact@nodaysoff.in
              </span>
            </a>

            {/* Phone Link */}
            <a
              href="tel:+918858484220"
              className="flex items-center space-x-3 group"
            >
              <AiOutlinePhone className="text-3xl text-indigo-400 group-hover:text-purple-400 transition-transform transform group-hover:scale-110 duration-300" />
              <span className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors duration-300">
                +91 8858484220
              </span>
            </a>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={itemVariants} className="flex space-x-6">
            {[
              { href: "https://facebook.com", icon: FaFacebookF, color: 'text-blue-400 hover:text-blue-600' },
              { href: "https://instagram.com", icon: FaInstagram, color: 'text-pink-400 hover:text-pink-600' },
              { href: "https://twitter.com", icon: FaTwitter, color: 'text-blue-300 hover:text-blue-500' },
              { href: "https://linkedin.com", icon: FaLinkedinIn, color: 'text-blue-600 hover:text-blue-800' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-transform transform hover:scale-125 duration-300 text-3xl`}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Decorative Border */}
        <motion.div
          variants={itemVariants}
          className="mt-10 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-full shadow-lg"
        ></motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-4 text-center"
        >
          <p className="text-sm font-medium text-gray-400">
            © {new Date().getFullYear()} No Days Off. All Rights Reserved.
          </p>
<<<<<<< HEAD
        </motion.div>
      </motion.div>
=======
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Email Link */}
          <a
            href="mailto:info@elxon.in"
            className="flex items-center space-x-3 group"
          >
            <AiOutlineMail className="text-3xl text-black group-hover:text-purple-600 transition-transform transform group-hover:scale-110 duration-300" />
            <span className="text-lg font-semibold group-hover:text-purple-600 transition-colors duration-300">
              madhav@madnismedia.com
            </span>
          </a>

          {/* Phone Link */}
          <a
            href="tel:+917518588115"
            className="flex items-center space-x-3 group"
          >
            <AiOutlinePhone className="text-3xl text-black group-hover:text-purple-600 transition-transform transform group-hover:scale-110 duration-300" />
            <span className="text-lg font-semibold group-hover:text-purple-600 transition-colors duration-300">
              +91 8595000523
            </span>
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="mt-6 h-1 bg-gradient-to-r from-black via-purple-600 to-black rounded-full shadow-lg"></div>

      {/* Copyright Section */}
      <div className="mt-6 pt-2 text-center">
        <p className="text-sm font-medium text-gray-800">
          &copy; {new Date().getFullYear()}  Nodaysoff. All Rights Reserved.
        </p>
      </div>


>>>>>>> aac7bffb9d69316ae5e73b29b2e8024450a8a410
    </footer>
  );
}

export default Footer;