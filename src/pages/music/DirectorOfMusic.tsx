import React from 'react';
import InfoPage from '../../components/InfoPage';

export default function DirectorOfMusic() {
  return (
    <InfoPage
      title="Director of Music"
      image="https://www.stgeorgesparis.com/s/cc_images/cache_4880760.jpg?t=1384623320"
      intro="Our director of music: Dr Peter Hicks"
      sections={[
        {
          paragraphs: [
            'Peter Hicks was born in the North East of England, not far from Newcastle upon Tyne, and started singing in the local church choir and having piano lessons at the age of seven. His musical interests later expanded to include the oboe, and he won prizes for his oboe and piano playing at music festivals in Hexham and Morpeth in 1982. During this period he taught himself the organ and became organist and choirmaster of the parish church in Riding Mill, Northumberland.',
            "Over his university career (BA Hons Classics, University College London; PhD, History of the text of Theocritus, St John's College, Cambridge, 1982–1992), he was musical director of an Edinburgh Fringe show, sang in the choir of the university church of Christ the King, London, and played oboe with the Queen Mary's College orchestra. He later sang in St John's College Chapel Choir, Cambridge, under George Guest, and with The Gentlemen of St John's and The Bach Society. A scholarship took him to Collegio Ghislieri, Pavia, Italy, where he directed the choir of the Anglican chaplaincy in Milan and won equal first prize in the Marenzio Competition, Coccaglio, Italy, 1990.",
          ],
          image: {
            src: 'https://www.stgeorgesparis.com/s/cc_images/cache_4880760.jpg?t=1384623320',
            alt: 'Dr Peter Hicks, Director of Music',
          },
        },
        {
          heading: 'At St George\u2019s and beyond',
          paragraphs: [
            "Coming to France in 1991, he became director of music at Saint George's, Paris, and pursued a career as director, soloist and ensemble singer with groups including the Ma\u00eetrise de Caen, the Chanteurs Hicks at Euro-Disney, and the Rennes-based group Arsis, as well as performing as a soloist in the medieval \"opera\" The Play of Daniel in Paris, Athens and Tokyo. Since 2002 he has also directed the choral society, Musicanti.",
          ],
        },
        {
          heading: 'Orchestral works conducted',
          paragraphs: [
            "Paisiello's Coronation Mass for Napoleon I, Cherubini's Coronation Mass for Louis XVIII, Rachmaninov's Vespers, Schubert's Miriam's Siegesgesang, Brahms's Zigeunerlieder and Requiem, Britten's Cantata St Nicholas, Mozart's Credo Mass and Solemn Vespers of a Confessor, Berlioz's La Marseillaise, Lesueur's cantata for the marriage of Napoleon I and Marie-Louise, M\u00e9hul's Le Chant du d\u00e9part, and Handel's Israel in Egypt and excerpts from Messiah, among others.",
          ],
        },
      ]}
      cta={{ label: 'Interested in joining the choir? Get in touch', href: 'mailto:choir@stgeorgesparis.com' }}
    />
  );
}
