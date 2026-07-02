import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import TabSwitcher from '../components/TabSwitcher';

const tabs = [
  { id: 'malgaches', label: 'Malgaches' },
  { id: 'malagasy', label: 'Malagasy' },
  { id: 'annonces', label: 'Petites annonces' },
];

const MalgachesTab = () => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">l'Assemblée des malgaches</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p className="font-medium text-gray-900">
              Miarahaba anao tonga eto amin'ny pejin'ny mpiara-mivavaka malagasy eto amin'ny fiangonana anglikana Saint Georges, Paris.
            </p>
            <p>
              Efa an-taona maro no nisy fiaraha-mivavaky ny anglikana malagasy teto Paris. Mbola mitohy izany ankehitriny, ary faly izahay mandray anao, na monina eto Paris sy ny manodidina ianao na mandalo.
            </p>
            <p>
              Ny Komoniona Masina amin'ny teny malagasy dia indroa isam-bolana eto st Georges: ny alahady voalohany sy ny alahady fahatelo, samy amin'ny 4 ora sy sasany hariva. Misy Komoniona Masina koa rehefa fety lehibe (Krismasy, Paska), miaraka amin'ny fihirana Karoly.
            </p>
            <p>
              Ankoatra ireo dia misy fivavahana atao amin'ny Zoom (visio sy audio-conférence) isaky ny alahady faharoan'ny volana amin'ny 4 ora sy sasany. Ny atao amin'izany dia fivavahana hariva anglikana sy fiaraha-mizara ny Soratra Masina.
            </p>
            <div className="bg-primary-light/30 p-6 rounded-xl border border-primary-light">
              <p className="text-sm font-bold text-gray-900 mb-2">Contact Pastoral:</p>
              <p className="text-gray-700">Révérend Nicolas Razafindratsima</p>
              <p className="text-primary font-medium">rev.n.razafindratsima@gmail.com</p>
              <p className="text-gray-500 text-sm">Tél +33 (0)6 47 70 30 10</p>
            </div>
          </div>
        </div>
        <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=800&auto=format&fit=crop" 
            alt="Malagasy Congregation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-3xl font-bold text-gray-900 text-center">Embedded content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { id: '01', title: 'Video 01', desc: 'Short paragraph introducing the news or the article. It can take 3 to 4 lines to present the content here.' },
            { id: '02', title: 'Video 02', desc: 'Short paragraph introducing the news or the article. It can take 3 to 4 lines to present the content here.' },
          ].map((video) => (
            <div key={video.id} className="space-y-4">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center group cursor-pointer relative overflow-hidden">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <img 
                  src={`https://images.unsplash.com/photo-1515162305114-8d3a98c7121c?q=80&w=800&auto=format&fit=crop&sig=${video.id}`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  alt={video.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-gray-900">{video.title}</h4>
                <p className="text-gray-600 leading-relaxed">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: '01', title: 'Picture01' },
            { id: '02', title: 'Picture2' },
            { id: '03', title: 'Picture3' },
          ].map((pic) => (
            <div key={pic.id} className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&sig=${pic.id}`} 
                  alt={pic.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900">{pic.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MalagasyTab = () => {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Malagasy congregation</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Connections with the Anglican Church in Madagascar go back to the time of Fr Cardew. During the French Colonial period an address in Metropolitan France was demanded for any missionary church, but it was with the arrival of Fr Philippe Toutain as an Hon. Asst. Chaplain in 1987 that the Malagasy Congregation began.
            </p>
            <p>
              Currently led by Fr Nicolas Razafindratsima, with an ordinand in training, the congregation is going from strength to strength, with two Eucharists on Sunday afternoon (1st & 3rd - 16h30) and on Zoom Office (2nd - 16h00).
            </p>
            <p>
              If you want to know more or explore the Anglican church in Madagascar <span className="text-primary font-bold cursor-pointer hover:underline">click here</span>.
            </p>
            <div className="bg-primary-light/30 p-6 rounded-xl border border-primary-light">
              <p className="text-sm font-bold text-gray-900 mb-2">Pastoral Contact:</p>
              <p className="text-gray-700">Fr Nicolas Razafindratsima</p>
              <p className="text-primary font-medium">rev.n.razafindratsima@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1515162305114-8d3a98c7121c?q=80&w=800&auto=format&fit=crop" 
            alt="Malagasy Congregation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-3xl font-bold text-gray-900 text-center">Community Life</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Worship', desc: 'Join us for our bi-monthly Eucharist in Malagasy and our weekly Zoom prayer sessions.' },
            { title: 'Fellowship', desc: 'A vibrant community sharing faith, culture, and support in the heart of Paris.' },
            { title: 'Education', desc: 'Deepening our faith through study groups and spiritual guidance led by Fr Nicolas.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnnoncesTab = () => {
  const ads = [
    { category: 'Logement', title: 'Chambre à louer - Paris 16e', date: '05/03/2026', desc: 'Chambre meublée disponible dans un appartement partagé. Proche de l\'église. Étudiant(e) sérieux(se) recherché(e).' },
    { category: 'Services', title: 'Cours de français', date: '01/03/2026', desc: 'Bénévole propose des cours de soutien en français pour les nouveaux arrivants de la communauté.' },
    { category: 'Bénévolat', title: 'Aide pour le déjeuner du dimanche', date: '28/02/2026', desc: 'Nous recherchons des volontaires pour aider à la préparation et au service du déjeuner paroissial.' },
    { category: 'Divers', title: 'Don de vêtements', date: '25/02/2026', desc: 'Vêtements enfants (3-6 ans) en excellent état à donner. Contactez le secrétariat.' },
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">Petites annonces</h2>
        <p className="text-gray-600">Espace d'entraide et de partage pour la communauté de St George's.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {ads.map((ad, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 transition-colors flex flex-col md:flex-row gap-6">
            <div className="md:w-32 flex-shrink-0">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
                {ad.category}
              </span>
              <p className="text-xs text-gray-400 mt-2">{ad.date}</p>
            </div>
            <div className="flex-grow space-y-2">
              <h3 className="text-xl font-bold text-gray-900">{ad.title}</h3>
              <p className="text-gray-600 leading-relaxed">{ad.desc}</p>
              <button className="text-primary text-sm font-bold hover:underline">Contactez l'annonceur →</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300 text-center space-y-4">
        <h3 className="text-xl font-bold text-gray-900">Vous souhaitez publier une annonce ?</h3>
        <p className="text-gray-600">Envoyez votre texte et vos coordonnées au secrétariat paroissial.</p>
        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md">
          Envoyer une annonce
        </button>
      </div>
    </div>
  );
};

export default function MalagasyCommunity() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'malgaches');

  useEffect(() => {
    if (tabParam && tabs.find(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Malagasy Community" image="https://www.stgeorgesparis.com/s/cc_images/cache_65514091.jpg" />

      {/* Tab Switcher */}
      <div className="max-w-7xl mx-auto px-4 mb-20 mt-12">
        <TabSwitcher tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'malgaches' && <MalgachesTab />}
            {activeTab === 'malagasy' && <MalagasyTab />}
            {activeTab === 'annonces' && <AnnoncesTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
