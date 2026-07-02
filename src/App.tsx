import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MalagasyCommunity from './pages/MalagasyCommunity';
import WorshipMusic from './pages/WorshipMusic';
import History from './pages/History';
import Friends from './pages/Friends';
import CommunionAnglicane from './pages/CommunionAnglicane';
import Contact from './pages/Contact';
import Giving from './pages/Giving';
import Footer from './components/Footer';

// Music pages
import DirectorOfMusic from './pages/music/DirectorOfMusic';
import TheOrgan from './pages/music/TheOrgan';
import ChoirRecordings from './pages/music/ChoirRecordings';
import ChoirEventsToursPhotos from './pages/music/ChoirEventsToursPhotos';
import ArchivedMusicLists from './pages/music/ArchivedMusicLists';
import MusicList from './pages/music/MusicList';

// Worship pages
import DownloadServiceSheet from './pages/worship/DownloadServiceSheet';
import WorshipFAQ from './pages/worship/WorshipFAQ';
import WhatHappensAndWhen from './pages/worship/WhatHappensAndWhen';

// Growing in Faith pages
import Sermons from './pages/faith/Sermons';
import BaptismConfirmation from './pages/faith/BaptismConfirmation';
import UnderstandingYourFaith from './pages/faith/UnderstandingYourFaith';
import Pilgrimage from './pages/faith/Pilgrimage';
import Confession from './pages/faith/Confession';
import YoungAdultsTeens from './pages/faith/YoungAdultsTeens';
import CrecheSundaySchool from './pages/faith/CrecheSundaySchool';

// Scrolls to the top of the page on every route change (but not on tab-only query changes).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/malagasy-community" element={<MalagasyCommunity />} />
            <Route path="/worship-music" element={<WorshipMusic />} />
            <Route path="/history" element={<History />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/communion-anglicane" element={<CommunionAnglicane />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/giving" element={<Giving />} />

            <Route path="/music/director-of-music" element={<DirectorOfMusic />} />
            <Route path="/music/the-organ" element={<TheOrgan />} />
            <Route path="/music/choir-recordings" element={<ChoirRecordings />} />
            <Route path="/music/choir-events-tours-photos" element={<ChoirEventsToursPhotos />} />
            <Route path="/music/archived-music-lists" element={<ArchivedMusicLists />} />
            <Route path="/music/music-list" element={<MusicList />} />

            <Route path="/worship/download-service-sheet" element={<DownloadServiceSheet />} />
            <Route path="/worship/faq" element={<WorshipFAQ />} />
            <Route path="/worship/what-happens-and-when" element={<WhatHappensAndWhen />} />

            <Route path="/growing-in-faith/sermons" element={<Sermons />} />
            <Route path="/growing-in-faith/baptism-confirmation" element={<BaptismConfirmation />} />
            <Route path="/growing-in-faith/understanding-your-faith" element={<UnderstandingYourFaith />} />
            <Route path="/growing-in-faith/pilgrimage" element={<Pilgrimage />} />
            <Route path="/growing-in-faith/confession" element={<Confession />} />
            <Route path="/growing-in-faith/young-adults-teens" element={<YoungAdultsTeens />} />
            <Route path="/growing-in-faith/creche-sunday-school" element={<CrecheSundaySchool />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
