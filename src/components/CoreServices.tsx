import React from 'react';
import { 
  Code2, Database, CreditCard, Brain, 
  Palette, Globe, Smartphone ,CalendarCheck , MessageCircle
} from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Tailored software solutions for unique business needs.',
    },
    {
      icon: Database,
      title: 'CRM Software',
      description: 'Boost sales team efficiency and overall revenue.',
    },
    {
      icon: CreditCard,
      title: 'POS Billing Software',
      description: 'Automate transactions and monitor critical data.',
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Cutting-edge solutions for reliability, speed, and security.',
    },
    {
      icon: Palette,
      title: 'UI/UX Development',
      description: 'Interactive and appealing designs to elevate projects.',
    },
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'High-quality applications for seamless operations.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Engaging mobile applications for growing audiences.',
    },
    {
      icon: CalendarCheck,
      title: 'Attendance System',
      description: 'Efficient tracking and management of attendance for businesses and schools.',
    },
    {
      icon: MessageCircle,
      title: 'Chatbot Solution',
      description: 'Interactive AI-powered chatbot to enhance customer engagement and support.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
          <p className="text-xl text-gray-600">"Our Services Empower Enterprises in the Digital Sphere"</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;