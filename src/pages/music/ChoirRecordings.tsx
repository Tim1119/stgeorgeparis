import React, { useMemo, useState } from 'react';
import { Search, Play, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { recordings, recordingTypes } from '../../data/recordings';

const PAGE_SIZE = 10;

export default function ChoirRecordings() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return recordings.filter((r) => {
      if (type !== 'all' && r.type !== type) return false;
      if (dateFrom && r.date < dateFrom) return false;
      if (dateTo && r.date > dateTo) return false;
      if (search.trim() && !r.title.toLowerCase().includes(search.trim().toLowerCase())) return false;
      return true;
    });
  }, [search, type, dateFrom, dateTo]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const resetPage = () => setPage(1);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Choir Recordings"
        image="https://www.stgeorgesparis.com/s/cc_images/cache_65514084.JPG"
      />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Search title</label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  resetPage();
                }}
                placeholder="e.g. Evensong, Byrd…"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Type</label>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                resetPage();
              }}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white"
            >
              <option value="all">All types</option>
              {recordingTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">From</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => {
                  setDateFrom(e.target.value);
                  resetPage();
                }}
                className="w-full px-2 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">To</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => {
                  setDateTo(e.target.value);
                  resetPage();
                }}
                className="w-full px-2 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">{filtered.length} recordings found</p>

        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
          {pageItems.map((r) => (
            <div key={r.id} className="py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="sm:w-28 flex-shrink-0 text-sm font-bold text-gray-500">
                {new Date(r.date + 'T00:00:00').toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900">{r.title}</p>
                <p className="text-sm text-gray-500">
                  <span className="text-primary">{r.type}</span> &middot; {r.duration}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors">
                  <Play className="w-4 h-4" />
                  Play
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {pageItems.length === 0 && (
            <p className="py-12 text-center text-gray-400">No recordings match those filters.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-gray-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors ${
                  p === currentPage ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-gray-50"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
