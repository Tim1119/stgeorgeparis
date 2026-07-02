import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { EMAILJS_CONFIG } from '../../config/integrations';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function BaptismConfirmation() {
  const [requestType, setRequestType] = useState<'baptism' | 'confirmation' | 'both'>('baptism');
  const [candidateName, setCandidateName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      request_type: requestType,
      candidate_name: candidateName,
      date_of_birth: dateOfBirth || 'Not provided',
      contact_name: contactName,
      reply_to: email,
      phone: phone || 'Not provided',
      message,
    };

    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID_BAPTISM, templateParams, {
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
      });
      setStatus('success');
      setCandidateName('');
      setDateOfBirth('');
      setContactName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Baptism & Confirmation" image="https://images.unsplash.com/photo-1602526432604-029d081c0f79?q=80&w=1600&auto=format&fit=crop" />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Baptism marks the beginning of a Christian life of faith; Confirmation is a personal affirmation of
          that faith, often for those baptised as children who now wish to profess it for themselves. Fill in the
          form below and one of our clergy will be in touch to arrange a time to talk it through — there's no
          need to have all the details settled in advance.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">I'm enquiring about</label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'baptism', label: 'Baptism' },
                  { id: 'confirmation', label: 'Confirmation' },
                  { id: 'both', label: 'Both' },
                ] as const
              ).map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setRequestType(opt.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                    requestType === opt.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="candidateName" className="block text-sm font-bold text-gray-700 mb-1.5">
                Candidate's full name
              </label>
              <input
                id="candidateName"
                type="text"
                required
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-bold text-gray-700 mb-1.5">
                Date of birth <span className="font-normal text-gray-400">(if known)</span>
              </label>
              <input
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contactName" className="block text-sm font-bold text-gray-700 mb-1.5">
              Your name <span className="font-normal text-gray-400">(parent/guardian, if the candidate is a child)</span>
            </label>
            <input
              id="contactName"
              type="text"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1.5">
                Phone <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">
              Anything else you'd like us to know
            </label>
            <textarea
              id="message"
              rows={5}
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
            {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          </button>

          {status === 'success' && (
            <div className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Thank you — we've received your enquiry and will be in touch shortly.</p>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-start gap-2 text-red-700 bg-red-50 border border-red-200 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                Something went wrong. Please try again, or email us directly at{' '}
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
  );
}
