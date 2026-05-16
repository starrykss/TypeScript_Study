import _ from 'lodash';

// Could not find a declaration file for module 'lodash'. 'c:/Users/userName/repositories/TypeScript_Study/udemy/01-understanding-typescript/section-17/node_modules/lodash/lodash.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`

const numbers = [1, 2, 3, 4, 5];

// split that into multiple array
const chunkedArr = _.chunk(numbers, 2);
