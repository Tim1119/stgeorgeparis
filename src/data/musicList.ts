export interface MusicListEntry {
  id: string;
  date: string; // ISO
  setting: string;
  anthem: string;
  hymns: string;
}

const settings = [
  'Missa Brevis (Palestrina)', 'Communion Service in F (Darke)', 'St Paul\u2019s Service (Howells)',
  'Missa O Quam Gloriosum (Victoria)', 'Communion Service in C (Stanford)', 'Short Communion Service (Ireland)',
];
const anthems = [
  'Ave Verum Corpus (Byrd)', 'Locus Iste (Bruckner)', 'O Taste and See (Vaughan Williams)',
  'If Ye Love Me (Tallis)', 'Greater Love Hath No Man (Ireland)', 'Hear My Prayer (Mendelssohn)',
];
const hymnSets = [
  '412, 210, 366, 494', '166, 383, 271, 508', '198, 435, 89, 362', '334, 501, 152, 296',
];

function generate(): MusicListEntry[] {
  const list: MusicListEntry[] = [];
  let day = new Date('2026-06-28T00:00:00Z');
  for (let i = 0; i < 26; i++) {
    list.push({
      id: `music-${i + 1}`,
      date: day.toISOString().slice(0, 10),
      setting: settings[i % settings.length],
      anthem: anthems[i % anthems.length],
      hymns: hymnSets[i % hymnSets.length],
    });
    day = new Date(day.getTime() - 7 * 24 * 60 * 60 * 1000);
  }
  return list;
}

// Sample data — in production, uploaded weekly by the office/Director of Music.
export const musicListEntries: MusicListEntry[] = generate();
