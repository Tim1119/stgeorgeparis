import React from 'react';
import InfoPage from '../../components/InfoPage';

export default function YoungAdultsTeens() {
  return (
    <InfoPage
      title="Young Adults & Teens"
      image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
      sections={[
        {
          heading: 'Teenagers \u2014 become a server',
          paragraphs: [
            "Too old for Sunday School? Want to contribute? A server \u2014 male or female \u2014 helps the priest and congregation offer the best worship we can to God. If you'd like to try it out, contact Edmund Linton, Head Server, on Sunday or by email. He'll show you what to do, pair you with someone more experienced, and work out a rota that suits you.",
          ],
        },
        {
          heading: 'The Young Adults Group',
          paragraphs: [
            "A group providing pastoral and spiritual support for young adults (18+, English- or French-speaking), meeting twice a month: a monthly \"Friday-after-work\" session of beer and food, and the Chaplaincy Lunch after the 10:30 Sunday Mass on the second Sunday of the month. Past trips have included Lisieux and Taiz\u00e9.",
            'For more information, contact Edmund (edmund.linton@gmail.com) or Alvaro (alvarojose.sh@gmail.com).',
          ],
          image: {
            src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
            alt: 'Young adults gathering',
          },
        },
        {
          heading: 'What people say',
          paragraphs: [
            '"When I first arrived at St George\u2019s as an English student in Paris, I found a community which was open and welcoming, including both Anglophones and Francophones of diverse ages and backgrounds. This caring atmosphere is one of the church\u2019s strengths, and I\u2019ve made many new friends." \u2014 Ryan',
            '"St George\u2019s is an active, hybrid mix of several cultures, a gathering of people from different backgrounds who demonstrate an open-mindedness that\u2019s sometimes hard to find these days." \u2014 Garance',
          ],
        },
      ]}
      cta={{ label: 'Get in touch about the Young Adults Group', href: 'mailto:edmund.linton@gmail.com' }}
    />
  );
}
