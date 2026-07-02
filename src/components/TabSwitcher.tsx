import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function TabSwitcher({ tabs, activeTab, onChange }: TabSwitcherProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex bg-gray-100 pt-1 px-1 rounded-t-lg flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`py-3 px-6 sm:px-10 text-sm font-bold transition-all rounded-t-md whitespace-nowrap ${
              activeTab === tab.id ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full h-[3px] bg-primary" />
    </div>
  );
}
