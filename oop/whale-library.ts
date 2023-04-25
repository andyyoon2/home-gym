class Catalog {
  books: {
    // Key is bookId
    [key: string]: Book;
  }
  lists: Array<{
    name: string;
    books: Book[];
  }>

  purchase(bookId: string) {}

  download(bookId: string) {}

  search(query: string) {}

  browse(listName: string) {}
}

class Reader {
  open(book: Book) {}

  nextPage() {}
  prevPage() {}
  goToPage(p: number) {}
  nextChapter() {}
  prevChapter() {}
  addBookmark() {}
  removeBookmark() {}
  addHighlight() {}
  removeHighlight() {}
}

class Book {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string; // etc
  pageCount: number;
  content: string;
}

class User {
  id: string;
  name: string;
  library: Book[];
  highlights: {
    // Key is bookId
    [key: string]: Highlight[];
  };
  bookmarks: {
    // Key is bookId
    [key: string]: Bookmark[];
  };
}

class Highlight {
  userId: string;
  bookId: string;
  pageNum: number;
  location: any; // line number?
  content: string;
}

class Bookmark {
  userId: string;
  bookId: string;
  pageNum: number;
}
