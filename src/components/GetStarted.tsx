import React from 'react';
import { ArrowRight } from 'lucide-react';

const GetStarted = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            "Are you looking for trusted experts for your business needs?"
          </p>
          <button className="inline-flex items-center px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors duration-200">
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;