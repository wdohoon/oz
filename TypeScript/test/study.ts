/* 1. 배열 타입 */
const bookTitles: string[] = [
    '점심이 끝났다.',
    '1998',
    '배고프다.',
    '타입스크립트? 어려운데?',
    '캠을 꺼야 능률 올라가는법',
];

/* 2. 객체 타입 */
type Book = {
    title: string;
    author: string;
    publicationYear: number;
    isAvailable: boolean;
};

const exampleBook: Book = {
    title: '캠을 꺼야 능률 올라가는법',
    author: 'W. DH',
    publicationYear: 1998,
    isAvailable: true,
};

/* 3. 함수 타입 */
type UpdateAvailability = (book: Book, newAvailability: boolean) => void;

const updateAvailability: UpdateAvailability = (book, newAvailability) => {
    book.isAvailable = newAvailability;
};

/* 4. 유니언 타입 */
type BookStatus = 'available' | 'checked out' | 'reserved';

const updateBookStatus = (book: Book, newStatus: BookStatus): void => {
    if (newStatus === 'available') {
        book.isAvailable = true;
    } else {
        book.isAvailable = false;
    }
};

/* 5. 인터페이스 */
interface Library {
    books: Book[];
    addBook(book: Book): void;
    removeBook(title: string): void;
}

class LibrarySystem implements Library {
    books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(title: string): void {
        this.books = this.books.filter((book) => book.title !== title);
    }
}

/* 6. 튜플 */
type BookInfo = [string, string];

const exampleBookInfo: BookInfo = ['캠을 꺼야 능률 올라가는법', 'W. DH'];

/* 7. 열거형 */
enum Genre {
    Fiction,
    NonFiction,
    Fantasy,
    Biography,
    ScienceFiction,
    Romance,
}

type DetailedBook = Book & {
    genre: Genre;
};

const detailedExampleBook: DetailedBook = {
    title: '왜 캠을 켜야하는가?',
    author: 'W.W.W DH',
    publicationYear: 2024,
    isAvailable: true,
    genre: Genre.Fantasy,
};
