import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';
import TabSwitcher from './TabSwitcher';

interface Pill {
  id: string;
  label: string;
  paragraphs: string[];
}

interface PillContentPageProps {
  title: string;
  image?: string;
  pills: Pill[];
}

export default function PillContentPage({ title, image, pills }: PillContentPageProps) {
  const [activeTab, setActiveTab] = useState(pills[0]?.id);
  const active = pills.find((p) => p.id === activeTab) ?? pills[0];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title={title} image={image} />
      <div className="max-w-3xl mx-auto px-4 mb-16 mt-12">
        <TabSwitcher
          tabs={pills.map(({ id, label }) => ({ id, label }))}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            {active.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {p}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
