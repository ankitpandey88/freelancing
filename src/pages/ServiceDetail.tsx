import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = {
  crm: {
    title: 'Customized CRM Development',
    description: 'We use the most innovative solutions to provide tailored development services. Your wish is a command for us.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    features: [
      'Custom workflow automation',
      'Integration with existing systems',
      'Real-time analytics dashboard',
      'Mobile-first design',
      'Cloud-based solution',
    ],
  },
  mobile: {
    title: 'Mobile App Development',
    description: 'We define the backend of your mobile app and finalize wireframes to begin the development process.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    features: [
      'Native and cross-platform development',
      'UI/UX design',
      'API integration',
      'Push notifications',
      'Offline functionality',
    ],
  },
  web: {
    title: 'Web App Development',
    description: 'We offer end-to-end custom web development services, including migration, updates, and ongoing maintenance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    features: [
      'Responsive design',
      'Progressive Web Apps',
      'Performance optimization',
      'SEO-friendly architecture',
      'Security implementation',
    ],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-rose-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/services"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
            <p className="text-xl text-gray-600">{service.description}</p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Key Features</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 animate-slide-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-2 w-2 bg-teal-500 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200">
              Get Started
            </button>
          </div>

          <div className="relative group animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <img
              src={service.image}
              alt={service.title}
              className="relative rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;