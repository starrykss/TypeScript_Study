// [1] Using 'typeof'
const userName = 'Kim';

// JavaScript 기본 기능
console.log(typeof userName); // string

type UserName = typeof userName; // 'Kim'

// [2] 'typeof' & A More Useful Example
const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['John', 'Jane'],
};

type Settings = {
  difficulty: string;
  minLevel: number;
};

function loadData(settings: Settings) {
  // ...
}

loadData(settings);
