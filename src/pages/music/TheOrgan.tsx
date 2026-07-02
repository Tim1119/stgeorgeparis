import React from 'react';
import InfoPage from '../../components/InfoPage';

export default function TheOrgan() {
  return (
    <InfoPage
      title="The Organ"
      image="https://www.stgeorgesparis.com/s/cc_images/cache_10122967.jpg?t=1391976196"
      intro="Saint George's Organ"
      sections={[
        {
          paragraphs: [
            'The organ was built by the Belgian organ builder Patrick Collon, and inaugurated by Jos van Immerseel on 23 April 1980.',
          ],
          image: {
            src: 'https://www.stgeorgesparis.com/s/cc_images/cache_10122967.jpg?t=1391976196',
            alt: "Saint George's pipe organ",
          },
        },
        {
          heading: 'Specification \u2014 Hauptwerk',
          paragraphs: [
            'Principal 8 \u00b7 Gedackt 8 \u00b7 Octave 4 \u00b7 Spitzfl\u00f6te 4 \u00b7 Quinte 2\u2154 \u00b7 Superoctave 2 \u00b7 Mixtur III \u00b7 Cymbel II \u00b7 Trompette 8',
          ],
        },
        {
          heading: 'Oberwerk',
          paragraphs: [
            'Gedackt 8 \u00b7 Principal 4 \u00b7 Rhorfl\u00f6te 4 \u00b7 Octave 2 \u00b7 Nasat 2\u2154 \u00b7 Terz 1\u2157 \u00b7 Quinte 1\u2153 \u00b7 Mixtur II \u00b7 Vox Humana 8',
          ],
        },
        {
          heading: 'Pedal',
          paragraphs: [
            'SubBass 16 \u00b7 PrincipalBass 8 \u00b7 OctavBass 4 \u00b7 MixturBass IV \u00b7 PosaunenBass 16 \u00b7 TrompetenBass 8',
          ],
        },
      ]}
    />
  );
}
