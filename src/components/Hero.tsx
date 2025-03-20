

// import React from 'react';
// import { ArrowRight, Rocket, Zap, Shield } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 flex items-center py-32 overflow-hidden relative">
//       {/* Subtle Grid Background */}
//       <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-5"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Left Content */}
//           <div className="space-y-6">
//             <motion.div variants={itemVariants}>
//               <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full">
//                 <Rocket className="w-4 h-4 mr-2" />
//                 Tech Revolution
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
//             >
//               Power Up Your Vision
//               <br />
//               <span className="text-blue-400">with Smart Tech</span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-lg text-gray-200 max-w-lg leading-relaxed"
//             >
//               We craft innovative software solutions that accelerate your business. Harness the latest in AI, cloud computing, and cybersecurity to stay ahead in a digital world.
//             </motion.p>

//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
//               <a
//                 href="https://wa.me/918858484220?text=Are%20you%20interested%20in%20Software%20Development%20Service%3F"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//               <button className="px-6 py-3 text-blue-300 border border-blue-500/50 rounded-md hover:bg-blue-500/10 transition-colors duration-300">
//                 Learn More
//               </button>
//             </motion.div>

//             <motion.div variants={itemVariants} className="flex gap-6 text-sm text-gray-400">
//               <span className="flex items-center">
//                 <Zap className="w-4 h-4 mr-1 text-blue-400" />
//                 Lightning Fast
//               </span>
//               <span className="flex items-center">
//                 <Shield className="w-4 h-4 mr-1 text-blue-400" />
//                 Secure by Design
//               </span>
//             </motion.div>
//           </div>

//           {/* Right Visual */}
//           <motion.div variants={itemVariants} className="relative">
//             <div className="relative z-10">
//               <img
//                 src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1742402159~exp=1742405759~hmac=026bdeb8f0af1543c1cf764190971fc6d04b336a7a452ad1a7738d29b885cd24&w=1380"
//                 alt="Tech workspace with code"
//                 className="rounded-xl w-full h-[450px] object-cover shadow-lg border border-blue-800/50"
//               />
//             </div>

//             {/* Decorative Glow */}
//             <div className="absolute inset-0 -z-10">
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
//             </div>

//             {/* Floating Badge */}
//             <div className="absolute top-4 right-4 bg-blue-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-blue-200 flex items-center">
//               <Zap className="w-3 h-3 mr-1" />
//               High Performance
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Highlights */}
//         <motion.div
//           className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={itemVariants} className="bg-blue-900/30 p-4 rounded-lg">
//             <div className="text-3xl font-bold text-blue-400">10x</div>
//             <div className="text-gray-300 text-sm">Faster Delivery</div>
//           </motion.div>
//           <motion.div variants={itemVariants} className="bg-blue-900/30 p-4 rounded-lg">
//             <div className="text-3xl font-bold text-blue-400">100%</div>
//             <div className="text-gray-300 text-sm">Custom Solutions</div>
//           </motion.div>
//           <motion.div variants={itemVariants} className="bg-blue-900/30 p-4 rounded-lg">
//             <div className="text-3xl font-bold text-blue-400">5K+</div>
//             <div className="text-gray-300 text-sm">Active Users</div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { ArrowRight, Rocket, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 flex items-center py-32 overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full">
                <Rocket className="w-4 h-4 mr-2" />
                Brand Innovation
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
            >
              Empowering Brands with
              <br />
              <span className="text-blue-400">Innovative Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-200 max-w-lg leading-relaxed"
            >
              At No Days Off, we are a collective of seasoned professionals and visionary minds dedicated to building brands that stand out. Our mission is to identify and set trends, ensuring your business not only keeps up but leads the way.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918858484220?text=Are%20you%20interested%20in%20Software%20Development%20Service%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-6 py-3 text-blue-300 border border-blue-500/50 rounded-md hover:bg-blue-500/10 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-1 text-blue-400" />
                Trend Setting
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-blue-400" />
                Strategic Growth
              </span>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1742402159~exp=1742405759~hmac=026bdeb8f0af1543c1cf764190971fc6d04b336a7a452ad1a7738d29b885cd24&w=1380"
                alt="Brand innovation workspace"
                className="rounded-xl w-full h-[450px] object-cover shadow-lg border border-blue-800/50"
              />
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-blue-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-blue-200 flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              Marketing Excellence
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Highlights */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="bg-blue-900/30 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">360°</div>
            <div className="text-gray-300 text-sm">Marketing Solutions</div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-blue-900/30 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">100%</div>
            <div className="text-gray-300 text-sm">Custom Development</div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-blue-900/30 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-300 text-sm">Business Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;