// File
type FileSource = { type: 'file'; path: string };

const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

function isFile(source: Source) {
  return source.type === 'file';
}

// DB
type DBSource = { type: 'db'; connectionUrl: string };

const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server

  // (1) Type Guard 1 : 특정 키가 객체 안에 있는지 여부로 체크
  // if ('path' in source) {
  //   source.path // => use that to open the file
  //   return;
  // }

  // (2) Type Guard 2 : Discriminated Union (구분된 유니온 타입)
  if (isFile(source)) {
    // source.path;  // => use that to open the file
    return;
  }

  // source.connectionUrl; // => to reach out to database
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  // (3) Type Guard : instanceof 키워드 사용
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
