import React, { useMemo, useState } from 'react';
import { Search, FileDown, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { serviceSheets } from '../../data/serviceSheets';

const PAGE_SIZE = 10;

export default function DownloadServiceSheet() {
  const [search, setSearch] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return serviceSheets.filter((s) => {
      if (dateFrom && s.date < dateFrom) return false;
      if (dateTo && s.date > dateTo) return false;
      if (search.trim() && !s.service.toLowerCase().includes(search.trim().toLowerCase())) return false;
      return true;
    });
  }, [search, dateFrom, dateTo]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const resetPage = () => setPage(1);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Download the Service Sheet"
        image="https://www.stgeorgesparis.com/s/cc_images/cache_65276581.jpg?t=1709828506"
      />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Search service</label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  resetPage();
                }}
                placeholder="e.g. Solemn Eucharist…"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">From</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => {
                setDateFrom(e.target.value);
                resetPage();
              }}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
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
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">{filtered.length} service sheets found</p>

        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
          {pageItems.map((s) => (
            <div key={s.id} className="py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="sm:w-28 flex-shrink-0 text-sm font-bold text-gray-500">
                {new Date(s.date + 'T00:00:00').toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900">{s.service}</p>
                <p className="text-sm text-gray-400">PDF &middot; {s.fileSize}</p>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors flex-shrink-0">
                <FileDown className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
          {pageItems.length === 0 && (
            <p className="py-12 text-center text-gray-400">No service sheets match those filters.</p>
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
