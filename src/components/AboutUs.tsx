import React from 'react';
import { 
  Rocket, Map, Lightbulb, Award, 
  Search, Zap 
} from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Skyrocketing Growth',
      description: 'Thriving towards world-class development standards.',
    },
    {
      icon: Map,
      title: 'Project Mapping',
      description: 'Validating ideas through real-time mapping.',
    },
    {
      icon: Lightbulb,
      title: 'Realistic Thinking',
      description: 'Modernizing businesses for exponential growth.',
    },
    {
      icon: Award,
      title: 'Digital Excellence',
      description: 'Enabling operational excellence.',
    },
    {
      icon: Search,
      title: 'Competitor Research',
      description: 'Strategies to keep our clients ahead.',
    },
    {
      icon: Zap,
      title: 'Innovative Ideas',
      description: 'Revamping businesses without changing core values.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Building Custom Solutions Across Industries</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;