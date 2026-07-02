import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import WelcomeSection from '../components/WelcomeSection';
import NewsSection from '../components/NewsSection';
import CalendarSection from '../components/CalendarSection';
import LivestreamSection from '../components/LivestreamSection';
import SafeguardingSection from '../components/SafeguardingSection';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WelcomeSection />
      <NewsSection />
      <CalendarSection />
      <LivestreamSection />
      <SafeguardingSection />
    </>
  );
}
