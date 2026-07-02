import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import TabSwitcher from '../components/TabSwitcher';

const tabs = [
  { id: 'about', label: 'About us' },
  { id: 'who', label: 'Who\'s who' },
];

const WhosWho = () => {
  const staff = [
    { name: 'Rev\'d Mark Osborne', role: 'Chaplain', phone: '+33 (0)6 59 37 49 54', email: 'chaplain@stgeorgesparis.org', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Very Rev\'d Dr Jeffrey John', role: 'Assistant Chaplain', phone: '+44 (0) 77 71 80 17 66', email: 'drjphjohn@gmail.com', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Rev\'d Dr Nicolas Razafindratsima', role: 'Hon. Assistant Priest with responsibility for the Malagasy congregation', phone: '+33 (0)6 59 37 49 54', email: 'chaplain@stgeorgesparis.org', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Rev\'d Grant Holmes', role: 'Hon. Assistant Priest Fr Grant is retired and volunteers here and around the Archdeaconry of France', email: 'wenlockholmes@gmail.com', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop' },
    { name: 'Rev\'d Sarah MacVane', role: 'Hon. Assistant Priest Mthr Sarah is retired and volunteers here and around the Archdeaconry of France', email: 'macvanesara@gmail.com', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop' },
    { name: 'Janet Schofield', role: 'Church Warden', email: 'office@stgeorgesparis.org', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Peter Hicks', role: 'Director of Music', email: 'office@stgeorgesparis.org', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Edmund Linton', role: 'Administrator', phone: '+33 (0)1 47 20 22 51', email: 'office@stgeorgesparis.org', hours: 'Monday-Thursday, 09:30 - 14:00', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Patrick Onyela', role: 'Church Warden', email: 'office@stgeorgesparis.org', image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&auto=format&fit=crop' },
  ];

  const roles = [
    { title: 'PCC Secretary', name: 'Jill Whitman', email: 'artemis.jw@gmail.com' },
    { title: 'PCC Treasurer', name: 'Mike Orrin' },
    { title: 'Organist', name: 'Malcolm Wisener' },
    { title: 'Servers', name: 'Hari Rabé-Manantsu' },
    { title: 'Sidespeople', name: 'Janet Schofield' },
    { title: 'Readers', name: 'Jane Sageau' },
    { title: 'Flowers', name: 'Fr Grant' },
    { title: 'Newsletter', name: 'John Crothers' },
    { title: 'Bookstall', name: 'Position Vacant' },
    { title: 'Sunday Lunch', name: 'Bart Konechni' },
    { title: 'Social events', name: 'Position Vacant' },
    { title: 'Sunday School and Crèche', name: 'Position Vacant' },
    { title: 'Website and social media', name: 'Position Vacant' },
    { title: 'Safeguarding', name: 'Mary Jane Wilkie', email: 'safeguarding@stgeorgesparis.org' },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staff.map((person, idx) => (
          <div key={idx} className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={person.image} 
                alt={person.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-gray-600 font-medium">{person.role}</p>
              {person.phone && <p className="text-gray-500 text-sm">{person.phone}</p>}
              <p className="text-primary text-sm font-medium">{person.email}</p>
              {person.hours && <p className="text-gray-400 text-xs italic">{person.hours}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 p-8">
          {roles.map((role, idx) => (
            <div key={idx} className="space-y-1 border-b border-gray-50 pb-4">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{role.title}</h4>
              <p className="text-gray-600">{role.name}</p>
              {role.email && <p className="text-primary text-xs font-medium">{role.email}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md">
          Possible button
        </button>
      </div>
    </div>
  );
};

const AboutUsTab = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Part of the Christian Family</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <h3 className="text-xl font-bold text-gray-900">With the Worldwide Church, with our Ecumenical Partners and Fellow Anglicans in Paris</h3>
            <p>
              English churches and congregations have been established on the Continent since before the Reformation. The number of these grew to such an extent that in 1633 congregations of the Church of England in all foreign countries were placed under the jurisdiction of the Bishop of London.
            </p>
            <p>
              (London then being the chief port of England). Anglican dioceses and then provinces were later formed in all parts of the world outside the United Kingdom.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=800&auto=format&fit=crop" 
              alt="Church Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden lg:order-2">
          <img 
            src="https://images.unsplash.com/photo-1515162305114-8d3a98c7121c?q=80&w=800&auto=format&fit=crop" 
            alt="Sanctuary" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed lg:order-1">
          <p>
            The Church of England maintains friendly relations with other Christian churches in mainland Europe and is committed to the quest for the full visible unity of the Church. Other churches "in communion" are the Old Catholic churches of the Union of Utrecht and the Lutheran churches of Iceland, Norway, Sweden, Finland, Estonia and Lithuania. Special agreements also exist with the Evangelical Church in Germany (The Meissen Agreement) and the Roman Catholic Church in France ("Twinnings and Exchanges").
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl text-center max-w-4xl mx-auto">
        <p className="text-gray-600 italic leading-relaxed">
          The Episcopal Church of the United States of America (ECUSA) has also established six churches in Europe. They are under the jurisdiction of the Presiding Bishop of ECUSA. Since 1971 they have been placed in the care of the Bishop-in-Charge of the American Convocation in Europe. The Spanish Episcopal Reformed Church and the Lusitanian Church (Portugal) are also full member churches of the Anglican Communion.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">Other Anglican churches in and around Paris</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {['Paris', 'Versailles', 'Maisons Laffitte', 'Chantilly', 'Fontainebleau'].map((city) => (
            <div key={city} className="space-y-2">
              <h4 className="font-bold text-center mb-2">{city}</h4>
              <button className="w-full bg-primary hover:bg-primary-dark text-white p-3 rounded-lg text-sm font-bold transition-colors">
                St. {city === 'Paris' ? 'Michael\'s' : city === 'Versailles' ? 'Mark\'s' : city === 'Maisons Laffitte' ? 'Holy Trinity' : city === 'Chantilly' ? 'Peter\'s' : 'Luke\'s'} Church Anglican
              </button>
              {city === 'Paris' && (
                <button className="w-full bg-primary hover:bg-primary-dark text-white p-3 rounded-lg text-sm font-bold transition-colors">
                  Holy Trinity Cathedral Episcopal
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">We are part of the Diocese in Europe, which is part of the Church of England:</h3>
        <div className="flex flex-wrap gap-4">
          {['The Anglican Diocese (EU)', 'Our Assistant Bishop\'s Blog', 'The Church of England', 'Episcopal (US) Convocation of churches', 'Episcopal Convocation of Churches (EU)'].map((link) => (
            <button key={link} className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-bold transition-colors">
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AboutUs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'about');

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
      <PageHeader title="About us" image="https://www.stgeorgesparis.com/s/cc_images/cache_65276581.jpg?t=1709828506" />

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
            {activeTab === 'about' && <AboutUsTab />}
            {activeTab === 'who' && <WhosWho />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

