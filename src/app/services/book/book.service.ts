import { Injectable } from '@angular/core';
import { Book } from 'src/app/components/knjiznica/models/book';
import { BOOKS } from 'src/app/mock/Knjiznica/mock-books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    return books;
  }
}
