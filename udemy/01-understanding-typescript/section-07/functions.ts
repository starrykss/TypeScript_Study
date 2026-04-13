// Function Overloads
function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;

    return `${numberOfWords} words`;
  }

  return val.length;
}

const numOfWords = getLength('does this work?');
// numOfWords.length;  // error, 타입스크립트는 number 일 수 있다고 추론
const numItems = getLength(['Sports', 'Cookies']);

// Working with Function Overloads
function getLength2(val: any[]): number;
function getLength2(val: string): string;
function getLength2(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;

    return `${numberOfWords} words`;
  }

  return val.length;
}

const numOfWords2 = getLength2('does this work?');
numOfWords2.length;
const numItems2 = getLength2(['Sports', 'Cookies']);
