import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download } from 'lucide-react';
import { downloadYearCalendarPdf, SpecialEvent } from '../utils/calendarPdf';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const schedule = [
  {
    day: 'Sunday',
    events: [
      { time: '08:30', title: 'Holy Communion (1662)' },
      { time: '10:30', title: 'Solemn Eucharist' },
      { time: '16:30', title: 'Messe Malgache', subtitle: '1st & 3rd Sundays of the month' },
    ],
  },
  {
    day: 'Monday',
    events: [
      { time: '18:00', title: 'Evening Prayer' },
      { time: '18:30', title: 'Eucharist' },
    ],
  },
  {
    day: 'Tuesday',
    events: [
      { time: '09:15', title: 'Morning Prayer' },
      { time: '18:00', title: 'Evening Prayer' },
      { time: '18:30', title: 'Eucharist' },
    ],
  },
  {
    day: 'Wednesday',
    events: [
      { time: '12:00', title: 'Eucharist' },
      { time: '18:00', title: 'Evening Prayer', subtitle: 'followed by Exposition of the Blessed Sacrament' },
    ],
  },
  {
    day: 'Thursday',
    events: [
      { time: '09:15', title: 'Morning Prayer' },
      { time: '18:00', title: 'Evening Prayer' },
      { time: '18:30', title: 'Eucharist' },
    ],
  },
  {
    day: 'Friday',
    events: [
      { time: '18:00', title: 'Evening Prayer' },
      { time: '18:30', title: 'Eucharist' },
    ],
  },
  {
    day: 'Saturday',
    events: [
      { time: '12:00', title: 'Eucharist' },
      { time: '18:00', title: 'The Eucharist', subtitle: "en français" },
    ],
  },
];

// Sample special events for the year. In a real backend this would come from a
// "special events" content type (recurring + one-off), with the church able to
// add things like Patronal Festival, Harvest, Advent Carols, etc. For now this
// is a static list — only the entries falling in the *current* quarter are shown
// on the homepage banner, exactly as requested.
const specialEvents: SpecialEvent[] = [
  { month: 4, day: 23, title: "Patronal Festival — St George's Day" },
  { month: 7, day: 25, title: 'Parish Summer Fête' },
  { month: 9, day: 20, title: 'Harvest Festival' },
  { month: 11, day: 30, title: "Advent Carol Service" },
  { month: 12, day: 25, title: 'Christmas Day' },
];

function getQuarter(month: number) {
  return Math.floor((month - 1) / 3) + 1;
}

export default function CalendarSection() {
  const today = useMemo(() => new Date(), []);
  const todayName = DAY_NAMES[today.getDay()];
  const currentQuarter = getQuarter(today.getMonth() + 1);
  const currentYear = today.getFullYear();

  const quarterEvents = useMemo(
    () => specialEvents.filter((e) => getQuarter(e.month) === currentQuarter),
    [currentQuarter]
  );

  const formattedToday = today.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Calendar</h2>
          <button className="text-primary hover:underline flex items-center gap-1 font-medium">
            Full calendar <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Special Events Banner — current quarter only */}
        <div className="bg-primary-light/30 border border-primary-light rounded-xl p-6 mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Special Events <span className="text-sm font-normal text-gray-500">(this quarter)</span>
          </h3>
          {quarterEvents.length > 0 ? (
            <div className="space-y-3">
              {quarterEvents.map((event) => (
                <div key={`${event.month}-${event.day}`} className="flex gap-4 items-start">
                  <span className="font-bold text-primary whitespace-nowrap">
                    {new Date(currentYear, event.month - 1, event.day).toLocaleDateString(
                      'en-GB',
                      { day: 'numeric', month: 'long' }
                    )}
                  </span>
                  <p className="text-gray-700">{event.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No special events scheduled this quarter yet.</p>
          )}
        </div>

        {/* Current date */}
        <p className="text-center text-gray-500 font-medium mb-4">{formattedToday}</p>

        {/* Weekly Grid — centered, today highlighted live */}
        <div className="calendar-grid justify-center">
          {schedule.map((day) => {
            const isToday = day.day === todayName;
            return (
              <div key={day.day} className="space-y-4">
                <h4
                  className={`text-lg font-bold pb-2 border-b-2 text-center ${
                    isToday ? 'text-primary border-primary' : 'text-gray-900 border-gray-100'
                  }`}
                >
                  {day.day}
                </h4>
                <div className="space-y-3">
                  {day.events.map((event, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg transition-colors ${
                        isToday ? 'bg-primary text-white' : 'bg-primary-light/50 hover:bg-primary-light'
                      }`}
                    >
                      <div className="text-sm font-bold mb-1">{event.time}</div>
                      <div className="text-sm font-medium leading-tight">{event.title}</div>
                      {event.subtitle && (
                        <div className={`text-xs mt-1 italic ${isToday ? 'text-white/80' : 'text-gray-500'}`}>
                          {event.subtitle}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center space-y-6">
          <button
            onClick={() => downloadYearCalendarPdf(currentYear, specialEvents)}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md"
          >
            <Download className="w-4 h-4" />
            Calendar {currentYear}
          </button>
          <p className="text-gray-600">
            For more information on services, see{' '}
            <Link to="/worship-music" className="text-primary font-bold hover:underline">
              Worship
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
