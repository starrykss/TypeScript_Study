// Intersection Types
// (1) type 결합
type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status; // Intersection
type AccessedDatabaseData = DatabaseData & Status;

// (2) interface 결합
interface DatabaseData2 {
  connectionUrl: string;
  credentials: string;
}

interface Status2 {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccessedFileData2 extends FileData, Status {}
interface AccessedDatabaseData2 extends DatabaseData, Status {}

// More on Type Guards
