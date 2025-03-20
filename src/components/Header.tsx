

// import React, { useState } from 'react';
// import { Menu, X, Phone, Mail } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const navigation = [
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Contact Us', href: '/contact' },
    
//   ];

//   return (
//     <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
//       <div className="bg-purple-600 text-white py-2 hidden md:block">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-4">
//               <a href="tel:+918858484220" className="flex items-center">
//                 <Phone className="h-4 w-4 mr-2" />
//                 <span>+91 8858484220</span>
//               </a>
//               <a href="tel:+917014362177" className="flex items-center">
//                 <Phone className="h-4 w-4 mr-2" />
//                 <span>+91 7014362177</span>
//               </a>
//               <div className="flex items-center">
//                 <Mail className="h-4 w-4 mr-2" />
//                 <span>ankitpandey1259@gmail.com</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div
//             className="flex-shrink-0 cursor-pointer flex items-center"
//             onClick={() => navigate('/')}
//           >
//             <span className="text-2xl font-bold text-purple-600">Nodaysoff</span>
//             <a href="tel:+918858484220" className="ml-4 text-purple-600 font-medium md:hidden">
//             +91 7014362177
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react'; // Added ArrowRight explicitly
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-3 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+918858484220"
              className="flex items-center hover:text-purple-200 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 8858484220</span>
            </a>
            <a
              href="tel:+917014362177"
              className="flex items-center hover:text-purple-200 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 7014362177</span>
            </a>
            <a
              href="mailto:ankitpandey1259@gmail.com"
              className="flex items-center hover:text-purple-200 transition-colors duration-200"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>ankitpandey1259@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-medium">Follow Us:</span>
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">Twitter</a>
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center"
            onClick={() => navigate('/')}
          >
            <span className="text-3xl font-extrabold text-purple-600 tracking-tight">
              Nodaysoff
            </span>
            <a
              href="tel:+917014362177"
              className="ml-4 text-purple-600 font-medium lg:hidden flex items-center"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 7014362177</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link
                  to={item.href}
                  className="text-gray-800 hover:text-purple-600 transition-colors duration-200 font-medium text-base"
                >
                  {item.name}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/918858484220?text=Let%27s%20talk%20about%20your%20project!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            className="lg:hidden px-4 pt-4 pb-6 bg-white shadow-lg rounded-b-xl"
          >
            {navigation.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Link
                  to={item.href}
                  className="block px-4 py-3 text-gray-800 hover:text-purple-600 hover:bg-purple-50 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <a
                href="https://wa.me/918858484220?text=Let%27s%20talk%20about%20your%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 mt-2 bg-purple-600 text-white text-center rounded-md font-medium hover:bg-purple-700 transition-colors duration-200"
              >
                Get a Quote
              </a>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;