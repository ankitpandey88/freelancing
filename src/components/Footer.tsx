import React from 'react';

const Footer = () => {
  const links = {
    useful: [
      'Home',
      'About Us',
      'Contact Us',
      'Blog',
      'Sitemap',
      'Shipping Policy',
      'Terms and Conditions',
      'Refund and Cancellation',
      'Privacy Policy',
    ],
    services: [
      'Custom ERP Development',
      'E-commerce Development',
      'Custom Application Development',
      'CRM Software',
      'GST Software',
      'Content Management',
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">MartValley</h3>
            <p className="text-gray-400">
              Empowering businesses with innovative software solutions and cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {links.useful.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Additional Services</h4>
            <ul className="space-y-2">
              {links.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MartValley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;