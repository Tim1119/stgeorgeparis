import React from 'react';
import PageHeader from '../components/PageHeader';

export default function Giving() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Giving"
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1600&auto=format&fit=crop"
      />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-16 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">My Giving</h2>
            <p className="text-xl text-primary font-medium italic">My Church : St George's in all our hearts</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We're a really diverse group of people in the congregation of St. George's, but we do have at
                least one thing in common: St. George's is very important to us all.
              </p>
              <p>
                St. George's enriches the lives of each of us, in various ways. It's our church, and we feel
                very fortunate to be members of it. And we all want it to thrive and grow.
              </p>
              <p>
                It costs about <span className="font-bold text-gray-900">235,000 € per year</span> to run St.
                George's, not counting exceptional items such as building work.
              </p>
            </div>
            <div className="bg-primary-light/20 p-8 rounded-2xl border border-primary-light/50 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Your Giving</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex gap-3">
                  <span className="font-bold text-primary">Stewardship:</span>
                  <p>Reminds us that all we possess comes from God in the first place.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">Offering:</span>
                  <p>Our worship is also about the offering of our whole lives.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">Generosity:</span>
                  <p>We want to be generous in response to God's generosity to us.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center">Ways of Giving to St George's</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Standing Order', desc: 'SEPA direct transfer from your bank.', tax: '66% Tax Reduction' },
                { title: 'Online (Helloasso)', desc: 'Secure online giving portal.', tax: '66% Tax Reduction' },
                { title: 'Cheque', desc: "Payable to Saint George's Church.", tax: '66% Tax Reduction' },
                { title: 'Online Basket', desc: 'During Sunday morning services.', tax: 'No Tax Reduction' },
                { title: 'Cash', desc: 'Collection plate on Sundays.', tax: 'No Tax Reduction' },
              ].map((way, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <h4 className="text-xl font-bold text-gray-900">{way.title}</h4>
                  <p className="text-gray-600 text-sm">{way.desc}</p>
                  <div
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded inline-block ${
                      way.tax.includes('No') ? 'bg-gray-100 text-gray-500' : 'bg-primary-light text-primary'
                    }`}
                  >
                    {way.tax}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold">Tax Efficiency in France</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              French taxpayers can reduce their income tax by 66% of the amount donated, up to a limit of 20% of
              taxable income.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg">
              Give via Helloasso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
