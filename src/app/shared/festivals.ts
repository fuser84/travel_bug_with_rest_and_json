import { Festival } from './festival';

export const FESTIVALS: Festival[] = [
  {
    id: 0,
    name: 'Wacken',
    image: '/assets/img/Wacken.jpg',
    music_style: 'Metal',
    attendance_price: 300,
    featured: true,
    description: 'summer open-air heavy metal music festival. It takes place annually in the village of ' +
    'Wacken in Schleswig-Holstein, northern Germany, 80 kilometres (50 mi) northwest of Hamburg.',
    comments: [
      {
        rating: 5,
        comment: "The best open air I've ever been!",
        author: "Mick Jagger",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating: 4,
        comment: "If you wanna rest and metal it's the right place to do it!",
        author: "James Hetfield",
        date: "2011-12-02T17:57:28.556094Z"
      }
    ],
    latitude: 54.0167,
    longitude: 9.3833
  },

  {
    id: 1,
    name: 'Zaxidfest',
    image: '/assets/img/Zaxidfest.jpg',
    music_style: 'Mix(Rock, Metal, Pop)',
    attendance_price: 40,
    featured: false,
    description: 'an annual international music and art festival held in the middle of August near Lviv, ' +
    'Ukraine.',
    comments: [
      {
        rating: 5,
        comment: "the right place to have a rest with a girl :)))",
        author: "Ghost",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating: 3,
        comment: "Party and drink!",
        author: "Ghost",
        date: "2011-12-02T17:57:28.556094Z"
      }
    ],
    latitude: 49.299999,
    longitude: 23.566668
  },
  {
    id: 2,
    name: 'Faine Misto',
    image: '/assets/img/fayne_misto.jpeg',
    music_style: 'Rock, Metal',
    attendance_price: 50,
    featured: false,
    description: 'an annual international music festival held in the middle of July near Ternopil, Ukraine.',
    comments: [
      {
        rating: 5,
        comment: "fun, alcohol and rock'n'roll",
        author: "Zebra",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating: 4,
        comment: "best place to rock!",
        author: "Zebra",
        date: "2011-12-02T17:57:28.556094Z"
      }
    ],
    latitude: 49.5900,
    longitude: 25.4754
  },
  {
    id: 3,
    name: 'LET IT ROLL',
    image: '/assets/img/let-it-roll.jpg',
    music_style: 'Drum and Bass',
    attendance_price: 100,
    featured: false,
    description: "the world's biggest drum and bass music festival which takes place in Czech Republic",
    comments: [
      {
        rating: 5,
        comment: "If you want a lot of drum and funny people. Here we go",
        author: "Static",
        date: "2012-10-16T17:57:28.556094Z"
      },
      {
        rating: 4,
        comment: "drum you a.s",
        author: "Cultureman",
        date: "2011-12-02T17:57:28.556094Z"
      }
    ],
    latitude: 50.075538,
    longitude: 14.437800
  }
];
