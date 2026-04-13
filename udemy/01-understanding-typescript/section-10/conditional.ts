// [1] Introducing Conditional Types

type StringArray = string[];
type ElementType<T extends any[]> = T[number];

type Example1 = ElementType<StringArray>;

const text = 1;

// type Element2 = ElementType<typeof text>; // error (any[] 불만족)

type GetElementType<T> = T extends any[] ? T[number] : never; // conditional type
type Example2 = GetElementType<StringArray>;
type Example3 = GetElementType<typeof text>;

type Element3 = GetElementType<typeof text>; // ok (never)

// [2] Conditional Types - Another Example
type FullnamePerson = { firstName: string; lastName: string };
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never;

function getFullName<T extends object>(person: T): FullnameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
  }

  throw new Error('No first name and / or last name found.');
}

const name1 = getFullName({}); // never
const name2 = getFullName({ firstName: 'Kim' }); // never
const name3 = getFullName({
  firstName: 'Kim',
  lastName: 'starrykss',
}); // string
