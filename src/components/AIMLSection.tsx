import React from 'react';
import { Brain, Cpu } from 'lucide-react';

const AIMLSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI & ML Development</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI – Future-Proof Solutions</h3>
            <p className="text-gray-600 mb-4">
              Automate virtually every aspect of business, enhance client relations, and modernize your digital presence. As a leader in AI, we help businesses unlock the potential of AI technologies.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700">
              Read More →
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">ML – New-Level Automation</h3>
            <p className="text-gray-600 mb-4">
              Transform business processes using machine learning. Our expert solutions enable systems to learn from experience, improve, and unlock massive potential for businesses.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLSection;