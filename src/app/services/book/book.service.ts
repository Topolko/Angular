import { Injectable } from '@angular/core';
import { Book } from '../../components/knjiznica/models/book';
import { BOOKS } from '../../mock/Knjiznica/mock-books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks$(): Observable<Book[]> {
    const books = of(BOOKS);
    return books;
  }
}
