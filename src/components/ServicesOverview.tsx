import React from 'react';
import { Monitor, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={link}
      className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 group"
    >
      Learn More
      <svg
        className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  </div>
);

const ServicesOverview = () => {
  const services = [
    {
      icon: Database,
      title: 'Customized CRM Development',
      description: 'We use the most innovative solutions to provide tailored development services. Your wish is a command for us.',
      link: '/service/crm',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'We define the backend of your mobile app and finalize wireframes to begin the development process.',
      link: '/service/mobile',
    },
    {
      icon: Monitor,
      title: 'Web App Development',
      description: 'We offer end-to-end custom web development services, including migration, updates, and ongoing maintenance.',
      link: '/service/web',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-rose-50 to-teal-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Overview</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-rose-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;