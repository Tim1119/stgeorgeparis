import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import TabSwitcher from '../components/TabSwitcher';
import PageHeader from '../components/PageHeader';
import NewsSection from '../components/NewsSection';
import Carousel from '../components/Carousel';
import { choirPhotos } from '../data/choirPhotos';

const topTabs = [
  { id: 'worship', label: 'Worship' },
  { id: 'music', label: 'Music' },
];

const worshipSubTabs = [
  { id: 'baptism', label: 'Baptism' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'funeral', label: 'Funeral' },
];

const BaptismPanel = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
      <h2 className="text-2xl font-bold text-gray-900">Baptism at St George's</h2>
      <p>
        Baptism marks the beginning of a Christian life of faith. If you, your child, or someone you know would
        like to be baptised at St George's, we would love to hear from you.
      </p>
      <p>
        We meet beforehand to talk through what baptism means, plan the service together, and answer any
        questions you may have — there's no need to have all the answers in advance.
      </p>
      <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors">
        Get in touch
      </button>
    </div>
    <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1602526432604-029d081c0f79?q=80&w=900&auto=format&fit=crop"
        alt="Baptism font"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const WeddingsPanel = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden lg:order-2">
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop"
        alt="Wedding ceremony"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="space-y-6 text-lg text-gray-600 leading-relaxed lg:order-1">
      <h2 className="text-2xl font-bold text-gray-900">Weddings at St George's</h2>
      <p>
        We are delighted to help couples plan a wedding blessed by God in the heart of Paris, whether you're
        resident here or travelling from further afield.
      </p>
      <p>
        Our clergy will meet with you to prepare the service, choose readings and music, and make sure the day
        reflects your story as a couple.
      </p>
      <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors">
        Get in touch
      </button>
    </div>
  </div>
);

const FuneralPanel = () => (
  <div className="space-y-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">Funerals at St George's Paris</h2>
        <p>
          Everyone is welcome to have a funeral service provided by St George's. Our clergy here, or at any of the
          Anglican Chaplaincies in the Ile de France, can take funerals in church or at the crematorium for
          anyone — you don't have to have been a regular church attender.
        </p>
        <p>
          We spend time with you to create a service that combines modern and traditional elements, with time to
          remember, reflect, pray and look forward with hope.
        </p>
      </div>
      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?q=80&w=900&auto=format&fit=crop"
          alt="Quiet reflection"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=900&auto=format&fit=crop"
          alt="Candle light"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
        <p>
          Here in Europe you're asked for a donation rather than charged a fee. Having a service in church can
          give your family more space and time for the service too. It is also possible to have a memorial
          service to remember and celebrate the life of a loved one weeks or months after their funeral.
        </p>
        <p>
          If you want to plan your funeral, choose favourite hymns or bible readings, and take the pressure off
          your family and friends, we are also available to help you think through your choices.
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors">
          Get in touch
        </button>
      </div>
    </div>
  </div>
);

const worshipSubPanels: Record<string, React.FC> = {
  baptism: BaptismPanel,
  weddings: WeddingsPanel,
  funeral: FuneralPanel,
};

const WorshipTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subParam = searchParams.get('sub');
  const [activeSub, setActiveSub] = useState(subParam && worshipSubPanels[subParam] ? subParam : 'baptism');

  useEffect(() => {
    if (subParam && worshipSubPanels[subParam]) {
      setActiveSub(subParam);
    }
  }, [subParam]);

  const handleSubChange = (id: string) => {
    setActiveSub(id);
    setSearchParams({ tab: 'worship', sub: id });
  };

  const SubPanel = worshipSubPanels[activeSub];

  return (
    <div className="space-y-12">
      <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-600 leading-relaxed max-w-4xl mx-auto">
        If you'd like to arrange a baptism, a marriage or a funeral; if you or someone you know would like to
        receive Holy Communion and Prayer for Healing at home because of illness; if you want your home blessing;
        or if you want to be reconciled to God and learn more about the Christian faith; or if you want to
        arrange a memorial service — or any other pastoral service or need — please contact either the
        Administrator or the Chaplain.
      </div>

      <div className="flex justify-center">
        <div className="inline-flex bg-white border border-gray-100 shadow-sm p-1 rounded-lg flex-wrap justify-center">
          {worshipSubTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleSubChange(tab.id)}
              className={`py-2 px-6 text-sm font-bold rounded-md transition-all whitespace-nowrap ${
                activeSub === tab.id ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSub}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <SubPanel />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const MusicTab = () => (
  <div className="space-y-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">Choir and Music</h2>
        <p>
          Saint George's possesses an excellent musical tradition. The choir sings at the main Sung Eucharist on
          Sunday mornings at 10:30am, usually singing a setting of the mass and an anthem during communion, as
          well as the plainsong proper of the day. It also sings the service of Evensong with Benediction from
          time to time.
        </p>
        <p>
          The choir regularly travels abroad to sing services and give concerts — recent trips have included
          Rome, Venice, Madrid, Dublin, Caen and Argentina. The choir rehearses on Wednesday evenings and on
          Sunday mornings from 9:15am.
        </p>
        <div className="bg-primary-light/30 p-6 rounded-xl border border-primary-light">
          <p className="font-bold text-gray-900">Director of Music</p>
          <p className="text-gray-700">Peter Hicks</p>
          <p className="text-primary text-sm font-medium">office@stgeorgesparis.org</p>
          <p className="text-gray-500 text-sm mt-2">
            Interested in joining the choir? Contact us to arrange an audition at{' '}
            <a href="mailto:choir@stgeorgesparis.com" className="text-primary font-medium hover:underline">
              choir@stgeorgesparis.com
            </a>
            .
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Carousel slides={choirPhotos} intervalMs={3500} aspect="aspect-video" />
        <p className="text-xs text-gray-400 text-center">Choir tours and events over the years</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: 'The Organ', desc: "The history and specification of St George's pipe organ." },
        { title: 'Choir Recordings', desc: 'Listen to recent recordings from the choir.' },
        { title: 'Choir Events, Tours & Photos', desc: 'News from the choir, tours and past events.' },
      ].map((item) => (
        <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-2">
          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="text-center">
      <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md">
        Download the Music List
      </button>
    </div>
  </div>
);

export default function WorshipMusic() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam === 'music' ? 'music' : 'worship');

  useEffect(() => {
    if (tabParam === 'music' || tabParam === 'worship') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams(id === 'worship' ? { tab: 'worship', sub: 'baptism' } : { tab: 'music' });
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Worship & Music" image="https://www.stgeorgesparis.com/s/cc_images/cache_10122967.jpg?t=1391976196" />

      <div className="max-w-7xl mx-auto px-4 mb-20 mt-12">
        <TabSwitcher tabs={topTabs} activeTab={activeTab} onChange={handleTabChange} />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'worship' ? <WorshipTab /> : <MusicTab />}
          </motion.div>
        </AnimatePresence>
      </div>

      <NewsSection />
    </div>
  );
}
