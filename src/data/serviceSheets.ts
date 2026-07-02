export interface ServiceSheetEntry {
  id: string;
  date: string; // ISO
  service: string;
  fileSize: string;
}

const services = [
  '08:30 Holy Communion (1662)', '10:30 Solemn Eucharist', '16:30 Messe Malgache',
  '18:00 Eucharist (samedi, en fran\u00e7ais)',
];

function generate(): ServiceSheetEntry[] {
  const list: ServiceSheetEntry[] = [];
  let day = new Date('2026-06-28T00:00:00Z');
  for (let i = 0; i < 20; i++) {
    list.push({
      id: `sheet-${i + 1}`,
      date: day.toISOString().slice(0, 10),
      service: services[i % services.length],
      fileSize: `${(180 + (i % 5) * 22)} KB`,
    });
    day = new Date(day.getTime() - 7 * 24 * 60 * 60 * 1000);
  }
  return list;
}

// Sample data — in production, the office uploads a new PDF each week.
export const serviceSheets: ServiceSheetEntry[] = generate();
