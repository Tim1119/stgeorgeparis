import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { EMAILJS_CONFIG, MAILCHIMP_CONFIG } from '../config/integrations';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      full_name: `${firstName} ${lastName}`.trim(),
      reply_to: email,
      message,
    };

    try {
      // 1) Notify the office
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID_OFFICE, templateParams, {
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      });
      // 2) Auto-reply to the sender confirming receipt
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID_AUTOREPLY, templateParams, {
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      });

      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Get in Touch" image="https://www.stgeorgesparis.com/s/cc_images/teaserbox_27758840.jpg?t=1427181210" />

      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: info + map */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">How to get in touch</h2>
            <p className="text-gray-600 leading-relaxed">
              For all general enquiries please telephone the office. <em>Pour tout renseignement, merci d'appeler
              le bureau.</em> If you prefer to write, use the form and we'll reply as soon as we can.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">Address</p>
                <p className="text-gray-600">
                  Saint George's Church, Paris
                  <br />
                  7 rue Auguste Vacquerie, 75116 Paris, France
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">Telephone</p>
                <p className="text-gray-600">+33 (0)1 47 20 22 51</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">Administrator</p>
                <p className="text-gray-600">
                  Edmund Linton —{' '}
                  <a href="mailto:office@stgeorgesparis.org" className="text-primary hover:underline">
                    office@stgeorgesparis.org
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">Office hours</p>
                <p className="text-gray-600">Monday – Thursday, 09:30 – 14:00</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-72 w-full border border-gray-100 shadow-sm">
            <iframe
              title="Map to Saint George's Church, Paris"
              src="https://www.google.com/maps?q=7+rue+Auguste+Vacquerie,+75116+Paris,+France&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Newsletter — Mailchimp */}
          <div className="bg-primary-light/30 border border-primary-light rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Subscribe to our e-news</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get service updates, news and events from St George's straight to your inbox.
            </p>
            <form
              action={MAILCHIMP_CONFIG.FORM_ACTION}
              method="post"
              target="_blank"
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="EMAIL"
                required
                placeholder="you@example.com"
                className="flex-grow px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {/* Mailchimp bot-catcher — must stay empty, hidden from real users */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name={MAILCHIMP_CONFIG.HONEYPOT_NAME} tabIndex={-1} defaultValue="" />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-bold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right: contact form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-1.5">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="So we — and our auto-reply — know where to send a response"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md"
            >
              {status === 'sending' && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <div className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  Thank you — your message has been sent. We've also emailed you a confirmation, and the office
                  will get back to you shortly.
                </p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-start gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  Something went wrong sending your message. Please try again, or email us directly at{' '}
                  <a href="mailto:office@stgeorgesparis.org" className="underline font-medium">
                    office@stgeorgesparis.org
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
