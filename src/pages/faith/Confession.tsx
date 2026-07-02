import React from 'react';
import InfoPage from '../../components/InfoPage';

export default function Confession() {
  return (
    <InfoPage
      title="Celebrating God\u2019s Reconciling Faith"
      image="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1600&auto=format&fit=crop"
      intro="On the Sacrament of Reconciliation (Confession)"
      sections={[
        {
          paragraphs: [
            'Reconciliation \u2014 sometimes called Confession \u2014 is one of the Church\u2019s sacraments: an opportunity to name what weighs on us honestly before God, in the presence of a priest, and to receive absolution and a fresh start.',
            'It\u2019s entirely optional within Anglican practice \u2014 "all may, some should, none must" \u2014 but many find it a genuinely freeing discipline, especially at times of change or difficulty, or in preparation for a significant moment such as a baptism, confirmation, or wedding.',
          ],
        },
        {
          heading: 'Resources',
          paragraphs: [
            "If you'd like to talk through what this looks like in practice, or arrange a time with one of our clergy, please contact the Chaplain directly \u2014 this is always treated with complete confidentiality.",
          ],
        },
      ]}
      cta={{ label: 'Speak to a priest in confidence', href: 'mailto:chaplain@stgeorgesparis.org' }}
    />
  );
}
