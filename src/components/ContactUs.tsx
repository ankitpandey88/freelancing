// import React from 'react';
// import { MapPin, Mail, Phone } from 'lucide-react';

// const ContactUs = () => {
//   return (
//     <section className="py-20 bg-gray-50" id="contact">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with Us</h2>
//           <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
//                 <p className="text-gray-600">info@martvalley.com</p>
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

//           <form className="space-y-6">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <textarea
//                 rows={4}
//                 placeholder="Your Message"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               ></textarea>
//             </div>
//             <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
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

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with Us</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">A-1, 2D, Sector 63, Noida, U.P - 201301</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">ankitpandey1259@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call</h3>
                <p className="text-gray-600">+91 8858484220 | +91 70143 62177</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-6 shadow-md rounded-lg">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
