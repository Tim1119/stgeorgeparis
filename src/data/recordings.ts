export interface Recording {
  id: string;
  date: string; // ISO
  title: string;
  type: 'Anthem' | 'Evensong' | 'Concert' | 'Mass Setting';
  duration: string;
}

const items: Array<[string, Recording['type'], string]> = [
  ['Ave Verum Corpus (Byrd)', 'Anthem', '4:12'],
  ['Choral Evensong, Trinity 4', 'Evensong', '48:30'],
  ['Locus Iste (Bruckner)', 'Anthem', '3:45'],
  ['Christmas Concert 2025', 'Concert', '1:02:15'],
  ['Missa Brevis (Palestrina)', 'Mass Setting', '18:20'],
  ['Hear My Prayer (Mendelssohn)', 'Anthem', '10:40'],
  ['Choral Evensong, Advent 2', 'Evensong', '45:10'],
  ['Remembrance Concert 2025', 'Concert', '55:00'],
];

function generate(): Recording[] {
  const list: Recording[] = [];
  let day = new Date('2026-06-14T00:00:00Z');
  for (let i = 0; i < 22; i++) {
    const [title, type, duration] = items[i % items.length];
    list.push({
      id: `rec-${i + 1}`,
      date: day.toISOString().slice(0, 10),
      title,
      type,
      duration,
    });
    day = new Date(day.getTime() - 12 * 24 * 60 * 60 * 1000);
  }
  return list;
}

// Sample data — real recordings would be uploaded here as audio files.
export const recordings: Recording[] = generate();
export const recordingTypes: Recording['type'][] = ['Anthem', 'Evensong', 'Concert', 'Mass Setting'];
