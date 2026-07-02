import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, HeartHandshake, Home as HomeIcon, Info } from 'lucide-react';
import { MAILCHIMP_CONFIG } from '../config/integrations';

export default function Footer() {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const onAbout = location.pathname === '/about';

  return (
    <footer className="bg-footer text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Address */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold border-b border-white/10 pb-4">Address</h3>
          <div className="flex gap-4 items-start text-gray-400">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="leading-relaxed">
              Saint George's Church, Paris<br />
              7 rue Auguste Vacquerie,<br />
              75116 Paris<br />
              FRANCE
            </p>
          </div>
          <div className="rounded-xl overflow-hidden h-48 w-full border border-white/10">
            <iframe
              title="Map to Saint George's Church, Paris"
              src="https://www.google.com/maps?q=7+rue+Auguste+Vacquerie,+75116+Paris,+France&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact + printable/copyright + Newsletter */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold border-b border-white/10 pb-4">Contact</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-center text-gray-400">
              <Phone className="w-5 h-5 text-primary" />
              <p>T: +33 (0)1 47 20 22 51</p>
            </div>
            <div className="flex gap-4 items-center text-gray-400">
              <Mail className="w-5 h-5 text-primary" />
              <p>@: office@stgeorgesparis.org</p>
            </div>
          </div>

          <div className="space-y-2 text-gray-400 text-sm">
            <a href="#" className="block hover:text-primary transition-colors">
              Version imprimable | Plan du site
            </a>
            <p>© Saint George's Anglican Church Paris</p>
          </div>

          <div>
            <p className="text-sm font-bold text-white mb-3">Subscribe to our e-news</p>
            <form
              action={MAILCHIMP_CONFIG.FORM_ACTION}
              method="post"
              target="_blank"
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                name="EMAIL"
                required
                placeholder="you@example.com"
                className="flex-grow px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/60 text-sm"
              />
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name={MAILCHIMP_CONFIG.HONEYPOT_NAME} tabIndex={-1} defaultValue="" />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-bold transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Easy Access */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold border-b border-white/10 pb-4">Easy Access</h3>
          <div className="flex flex-col gap-4 items-start">
            {!onHome && (
              <Link to="/" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <HomeIcon className="w-5 h-5 text-primary" />
                Home
              </Link>
            )}
            {!onAbout && (
              <Link
                to="/about"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Info className="w-5 h-5 text-primary" />
                About
              </Link>
            )}
            <Link
              to="/giving"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-colors shadow-md mt-2"
            >
              <HeartHandshake className="w-4 h-4" />
              Give
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
