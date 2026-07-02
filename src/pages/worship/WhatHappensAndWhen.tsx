import React from 'react';
import InfoPage from '../../components/InfoPage';

export default function WhatHappensAndWhen() {
  return (
    <InfoPage
      title="What Happens and When"
      image="https://www.stgeorgesparis.com/s/cc_images/cache_65276581.jpg?t=1709828506"
      sections={[
        {
          heading: 'The Eucharist, or Holy Communion, or the Mass',
          paragraphs: [
            "Eucharist means Thanksgiving. If you receive Holy Communion in your own church, you're welcome to receive it at St George's. If you'd rather not \u2014 for reasons of conscience or your own Church's discipline \u2014 please come forward for a blessing instead.",
            "Every week we celebrate the Eucharist in French on Saturday evening at 18:00, then in English on Sunday morning at 08:30 and 10:30. The 08:30 Holy Communion has no music or sermon, uses the 1662 Book of Common Prayer, and lasts about 25 minutes. The 10:30 Eucharist lasts around 75 minutes, with singing, incense, a sermon, and provision for children and young people \u2014 it's the centre of our week.",
          ],
        },
        {
          heading: 'After the service',
          paragraphs: [
            "After the main Sunday service we gather over coffee and wine in the church hall, and at around 12:45 everyone is welcome to stay for an inexpensive lunch together.",
          ],
        },
        {
          heading: 'Komoniona Masina (Malagasy Mass)',
          paragraphs: [
            '16:30 on the 1st and 3rd Sunday of the month \u2014 a formal celebration in Malagasy and French. 16:00 on the 2nd Sunday is an online Office Malgache.',
          ],
        },
        {
          heading: 'During the week',
          paragraphs: [
            'The chaplains say Morning and Evening Prayer daily, and everyone is welcome to join Evensong in the Chapel Monday to Friday at 18:00. The Eucharist is celebrated every day, a quiet, meditative service lasting around 25 minutes. Services are not held on public holidays unless it is a feast day.',
          ],
        },
      ]}
    />
  );
}
