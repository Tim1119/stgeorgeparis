import { jsPDF } from 'jspdf';

export interface SpecialEvent {
  month: number; // 1-12
  day: number;
  title: string;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const WEEKDAY_LETTERS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const PRIMARY = { r: 176, g: 63, b: 52 }; // matches the site's --color-primary
const INK = { r: 30, g: 30, b: 35 };
const MUTED = { r: 150, g: 150, b: 155 };

// Fixed row height for every month grid — always reserving 6 rows regardless
// of how many that particular month actually needs, so months never overlap.
const CELL_H = 6.5;
const GRID_ROWS = 6;
const GRID_HEIGHT = CELL_H * GRID_ROWS;

function drawMonth(doc: jsPDF, x: number, y: number, width: number, year: number, month: number, events: SpecialEvent[]) {
  const cellW = width / 7;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(INK.r, INK.g, INK.b);
  doc.text(MONTH_NAMES[month - 1], x, y);

  const headerY = y + 6;
  doc.setFontSize(7);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  doc.setFont('helvetica', 'bold');
  WEEKDAY_LETTERS.forEach((letter, i) => {
    doc.text(letter, x + i * cellW + cellW / 2, headerY, { align: 'center' });
  });

  const firstOfMonth = new Date(year, month - 1, 1);
  const startOffset = firstOfMonth.getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month, 0).getDate();

  const gridTop = headerY + 3;
  let row = 0;
  let col = startOffset;

  doc.setFontSize(8);

  for (let day = 1; day <= daysInMonth; day++) {
    const cellX = x + col * cellW;
    const cellY = gridTop + row * CELL_H;
    const event = events.find((e) => e.month === month && e.day === day);

    if (event) {
      doc.setFillColor(PRIMARY.r, PRIMARY.g, PRIMARY.b);
      doc.roundedRect(cellX + 0.5, cellY + 0.5, cellW - 1, CELL_H - 1, 0.8, 0.8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setTextColor(INK.r, INK.g, INK.b);
      doc.setFont('helvetica', 'normal');
    }

    doc.text(String(day), cellX + cellW / 2, cellY + CELL_H / 2 + 1, { align: 'center' });

    col++;
    if (col > 6) {
      col = 0;
      row++;
    }
  }

  // Always return the same block height (6 rows) so every month occupies
  // identical vertical space and pages never overflow.
  return gridTop + GRID_HEIGHT;
}

function drawRegularServices(doc: jsPDF, x: number, y: number, width: number) {
  const boxHeight = 30;
  doc.setDrawColor(230, 220, 218);
  doc.setFillColor(250, 246, 245);
  doc.roundedRect(x, y, width, boxHeight, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(PRIMARY.r, PRIMARY.g, PRIMARY.b);
  doc.text('Regular Services (every week, unless noted otherwise)', x + 5, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(INK.r, INK.g, INK.b);
  const lines = [
    'Sunday — 08:30 Holy Communion (1662) · 10:30 Solemn Eucharist · 16:30 Messe Malgache (1st & 3rd Sundays)',
    'Tue & Thu — 09:15 Morning Prayer     Mon, Tue, Thu, Fri — 18:00 Evening Prayer · 18:30 Eucharist',
    'Wednesday — 12:00 Eucharist · 18:00 Evening Prayer, followed by Exposition of the Blessed Sacrament',
    "Saturday — 12:00 Eucharist · 18:00 L'eucharistie (en français)",
  ];
  lines.forEach((line, i) => {
    doc.text(line, x + 5, y + 13 + i * 4.3, { maxWidth: width - 10 });
  });

  return y + boxHeight;
}

/**
 * Generates a printable one-year calendar as a PDF — four pages, one per
 * quarter (three months each) — with special event dates highlighted in the
 * church's primary color, a regular-services reference on every page, and
 * that quarter's special events listed under each month.
 */
export function downloadYearCalendarPdf(year: number, specialEvents: SpecialEvent[]) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  for (let quarter = 0; quarter < 4; quarter++) {
    if (quarter > 0) doc.addPage();

    // Header band
    doc.setFillColor(PRIMARY.r, PRIMARY.g, PRIMARY.b);
    doc.rect(0, 0, pageWidth, 28, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(`Saint George's Anglican Church, Paris`, margin, 13);
    doc.setFontSize(11);
    doc.text(`Calendar ${year} — Quarter ${quarter + 1}`, margin, 21);

    let cursorY = 36;
    cursorY = drawRegularServices(doc, margin, cursorY, contentWidth) + 10;

    const startMonth = quarter * 3 + 1;

    for (let m = startMonth; m < startMonth + 3; m++) {
      const monthEvents = specialEvents.filter((e) => e.month === m);
      const bottom = drawMonth(doc, margin, cursorY, contentWidth, year, m, specialEvents);
      cursorY = bottom + 5;

      if (monthEvents.length > 0) {
        doc.setFontSize(8);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(PRIMARY.r, PRIMARY.g, PRIMARY.b);
        const label = monthEvents
          .map((e) => `${e.day} ${MONTH_NAMES[e.month - 1]} — ${e.title}`)
          .join('   •   ');
        doc.text(label, margin, cursorY, { maxWidth: contentWidth });
        cursorY += 6;
      }

      cursorY += 6; // gap before next month
    }

    // Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
    doc.text(
      '7 rue Auguste Vacquerie, 75116 Paris, France  •  office@stgeorgesparis.org  •  +33 (0)1 47 20 22 51',
      margin,
      doc.internal.pageSize.getHeight() - 10
    );
  }

  doc.save(`st-georges-calendar-${year}.pdf`);
}
