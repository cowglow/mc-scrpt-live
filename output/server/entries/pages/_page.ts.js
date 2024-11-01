const previousShows = [
  {
    name: "Monsters of Jungle feat. Conrad Subs",
    date: "2024-10-19T20:00:00.000Z",
    venue: "Z-Bau",
    link: "https://www.facebook.com/events/519820660577897"
  },
  {
    name: "Bass Culture Family Festival",
    date: "2024-07-21T10:00:00.000Z",
    venue: "Gleis 3 Eckental",
    link: "https://www.facebook.com/events/980135723611932"
  },
  {
    name: "Lauf Altstadtfest 2024",
    date: "2024-06-29T16:00:00.000Z",
    venue: "Kuni Island Bar",
    link: "https://www.facebook.com/events/892222082624838"
  },
  {
    name: "Monsters of Jungle",
    date: "2024-06-15T20:00:00.000Z",
    venue: "Z-Bau",
    link: "https://facebook.com/events/s/monsters-of-jungle/1500950714100894/"
  },
  {
    name: "Booyaka - Jungle & Drum and Bass",
    date: "2024-06-08T20:00:00.000Z",
    venue: "Kopf und Kragen",
    link: "https://www.facebook.com/events/1120179539198780/"
  },
  {
    name: "DubWorXx feat. Mc Raida",
    date: "2024-05-08T20:00:00.000Z",
    venue: "Z-Bau",
    link: "https://www.facebook.com/events/1153566106070267"
  }
];
const upcomingShows = [
  {
    name: "Booyaka",
    date: "2024-11-02T21:00:00.000Z",
    venue: "Kofferfabrik",
    link: "https://www.instagram.com/booyakadnb/"
  },
  {
    name: "Booyaka feat. MC Fava",
    date: "2024-12-14T21:00:00.000Z",
    venue: "Kopf und Kragen",
    link: "https://www.facebook.com/events/2083267788737099"
  },
  {
    name: "Monsters of Jungle X-Mas Bash",
    date: "2024-12-25T22:00:00.000Z",
    venue: "Kunstverein Hintere-Cramergasse e.V",
    link: "https://www.monstersofjungle.de"
  }
];
const prerender = true;
const load = async () => {
  return { upcomingShows, previousShows };
};
export {
  load,
  prerender
};
