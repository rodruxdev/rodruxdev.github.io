const PROJECTS = [
  {
    title: 'Rodrux Player',
    description: 'This is a web page to practice animations and mockup with html and css. The page has neuromorphic design and few interactions with buttons.',
    image: 'rodrux-player.png',
    basicStack: ['javascript'],
    stack: ['html', 'css', 'javascript'],
    urlWeb: 'https://rodruxdev.github.io/rodrux-player/',
    urlGithub: 'https://github.com/rodruxdev/rodrux-player',
  },
  {
    title: '"La Casa de Teresita" Hotel Web Page',
    description:
      'This is a freelance project for the promotion, booking and guest and guest check-in registration. The web page allows the hotel to have an extra channel for reservations and extends the guest experience within the hotel. The web page has multi-language support and use some Google APIs.',
    image: 'lacasadeteresita.png',
    basicStack: ['javascript', 'react.js', 'next.js'],
    stack: ['html', 'css', 'javascript', 'react.js', 'next.js'],
    urlWeb: 'https://www.lacasadeteresita.com/en',
  },
  {
    title: 'Coin Watcher',
    description:
      "A web app to see cryptocoins and tokens information. The page brings the information from Coingecko's API. The user can search coins by title and see the coin's information, a coin convertor and some related coins to look after. It has simple unit testing with Jest and Testing Library for some components and uses Redux to manage the state.",
    image: 'coin-watcher.png',
    basicStack: ['javascript', 'react.js', 'redux'],
    stack: ['html', 'css', 'javascript', 'react.js', 'redux', 'jest', 'testing library', 'webpack'],
    urlWeb: 'https://rodrux-coin-watcher.vercel.app/',
    urlGithub: 'https://github.com/rodruxdev/rodrux-coin-watcher',
  },
  {
    title: 'Buying List',
    description:
      "This web app let you save your buying list, check the items you bought and delete the items. It saves the items list in the browser's local storage . This project uses React.js and its hooks to manage the state.",
    image: 'buying-list.png',
    basicStack: ['javascript', 'react.js'],
    stack: ['html', 'css', 'javascript', 'react.js'],
    urlWeb: 'https://rodruxdev.github.io/buying-list/',
    urlGithub: 'https://github.com/rodruxdev/buying-list',
  },
  {
    title: 'Cesar Cipher Game',
    description:
      "This is a game to decipher some words using Cesar Cipher. This page also let you cipher or decipher your own messages. This page follows the instruction in a project of Laboratoria's Bootcamp.",
    image: 'cesar-cipher-game.png',
    basicStack: ['javascript', 'jest'],
    stack: ['html', 'css', 'javascript', 'jest'],
    urlWeb: 'https://rodruxdev.github.io/cesar-cipher-game/',
    urlGithub: 'https://github.com/rodruxdev/cesar-cipher-game',
  },
  {
    title: 'Trivia GOTR',
    description:
      "This is a Trivia game about Game of Thrones and The Lord of the Ring. You have to answer six questions in 30 seconds each. Then you see the wrong and correct answers. If time runs out you have to play again. This page follows the instruction in a project of Laboratoria's Bootcamp.",
    image: 'trivia-GOTR.png',
    basicStack: ['javascript', 'jest'],
    stack: ['html', 'css', 'javascript', 'jest'],
    urlWeb: 'https://rodruxdev.github.io/trivia-GOTR/src/choice.html',
    urlGithub: 'https://github.com/rodruxdev/trivia-GOTR',
  },
];

export const PROJECT_LENGTH = PROJECTS.length;

export default PROJECTS;
