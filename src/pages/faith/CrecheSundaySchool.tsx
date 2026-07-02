import React from 'react';
import InfoPage from '../../components/InfoPage';

export default function CrecheSundaySchool() {
  return (
    <InfoPage
      title="Cr\u00e8che & Sunday School"
      image="https://www.stgeorgesparis.com/s/cc_images/cache_63183845.jpg?t=1661897141"
      sections={[
        {
          heading: 'Cr\u00e8che',
          paragraphs: [
            'For children below Sunday School age, a cr\u00e8che is available in the Library, just off the side chapel, on Sunday mornings \u2014 with toys, books and colouring sheets on the theme of the week\u2019s readings. You must accompany your child(ren). If you\u2019re interested in using the cr\u00e8che, please contact office@stgeorgesparis.org.',
          ],
          image: {
            src: 'https://www.stgeorgesparis.com/s/cc_images/cache_63183845.jpg?t=1661897141',
            alt: "Children's activities at St George's",
          },
        },
        {
          heading: 'Sunday School',
          paragraphs: [
            "For all school-age children (primaire, coll\u00e8ge, lyc\u00e9e), helping them hear and understand that week's Bible readings in an age-appropriate way. After the Opening Prayer, children leave church behind the icon of the Archangel Michael for the Club Room to learn Bible stories from the Old and New Testaments, rejoining families after Holy Communion.",
            'Sunday School needs more leaders \u2014 we work in a relaxed setting so young people enjoy their Sundays. St George\u2019s takes Safeguarding seriously, so volunteers complete the Safeguarding process first. Speak to Mary Jane Wilkie on Sunday, or email her, and she\u2019ll guide you through it.',
          ],
        },
        {
          heading: 'Godly Play',
          paragraphs: [
            'Godly Play was developed by Jerome Berryman over 40 years of work with children in the USA. Using Montessori methods of presenting Scripture stories, it "shows" Bible stories and encourages playing with the language of God \u2014 helping listeners enter more fully into God\u2019s presence. It\u2019s used by leaders in business, government and the third sector as a way to access the power of human imagination, and is a powerful tool for learning.',
          ],
        },
      ]}
      cta={{ label: 'Ask about Sunday School or volunteering', href: 'mailto:office@stgeorgesparis.org' }}
    />
  );
}
