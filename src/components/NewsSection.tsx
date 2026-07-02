import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'News #01 Title',
    excerpt: 'Short paragraph introducing the news or the article. It can take 3 to 4 lines to present the content here.',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'News #02 Title',
    excerpt: 'Short paragraph introducing the news or the article. It can take 3 to 4 lines to present the content here.',
    image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'News #03 Title',
    excerpt: 'Short paragraph introducing the news or the article. It can take 3 to 4 lines to present the content here.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop'
  }
];

export default function NewsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest news</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                <button className="text-primary font-semibold hover:underline">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
