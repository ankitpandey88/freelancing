import React from 'react';
import { ArrowRight } from 'lucide-react';

const Highlight = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pushing The Business Boundaries By Innovative Solutions
          </h2>
          <p className="text-lg mb-8 text-indigo-100">
            Here at Martvalley Services, we specialize in challenging the limits through custom software development services tailored to suit your business. Addressing the diverse needs of our clients is our primary forte.
          </p>
          <button className="inline-flex items-center px-6 py-3 border-2 border-white rounded-md text-base font-medium hover:bg-white hover:text-indigo-600 transition-colors duration-200">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlight;