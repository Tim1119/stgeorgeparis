import React from 'react';
import PageHeader from '../components/PageHeader';

export default function Friends() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Friends of St G's" image="https://www.stgeorgesparis.com/s/cc_images/cache_65514088.JPG" />

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-6 text-lg text-gray-600 leading-relaxed">
        <p>
          The London Friends of St. George's Paris was set up in 1972 by Rodney Bennett-England when Canon
          Greenacre was Chaplain of St. George's, and since then has organized an annual service in London,
          usually followed by drinks and a dinner. This enables former parishioners now living in England to keep
          in touch with St. George's, and with old friends from Paris.
        </p>
        <p>
          We meet to renew old friendships and make new ones each year in June by celebrating together the
          Eucharist, hearing from the Chaplain and of course, in traditional St George's fashion, eating together.
        </p>
        <p>
          We have used churches where a member of staff has St George's connections: the Grosvenor Chapel where Fr
          Richard Fermer was Chaplain, St James's, Sussex Gardens where Fr Martin Draper is assistant priest, and
          All Saints, Margaret Street where the Vicar, Fr Peter Anthony, was once Pastoral Assistant at St
          George's.
        </p>
        <div className="bg-primary-light/30 border border-primary-light rounded-xl p-6 not-italic">
          <p className="font-bold text-gray-900 mb-1">Stay in touch</p>
          <p className="text-gray-700">
            For more details or to be put onto the mailing list, contact{' '}
            <a href="mailto:emma.biaggi@churchofengland.org" className="text-primary font-medium hover:underline">
              emma.biaggi@churchofengland.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
