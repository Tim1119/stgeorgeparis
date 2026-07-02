import React from 'react';
import PageHeader from '../../components/PageHeader';
import Carousel from '../../components/Carousel';
import { choirPhotos } from '../../data/choirPhotos';

export default function ChoirEventsToursPhotos() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Choir Events, Tours & Photos" image="https://www.stgeorgesparis.com/s/cc_images/cache_65514086.JPG" />
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
        <p className="text-xl text-gray-600 leading-relaxed">
          The choir regularly travels abroad to sing services and give concerts \u2014 recent trips have included
          Rome, Venice, Madrid, Dublin, Milan, St Jean de Luz, Agen, Switzerland, Belgium, Germany and Argentina.
          In 2016 the choir celebrated the 950th anniversary of l'Abbaye aux Dames in Caen, singing evensong in
          the presence of the Bishop of Exeter. In 2023 the choir travelled to Sicily, and in 2024 sang at Saint
          M\u00e9dard en Jalles near Bordeaux.
        </p>
        <Carousel slides={choirPhotos} intervalMs={3500} aspect="aspect-video" />
        <p className="text-gray-500 text-sm text-center">
          More photos from choir tours and events over the years \u2014 get in touch if you'd like to contribute
          your own.
        </p>
      </div>
    </div>
  );
}
