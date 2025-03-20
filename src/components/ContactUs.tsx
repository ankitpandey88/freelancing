

// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import { MapPin, Mail, Phone } from "lucide-react";
// import { toast } from "react-hot-toast";

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Form Validation
//     const name = form.current.name.value.trim();
//     const email = form.current.email.value.trim();
//     const message = form.current.message.value.trim();

//     if (!name || !email || !message) {
//       toast.error("Please fill all fields before sending!");
//       return;
//     }

//     emailjs
//       .sendForm(
//         "service_05fy30w", // Your EmailJS Service ID
//         "template_r8b3ddb", // Your EmailJS Template ID
//         form.current,
//         "MNw6gCpOD2lvEXGZG" // Your EmailJS Public Key
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully!");
//           form.current.reset(); // Clear form after success
//         },
//         (error) => {
//           console.error("EmailJS Error:", error);
//           toast.error("Failed to send message. Please try again.");
//         }
//       );
//   };

//   return (
//     <section className="py-24 bg-gray-50" id="contact">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with Us</h2>
//           <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="flex items-start">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <MapPin className="h-6 w-6 text-indigo-600" />
//               </div>
//               <div className="ml-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
//                 <p className="text-gray-600">A-1, 2D, Sector 63, Noida, U.P - 201301</p>
//               </div>
//             </div>

//             <div className="flex items-start">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Mail className="h-6 w-6 text-indigo-600" />
//               </div>
//               <div className="ml-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
//                 <p className="text-gray-600">ankitpandey1259@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-start">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Phone className="h-6 w-6 text-indigo-600" />
//               </div>
//               <div className="ml-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Call</h3>
//                 <p className="text-gray-600">+91 8858484220 | +91 70143 62177</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-6 shadow-md rounded-lg">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <textarea
//                 rows={4}
//                 name="message"
//                 placeholder="Your Message"
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "react-hot-toast";
import { motion } from 'framer-motion';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Form Validation
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill all fields before sending!");
      return;
    }

    emailjs
      .sendForm(
        "service_05fy30w", // Your EmailJS Service ID
        "template_r8b3ddb", // Your EmailJS Template ID
        form.current,
        "MNw6gCpOD2lvEXGZG" // Your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset(); // Clear form after success
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-indigo-50 relative overflow-hidden" id="contact">
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
            Get in Touch with Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            {[
              { icon: MapPin, title: 'Location', text: 'A-1, 2D, Sector 63, Noida, U.P - 201301' },
              { icon: Mail, title: 'Email', text: 'ankitpandey1259@gmail.com' },
              { icon: Phone, title: 'Call', text: '+91 8858484220 | +91 70143 62177' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-white p-6 rounded-2xl shadow-md border border-indigo-100 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={itemVariants}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-indigo-100"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-500 transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-500 transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-500 transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;