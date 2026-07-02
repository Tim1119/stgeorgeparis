import React from 'react';
import { Link } from 'react-router-dom';

export default function SafeguardingSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-16 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Safeguarding notice</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We take the safety and care of children, young people and vulnerable adults within our community 
              incredibly seriously. Here is our <a href="#" className="text-primary font-bold hover:underline">Safeguarding Policy</a>.
            </p>
            <p>
              If you have any questions or concerns at any time please contact our Safeguarding Officer, Mary Jane Wilkie.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold transition-colors"
          >
            Contact officer
          </Link>
        </div>
        <div className="h-[400px] lg:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop" 
            alt="Safeguarding hands" 
            className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
