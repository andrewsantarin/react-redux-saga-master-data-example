import { getRandomArbitrary, getRandomInt } from '../common/random-numbers';

const USERS = {
  11: {
    id: 11,
    name: 'Takumi Takuma',
    username: 'tktk_kun',
    email: 'tktk-kun@gmail.co.jp',
    address: {
      street: "Sakura Street",
      suite: "5219",
      city: "Tokyo",
      zipcode: "45613-9821",
      geo: {
        lat: getRandomArbitrary(0, 180),
        lng: getRandomArbitrary(0, 180)
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "takakun.sakura.ne.jp",
    "company": {
      "name": "Takumi Takuma's personal blog",
      "catchPhrase": "blog of the sakura",
      "bs": "sakura trees in spring"
    }
  },
  12: {
    id: 12,
    name: 'Jose Gonzales',
    username: 'jose_mose',
    email: 'jose.gonzales@yahoo.com',
    address: {
      street: "La Cucaracha",
      suite: "S.1230",
      city: "Whatever",
      zipcode: "90084-2130",
      geo: {
        lat: getRandomArbitrary(0, 180),
        lng: getRandomArbitrary(0, 180)
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "josegonzalesworks.com",
    "company": {
      "name": "Jose Gonzales Works",
      "catchPhrase": "Best metallurgy in town",
      "bs": "high-quality alloys"
    }
  },
  13: {
    id: 13,
    name: 'Kaji Tetsushi',
    username: 'KajiTetsushi',
    email: 'kajitetsushi@outlook.com',
    address: {
      street: "KAJI Data Highway",
      suite: "1st Room",
      city: "Data City",
      zipcode: "14757-8828",
      geo: {
        lat: getRandomArbitrary(0, 180),
        lng: getRandomArbitrary(0, 180)
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "kajitetsushi.net",
    "company": {
      "name": "KajiTetsushi.net",
      "catchPhrase": "Your personal blog",
      "bs": "digital artistry, interactive entertainment, business programming"
    }
  },
  14: {
    id: 14,
    name: 'Andrew Santarin',
    username: 'andrew.santarin',
    email: 'andrew.santarin@gmail.com',
    address: {
      street: "One Way Street",
      suite: "Master Hall",
      city: "One City",
      zipcode: "08134-8708",
      geo: {
        lat: getRandomArbitrary(0, 180),
        lng: getRandomArbitrary(0, 180)
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "andrewsantarin.com",
    "company": {
      "name": "Andrew Santarin",
      "catchPhrase": "face-to-face innovative interface",
      "bs": "business programming, user experience"
    }
  }
};

export function addRandomUser(response) {
  const randomUser = USERS[getRandomInt(11, 14)];
  response.data = [...response.data, randomUser];

  return response;
}
