

import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const clients = [
  { id: 1, name: "Ravi Sharma", image: "https://randomuser.me/api/portraits/men/1.jpg", opinion: "Excellent software solutions for my startup. Highly recommended!" },
  { id: 2, name: "Priya Patel", image: "https://randomuser.me/api/portraits/women/2.jpg", opinion: "Seamless e-commerce platform development. Great team!" },
  { id: 3, name: "Amit Verma", image: "https://randomuser.me/api/portraits/men/3.jpg", opinion: "Top-notch CRM system that streamlined our business processes." },
  { id: 4, name: "Sneha Rao", image: "https://randomuser.me/api/portraits/women/4.jpg", opinion: "Beautiful UI/UX design for our mobile app. Highly skilled team!" },
  { id: 5, name: "Vikram Iyer", image: "https://randomuser.me/api/portraits/men/5.jpg", opinion: "Their AI chatbot significantly improved our customer engagement." },
  { id: 6, name: "Neha Gupta", image: "https://randomuser.me/api/portraits/women/6.jpg", opinion: "Fast and reliable web development services with zero downtime." },
  { id: 7, name: "Arjun Mehta", image: "https://randomuser.me/api/portraits/men/7.jpg", opinion: "Exceptional fintech solutions! Their expertise is evident." },
  { id: 8, name: "Divya Kapoor", image: "https://randomuser.me/api/portraits/women/8.jpg", opinion: "Modernized our system into a highly efficient platform." },
  { id: 9, name: "Karthik Reddy", image: "https://randomuser.me/api/portraits/men/9.jpg", opinion: "Logistics automation reduced our costs by 30%. Excellent work!" },
  { id: 10, name: "Ananya Bose", image: "https://randomuser.me/api/portraits/women/10.jpg", opinion: "Professional, dedicated, and highly skilled team!" },
];

const ClientsSection = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isDragging) {
        const scrollAmount = scrollRef.current.offsetWidth / 2;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging]);

  // Touch and Drag Scroll Events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Priceless Clients</h2>
          <p className="text-xl text-gray-600">"Our Clients Speak Volumes About Our Success."</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        {/* Scrollable container with drag functionality */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-4 w-full cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ scrollBehavior: 'smooth' }}
        >
          {clients.map((client) => (
            <div key={client.id} className="w-1/3 min-w-[320px] bg-gray-50 p-6 rounded-xl shadow-lg flex-shrink-0">
              <div className="flex items-center mb-4">
                <img src={client.image} alt={client.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{client.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{client.opinion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
