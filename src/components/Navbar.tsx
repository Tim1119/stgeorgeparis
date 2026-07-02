import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import logo from '../assets/logo.png';

interface DropdownItem {
  name: string;
  to: string;
}

interface NavItem {
  id: string;
  name: string;
  href: string;
  dropdown?: DropdownItem[];
  align?: 'left' | 'right';
}

const navItems: NavItem[] = [
  { id: 'home', name: 'Home', href: '/' },
  {
    id: 'about',
    name: 'About us',
    href: '/about',
    dropdown: [
      { name: 'About us', to: '/about?tab=about' },
      { name: "Who's who", to: '/about?tab=who' },
      { name: 'Contact', to: '/contact' },
      { name: "History of St G's", to: '/history' },
      { name: "Friends of St G's", to: '/friends' },
      { name: 'Communion Anglicane', to: '/communion-anglicane' },
    ],
  },
  {
    id: 'malagasy',
    name: 'Malagasy Community',
    href: '/malagasy-community',
    dropdown: [
      { name: 'Malgaches', to: '/malagasy-community?tab=malgaches' },
      { name: 'Malagasy', to: '/malagasy-community?tab=malagasy' },
      { name: 'Petites annonces', to: '/malagasy-community?tab=annonces' },
    ],
  },
  {
    id: 'worship',
    name: 'Worship, Music & Events',
    href: '/worship-music',
    align: 'right',
    dropdown: [
      { name: 'Worship & Music', to: '/worship-music?tab=music' },
      { name: 'Baptism, Weddings & Funerals', to: '/worship-music?tab=worship&sub=baptism' },
      { name: 'Director of Music', to: '/music/director-of-music' },
      { name: 'The Organ', to: '/music/the-organ' },
      { name: 'Choir Recordings', to: '/music/choir-recordings' },
      { name: 'Choir Events, Tours & Photos', to: '/music/choir-events-tours-photos' },
      { name: 'Archived Music Lists 2013\u20132024', to: '/music/archived-music-lists' },
      { name: 'Music List', to: '/music/music-list' },
      { name: 'Download the Service Sheet', to: '/worship/download-service-sheet' },
      { name: 'Worship: Frequently Asked Questions', to: '/worship/faq' },
      { name: 'What happens and when', to: '/worship/what-happens-and-when' },
    ],
  },
  {
    id: 'faith',
    name: 'Growing in Faith',
    href: '/growing-in-faith/sermons',
    align: 'right',
    dropdown: [
      { name: 'Sermons', to: '/growing-in-faith/sermons' },
      { name: 'Baptism and Confirmation', to: '/growing-in-faith/baptism-confirmation' },
      { name: 'Understanding your Faith', to: '/growing-in-faith/understanding-your-faith' },
      { name: 'Pilgrimage and Making your Retreat', to: '/growing-in-faith/pilgrimage' },
      { name: "Celebrating God's Reconciling Faith", to: '/growing-in-faith/confession' },
      { name: 'Young Adults & Teens', to: '/growing-in-faith/young-adults-teens' },
      { name: 'Cr\u00e8che & Sunday School', to: '/growing-in-faith/creche-sunday-school' },
    ],
  },
];

// Default tab shown for each base route when no query string is present, so the
// right dropdown item still lights up when someone lands on the bare path.
const defaultTabForPath: Record<string, string> = {
  '/about': 'about',
  '/malagasy-community': 'malgaches',
  '/worship-music': 'worship',
};
const defaultSubForPath: Record<string, string> = {
  '/worship-music': 'baptism',
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close any open dropdown whenever the route actually changes.
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname, location.search]);

  const handleParentClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.dropdown) {
      e.preventDefault();
      setActiveDropdown((prev) => (prev === item.id ? null : item.id));
    } else {
      setActiveDropdown(null);
    }
  };

  const isParentActive = (item: NavItem) => {
    if (location.pathname === item.href) return true;
    if (item.dropdown) {
      return item.dropdown.some((sub) => sub.to.split('?')[0] === location.pathname);
    }
    return false;
  };

  const isSubActive = (subItem: DropdownItem) => {
    const [path, query = ''] = subItem.to.split('?');
    if (location.pathname !== path) return false;
    const targetParams = new URLSearchParams(query);
    for (const [key, value] of targetParams.entries()) {
      const current =
        searchParams.get(key) ?? (key === 'tab' ? defaultTabForPath[path] : key === 'sub' ? defaultSubForPath[path] : undefined);
      if (current !== value) return false;
    }
    return true;
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center min-w-0">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-2 sm:gap-3 min-w-0"
              onClick={() => setActiveDropdown(null)}
            >
              <img
                src={logo}
                alt="Saint George's Anglican Church logo"
                className="h-10 sm:h-12 w-auto object-contain flex-shrink-0"
              />
              <div className="block text-[11px] sm:text-sm font-semibold leading-tight text-gray-700 truncate">
                Saint George's
                <br  />
                <span className="sm:inline"> Anglican Church</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div ref={navRef} className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const parentActive = isParentActive(item);
              return (
                <div key={item.id} className="relative">
                  <Link
                    to={item.href}
                    onClick={(e) => handleParentClick(item, e)}
                    aria-haspopup={item.dropdown ? 'true' : undefined}
                    aria-expanded={item.dropdown ? activeDropdown === item.id : undefined}
                    aria-current={parentActive ? 'page' : undefined}
                    className={`px-2 py-2 text-sm font-medium flex items-center gap-1 transition-colors whitespace-nowrap ${
                      parentActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute ${
                            item.align === 'right' ? 'right-0' : 'left-0'
                          } mt-2 w-80 max-w-[90vw] bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden py-2 max-h-[70vh] overflow-y-auto`}
                        >
                          {item.dropdown.map((subItem) => {
                            const subActive = isSubActive(subItem);
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.to}
                                onClick={() => setActiveDropdown(null)}
                                aria-current={subActive ? 'page' : undefined}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  subActive
                                    ? 'bg-primary-light text-primary font-bold'
                                    : 'text-gray-700 hover:bg-primary-light hover:text-primary'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            <Link
              to="/giving"
              className="ml-3 inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-sm"
            >
              <HeartHandshake className="w-4 h-4" />
              Give
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center gap-2 flex-shrink-0">
            <Link
              to="/giving"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-full text-xs font-bold transition-colors shadow-sm"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              Give
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] xl:hidden"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white z-[70] xl:hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="Saint George's Anglican Church logo"
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => {
                  const parentActive = isParentActive(item);
                  return item.dropdown ? (
                    <div key={item.id} className="space-y-1">
                      <div className={`px-4 py-3 text-lg font-bold ${parentActive ? 'text-primary' : 'text-gray-900'}`}>
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-4 mb-2">
                        {item.dropdown.map((subItem) => {
                          const subActive = isSubActive(subItem);
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.to}
                              onClick={() => setIsOpen(false)}
                              className={`block px-4 py-2 text-sm font-medium transition-colors ${
                                subActive ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-lg font-bold rounded-lg transition-colors hover:bg-primary-light ${
                        parentActive ? 'text-primary' : 'text-gray-900 hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <Link
                  to="/giving"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-bold shadow-md"
                >
                  <HeartHandshake className="w-4 h-4" />
                  Give
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
