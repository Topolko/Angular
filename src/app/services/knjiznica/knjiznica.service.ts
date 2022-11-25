import { Injectable } from '@angular/core';
import { Rent } from '../../components/knjiznica/models/rent';
import { RENTS } from '../../mock/Knjiznica/mock-rents';
import { Observable, of } from 'rxjs';
import { Book } from '../../components/knjiznica/models/book';
import { Member } from '../../components/knjiznica/models/member';
import { BOOKS } from '../../mock/Knjiznica/mock-books';
import { MEMBERS } from '../../mock/Knjiznica/mock-members';

@Injectable({
  providedIn: 'root'
})
export class KnjiznicaService {

  books: Book[]=[];

  constructor() { }

  
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
    let book = BOOKS.find(x=>x.id == rent?.idBook);
    if(rent&&book){
      book.brojPrimjeraka +=1
      RENTS.forEach((value,index)=>{
        if(value.id==rent.id) RENTS.splice(index,1);
      });
    }
  }
  
  getRents$(): Observable<Rent[]>{
    const rents = of(RENTS);
    return rents;
  }

  getBooks$(): Observable<Book[]> {
    const books = of(BOOKS);
    return books;
  }
  
  getMemebrs$(): Observable<Member[]>{
    const members = of(MEMBERS);
    return members;
  }
  
}
