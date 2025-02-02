import React from 'react';
import { Settings, Code, TrendingUp, FileCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Settings,
      title: 'Customized Options',
      description: 'Exclusive designs tailored to your preferences.',
    },
    {
      icon: Code,
      title: 'Powerful Code',
      description: 'Robust yet lightweight code that reduces system load.',
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Marketing Strategies',
      description: 'Optimal and scalable strategies for your needs.',
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'Thorough validation and verification of your products.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Delivering Multidimensional Services with Unmatched Core Principles</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;