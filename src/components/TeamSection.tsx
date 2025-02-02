import React from 'react';

const TeamSection = () => {
  const teams = {
    core: [
      {
        name: 'Avishek Singh',
        role: 'Co-founder, CEO',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Sanjit Ghanti',
        role: 'Co-founder, COO',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      }
    ],
    strategy: [
      {
        name: 'Krishna Kishore',
        role: 'IT-Strategy',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Mithilesh Kumar',
        role: 'Head IT Dev',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Shashi Kant',
        role: 'Head IT Infra',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      }
    ],
    operations: [
      {
        name: 'Deepak Kumar',
        role: 'Head Cust Relations',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Shashi Singh',
        role: 'Pre-Sales, KYB',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'David Rambran',
        role: 'Sales',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      }
    ]
  };

  const TeamSection = ({ title, members }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-purple-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The Passionate Minds Behind Our Success</p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        <TeamSection title="Core Team" members={teams.core} />
        <TeamSection title="Advisors & Strategy" members={teams.strategy} />
        <TeamSection title="Global Operations" members={teams.operations} />
      </div>
    </section>
  );
};

export default TeamSection;