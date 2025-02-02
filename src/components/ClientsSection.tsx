// import React from 'react';
// import { Star } from 'lucide-react';

// const ClientsSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Priceless Clients</h2>
//           <p className="text-xl text-gray-600">"Our Clients Speak Volumes About Our Success."</p>
//           <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((index) => (
//             <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4">
//                 <img
//                   src={`https://images.unsplash.com/photo-${index === 1 ? '1472099645785-5658abf4ff4e' : index === 2 ? '1438761681033-6461ffad8d80' : '1500648767791-00dcc994a43e'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80`}
//                   alt={`Client ${index}`}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div className="ml-4">
//                   <h4 className="font-semibold text-gray-900">Client Name {index}</h4>
//                   <div className="flex text-yellow-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600">
//                 "Working with MartValley has been an exceptional experience. Their team's expertise and dedication to delivering quality solutions have exceeded our expectations."
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsSection;


import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "MartValley's team went above and beyond to deliver exceptional results. Highly recommended!",
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "Their dedication and expertise are unmatched. Fantastic experience working with them!",
  },
  {
    id: 3,
    name: "Catherine Lee",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "MartValley's innovative approach helped us achieve our goals effortlessly.",
  },
  {
    id: 4,
    name: "Daniel Craig",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "A seamless and professional experience from start to finish. Truly impressive!",
  },
  {
    id: 5,
    name: "Emily Watson",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "Exceptional service and attention to detail. Couldn’t be happier!",
  },
  {
    id: 6,
    name: "Franklin Moore",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "Their solutions are top-notch, and their team is incredibly supportive.",
  },
  {
    id: 7,
    name: "Grace Hill",
    image: "https://images.unsplash.com/photo-1556792189-462cd0746e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "MartValley has transformed the way we work with their innovative solutions.",
  },
  {
    id: 8,
    name: "Henry White",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    opinion: "A fantastic experience from start to finish. Their expertise is evident in everything they do!",
  },
];

const ClientsSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollAmount = scrollRef.current.offsetWidth;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Priceless Clients</h2>
          <p className="text-xl text-gray-600">"Our Clients Speak Volumes About Our Success."</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-1/3 bg-gray-50 p-6 rounded-xl shadow-lg flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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
