import React from 'react';
import { 
  Cloud, Bitcoin, Glasses, Palette, 
  Brain, Wifi, Database, Headphones 
} from 'lucide-react';

const Technologies = () => {
  const technologies = [
    { icon: Cloud, name: 'Cloud Computing' },
    { icon: Bitcoin, name: 'Blockchain Development' },
    { icon: Glasses, name: 'Augmented Reality Solutions' },
    { icon: Palette, name: 'UX/UI Design' },
    { icon: Brain, name: 'Artificial Intelligence' },
    { icon: Wifi, name: 'Internet of Things (IoT)' },
    { icon: Database, name: 'Machine Learning' },
    { icon: Headphones, name: 'Virtual Reality Solutions' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies</h2>
          <p className="text-xl text-gray-600">"Serving Cutting-Edge Technologies to Fulfill the Dreams of Businesses"</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;