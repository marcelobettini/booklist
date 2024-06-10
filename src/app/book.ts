export interface Book {
  isbn: string;
  title: string;
  authors: string[];
  genres: string[];
  publisher?: string;
  year: number;
  summary?: string;
  pageCount?: number;
  language?: string;
  cover?: string;
}
