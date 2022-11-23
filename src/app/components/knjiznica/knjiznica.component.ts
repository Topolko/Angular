import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from './models/book';
import { Member } from './models/member';
import { Rent } from './models/rent';
import { BookService } from '../../services/book/book.service';
import { MemberService } from '../../services/member/member.service';
import { RentService } from '../../services/rent/rent.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-knjiznica',
  templateUrl: './knjiznica.component.html',
  styleUrls: ['./knjiznica.component.css']
})
export class KnjiznicaComponent implements OnDestroy {

  subscribers$: Array<Subscription> = new Array<Subscription>();

  public members$: Observable<any[]>;
  public books$: Observable<any[]>;
  public rents$: Observable<any[]>;


  selectedBook?:Book;
  selectedMember?:Member;
  selectedRent?:Rent;

  onSelectBook(book:Book):void{
    this.selectedBook = book;
  }
  onSelectMember(member:Member):void{
    this.selectedMember = member;
  }
  onSelectRent(rent:Rent):void{
    this.selectedRent = rent;
  }

  constructor(
    private memberService: MemberService,
    private bookService: BookService, 
    private rentService: RentService,
    ) {
    this.members$ = this.memberService.getMemebrs$(),
    this.books$=this.bookService.getBooks$(),
    this.rents$= this.rentService.getRents$() }
  
  ngOnDestroy(): void {
    this.subscribers$.map(s => s.unsubscribe);
  }

  rentBook(book:Book, member:Member){
    this.rentService.rentBook(book, member)
  }

  returnBook(rent:Rent){
    this.rentService.returnBook(rent)
    this.selectedRent = undefined;
  }
}
