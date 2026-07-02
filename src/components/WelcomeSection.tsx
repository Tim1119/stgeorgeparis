import React from 'react';
import logo from '../assets/logo.png';
import markOsborne from '../assets/mark-osborne.jpg';

export default function WelcomeSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Welcome to St George's Anglican Church, Paris
          </h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Our community consists of many Christians from many different countries and walks of life, who
              seek to respond to God's love for us and for his world in our daily lives and by developing a
              welcoming and caring community of faith together.
            </p>
            <p>
              We're living in challenging times but St George's continues with open doors and hearts to welcome
              you to worship with us and build the Kingdom of God.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-center">
          <img
            src={logo}
            alt="Saint George slaying the dragon"
            className="w-40 md:w-52 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
