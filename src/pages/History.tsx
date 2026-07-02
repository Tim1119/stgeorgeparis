import React from 'react';
import PageHeader from '../components/PageHeader';

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="History of St G's" image="https://commons.wikimedia.org/wiki/Special:FilePath/Eglise_anglicane_Saint-Georges_Paris.jpg?width=1600" />

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Anglican worship has been celebrated in France from the sixteenth century onwards, initially only in
              the private chapel of the English Ambassador. During the English Civil War, Paris and
              St-Germain-en-Laye became notable centres of Anglican worship, centred around the exiled courts of
              Queen Henrietta Maria and the future Charles II, and priests were ordained. Following the Glorious
              Revolution of 1688, the court of James II at St-Germain-en-Laye and Bar-le-Duc in Lorraine became
              centres for Anglican worship.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1520440229-6469a96ac586?q=80&w=1000&auto=format&fit=crop"
              alt="Historic Parisian architecture"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1000&auto=format&fit=crop"
              alt="Gothic church interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed lg:order-2">
            <p>
              Following the Battle of Waterloo in 1815, Britons flocked to France. In 1824, the Reverend Lewis Way,
              Chaplain to the British Ambassador, established a chapel in the Quartier Marbœuf. The building had
              been designed as a picture gallery but was adapted for worship. In 1842 it was demolished and, in
              1844, replaced by another church at 10 rue Marbœuf. In 1883, this church was demolished as the whole
              site had been sold to the Ville de Paris to enlarge the Champs Élysées.
            </p>
            <p>
              A new site was purchased in the Rue Auguste Vacquerie (formerly the Rue des Bassins) and a temporary
              iron chapel erected. This was replaced by a large gothic building, begun in 1887 and consecrated in
              1889. The site was redeveloped during the 1970s and the present building was consecrated on 11
              February 1979.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Ministry to the English community in Paris has been punctuated by the upheavals of the nineteenth
              century as well as the wars of the twentieth. One of the most famous chaplains, in Paris and London,
              was Fr Frederick Anstruther Cardew who in 1913 determined that his work should be about protecting
              the large number of English girls who came to work in the dance halls of Paris.
            </p>
            <p>
              Historical background indebted to Roger Greenacre,{' '}
              <em>The Catholic Church in France: An Introduction</em>, London: Council for Christian Unity, 1996.
            </p>
            <p>
              The history of St. George's is the subject of a short guide, "An Anglican Adventure", written by our
              Chaplain, Father Matthew Harrison.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1548407260-da850faa41e3?q=80&w=1000&auto=format&fit=crop"
              alt="Old Paris street"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
