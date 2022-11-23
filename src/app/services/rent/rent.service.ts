import { Injectable } from '@angular/core';
import { Rent } from 'src/app/components/knjiznica/models/rent';
import { RENTS } from 'src/app/mock/Knjiznica/mock-rents';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/components/knjiznica/models/book';
import { Member } from 'src/app/components/knjiznica/models/member';
import { BookService } from '../book/book.service';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  books: Book[]=[];

  constructor(private bookService: BookService, ) { }

  getRents(): Observable<Rent[]>{
    const rents = of(RENTS);
    return rents;
  }

  rentBook(book:Book, member:Member):void{
    if(book.brojPrimjeraka>0){
      book.brojPrimjeraka-=1;
      RENTS.push(new Rent(new Date,book.id,member.id));
    }
    else{
      alert('no copies left')
    }
  }

  returnBook(rent:Rent){
    this.getBooks();
    let book = this.books.find(x=>x.id == rent?.idBook);
    if(rent&&book){
        book.brojPrimjeraka +=1
        RENTS.forEach((value,index)=>{
          if(value.id==rent.id) RENTS.splice(index,1);
      });
    }
}
getBooks(): void {
  this.bookService.getBooks()
    .subscribe(books => this.books = books);
}

}
