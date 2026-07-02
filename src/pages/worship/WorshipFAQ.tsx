import React from 'react';
import PageHeader from '../../components/PageHeader';

const faqs = [
  {
    q: "What sort of church is St George's?",
    a: "St George's, Paris is part of the Church of England, in the family of Anglican churches. All its services are authorised for use by the Church of England. Our worship is liturgical, built around the public prayer of the Church \u2014 Morning and Evening Prayer, in the Book of Common Prayer or the modern Daily Prayer, are foundational for a living relationship with Christ. The Eucharist is celebrated daily, and on Sundays at 10:30 with hymns, incense, ceremonial and a sermon. Our choir and music form an important part of Sunday worship, and there are times of quiet prayer during the week too.",
  },
  {
    q: 'Are the services in English or in French?',
    a: "Services are mainly in English. The 08:30 Sunday service is from the 1662 Book of Common Prayer, in the English of Shakespeare's time. The 10:30 Eucharist uses contemporary English, usually with one reading in French; the sermon is occasionally in French, as is the occasional baptism. There's a weekly Eucharist in French at 18:00 on Saturdays, and the Malagasy community celebrates in Malagasy and French at 16:30 on the 1st and 3rd Sundays of the month.",
  },
  {
    q: 'Can I receive Holy Communion?',
    a: "If you are baptised and receive Holy Communion in your own church, you are welcome to receive it at St George's. If you're prevented by conscience or the discipline of your church, you're very welcome to come forward for a blessing instead. If you're coeliac and need a gluten-free wafer, please speak to a priest before the service begins.",
  },
];

export default function WorshipFAQ() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Worship: Frequently Asked Questions" image="https://www.stgeorgesparis.com/s/cc_images/cache_65276581.jpg?t=1709828506" />
      <div className="max-w-3xl mx-auto px-4 py-20 space-y-10">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-gray-100 pb-8 last:border-0">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{item.q}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
