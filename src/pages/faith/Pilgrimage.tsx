import React from 'react';
import PillContentPage from '../../components/PillContentPage';

export default function Pilgrimage() {
  return (
    <PillContentPage
      title="Pilgrimage & Making Your Retreat"
      image="https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1600&auto=format&fit=crop"
      pills={[
        {
          id: 'what-is',
          label: 'What is Pilgrimage',
          paragraphs: [
            'Pilgrimage is a journey undertaken in faith \u2014 a deliberate stepping away from ordinary life to seek God somewhere set apart: a shrine, a monastery, a place made holy by the prayers of those who went before us.',
            'It is less about the distance travelled than the intention behind it: pilgrims have long found that unfamiliar surroundings, shared journeying with others, and time away from routine create space for prayer that\u2019s hard to find at home.',
            "St George's community has visited places including Lisieux, Taiz\u00e9, and Lourdes as part of parish pilgrimages \u2014 open to anyone in the congregation, whatever their experience of this kind of travel.",
          ],
        },
        {
          id: 'next',
          label: 'The Next Pilgrimage',
          paragraphs: [
            'Details of the next parish pilgrimage will be announced here and in the weekly notices as plans are confirmed.',
            'If you\u2019re interested in joining, or have a destination in mind you\u2019d like the parish to consider, please get in touch with the Chaplain.',
          ],
        },
        {
          id: 'pictures',
          label: 'Pictures from Pilgrimage/Retreats',
          paragraphs: [
            'Photos from past parish pilgrimages and retreats will be gathered here as they\u2019re shared \u2014 in the meantime, browse the choir\u2019s own tour photos on the Choir Events, Tours & Photos page for a flavour of past trips together.',
          ],
        },
      ]}
    />
  );
}
