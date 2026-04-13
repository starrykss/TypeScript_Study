// [1] Understanding Indexed Access Types

const appUser = {
  name: 'Max',
  age: 35,
  permissions: [
    {
      id: 'p1',
      title: 'admin',
      description: 'Admin access',
    },
  ],
};

type AppUser1 = typeof appUser;

type AppUser2 = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser2['permissions']; // indexed access type

// [2] Accessing Array Elements with Indexed Access Types

type Perm = Perms[number];

type Names = string[];
type Name = Names[number];
