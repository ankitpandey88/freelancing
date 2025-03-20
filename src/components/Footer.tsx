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
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
