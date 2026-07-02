import React from 'react';

const DEFAULT_IMAGE = 'https://www.stgeorgesparis.com/s/img/emotionheader.jpg?1613918704.960px.323px';

interface PageHeaderProps {
  title: string;
  image?: string;
}

export default function PageHeader({ title, image = DEFAULT_IMAGE }: PageHeaderProps) {
  return (
    <div
      className="relative py-28 px-4 text-center bg-gray-800 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(17,17,17,0.55), rgba(17,17,17,0.55)), url('${image}')`,
      }}
    >
      <h1 className="relative text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
        {title}
      </h1>
    </div>
  );
}
