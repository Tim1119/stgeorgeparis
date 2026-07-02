export interface Sermon {
  id: string;
  date: string; // ISO yyyy-mm-dd
  preacher: string;
  topic: string;
  title: string;
  hasAudio: boolean;
  hasText: boolean;
}

const preachers = [
  "Fr Mark Osborne",
  "Very Rev'd Dr Jeffrey John",
  'Fr Nicolas Razafindratsima',
  'Fr Grant Holmes',
  "Rev'd Sarah MacVane",
];

const topics = [
  'Advent', 'Christmas', 'Epiphany', 'Lent', 'Holy Week', 'Easter', 'Ascension', 'Pentecost',
  'Trinity', 'Harvest', 'Discipleship', 'Prayer', 'Forgiveness', 'The Parables', 'Baptism',
  'The Eucharist', 'Hope', 'Community', 'Pilgrimage', 'Reconciliation',
];

const titleTemplates = [
  'Walking in the Light', 'A Table for All', 'The Wideness of Mercy', 'Seeds of the Kingdom',
  'Living Water', 'The Road to Emmaus', 'Bearing One Another\u2019s Burdens', 'Called by Name',
  'The Prodigal Welcome', 'Salt and Light', 'A Costly Grace', 'The Good Shepherd',
  'Rejoice Always', 'Building on Rock', 'Love Your Neighbour', 'The Narrow Gate',
  'Faith Like a Mustard Seed', 'Peace Be With You', 'The Bread of Life', 'New Wine, New Wineskins',
];

function generateSermons(): Sermon[] {
  const sermons: Sermon[] = [];
  let day = new Date('2026-06-28T00:00:00Z');
  for (let i = 0; i < 34; i++) {
    const preacher = preachers[i % preachers.length];
    const topic = topics[i % topics.length];
    const title = titleTemplates[i % titleTemplates.length];
    sermons.push({
      id: `sermon-${i + 1}`,
      date: day.toISOString().slice(0, 10),
      preacher,
      topic,
      title,
      hasAudio: i % 5 !== 4,
      hasText: i % 3 !== 2,
    });
    day = new Date(day.getTime() - 7 * 24 * 60 * 60 * 1000); // one week earlier
  }
  return sermons;
}

// Sample data for now — in production this would come from a CMS/backend so
// office staff can upload a new sermon (with audio/text files) each week.
export const sermons: Sermon[] = generateSermons();
export const allPreachers = preachers;
export const allTopics = topics;
