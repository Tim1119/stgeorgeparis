import React from 'react';
import InfoPage from '../../components/InfoPage';

export default function ArchivedMusicLists() {
  return (
    <InfoPage
      title="Archived Music Lists 2013\u20132024"
      image="https://www.stgeorgesparis.com/s/cc_images/cache_65514082.JPG"
      intro="A record of the settings, anthems and hymns sung at Saint George's over the years."
      sections={[
        {
          paragraphs: [
            'Archived weekly music lists from 2013 through 2024 are kept on file at the church office. Digitised archives will be listed here as they are prepared \u2014 in the meantime, please contact the Director of Music for a specific date or setting you are looking for.',
          ],
        },
      ]}
      cta={{ label: 'Ask about a specific music list', href: 'mailto:choir@stgeorgesparis.com' }}
    />
  );
}
