const numberOfItems = 9;

const activity = {
  id: '',
  category: 'Participating in a tech event',
  date: 'November 3, 2017',
  description: '',
  points: '250',
  status: 'default',
};

const statuses = ['pending', 'expired', 'approved', 'default'];

const descriptions = [
  'Mentored teens how to code. (DBC 2016 at Redemption camp)',
  'Jim Shelton of ChanZuckerberginitiative sits down with Andela fellows at Andela\'s Nairobi HQ in a Facebook Live event',
];

const arr = [];

for (let i = 0; i < numberOfItems; i += 1) {
  arr.push({
    ...activity,
    id: Math.random().toString(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
  });
}

export default arr;
