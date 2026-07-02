import React from 'react';
import PageHeader from './PageHeader';

interface Section {
  heading?: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
}

interface InfoPageProps {
  title: string;
  image?: string;
  intro?: string;
  sections: Section[];
  cta?: { label: string; href: string };
}

export default function InfoPage({ title, image, intro, sections, cta }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader title={title} image={image} />
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-14">
        {intro && <p className="text-xl text-gray-600 leading-relaxed">{intro}</p>}
        {sections.map((section, i) => (
          <div
            key={i}
            className={section.image ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 items-start' : 'space-y-4'}
          >
            <div className="space-y-4">
              {section.heading && <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>
            {section.image && (
              <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        ))}
        {cta && (
          <div className="pt-4">
            <a
              href={cta.href}
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
