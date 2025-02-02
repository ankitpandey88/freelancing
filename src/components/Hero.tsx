import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block mb-2">The Defining Future</span>
            <span className="text-indigo-600">Innovating Next-Gen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Custom Software Development Services For Businesses.
            Pushing Your Ideas Towards Reality.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
            className="rounded-lg shadow-xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;