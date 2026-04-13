"use strict";
// [1] Using 'typeof'
const userName = 'Kim';
// JavaScript 기본 기능
console.log(typeof userName); // string
// [2] 'typeof' & A More Useful Example
const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane'],
};
function loadData(settings) {
    // ...
}
loadData(settings);
