import React from 'react';

export default function LivestreamSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          We continue to improve our livestreamed worship.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Wherever you are around the globe you can share in our services as we livestream or via our channel
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg hover:scale-105">
          Subscribe to the channel
        </button>
      </div>
    </section>
  );
}
