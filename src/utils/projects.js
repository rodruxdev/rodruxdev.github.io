const PROJECTS = [
  {
    title: 'Rodrux Player',
    description: 'This is a web page to practice animations and mockup with html and css. The page has neuromorphic design and few interactions with buttons.',
    image: 'rodrux-player.png',
    stack: ['html', 'css', 'js'],
  },
  {
    title: 'Coin Watcher',
    description:
      "A web app to see cryptocoins and tokens information. The page brings the information from Coingecko's API. The user can search coins by title and see the coin's information, a coin convertor and some related coins to look after. It has simple unit testing with Jest and Testing Library for some components and uses Redux to manage the state.",
    image: 'coin-watcher.png',
    stack: ['html', 'css', 'js', 'react.js', 'redux', 'jest', 'testing library', 'webpack'],
  },
  {
    title: 'Buying List',
    description:
      "This web app let you save your buying list, check the items you bought and delete the items. It saves the items list in the browser's local storage . This project uses React.js and its hooks to manage the state.",
    image: 'buying-list.png',
    stack: ['html', 'css', 'js', 'react.js'],
  },
  {
    title: 'Cesar Cipher Game',
    description:
      "This is a game to decipher some words using Cesar Cipher. This page also let you cipher or decipher your own messages. This page follows the instruction in a project of Laboratoria's Bootcamp.",
    image: 'cesar-cipher-game.png',
    stack: ['html', 'css', 'js', 'jest'],
  },
];

export const PROJECT_LENGTH = PROJECTS.length;

export default PROJECTS;
