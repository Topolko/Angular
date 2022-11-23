import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';
import { Member } from './models/member';
import { Rent } from './models/rent';
import { BookService } from '../../services/book/book.service';
import { MemberService } from '../../services/member/member.service';
import { RentService } from '../../services/rent/rent.service';



@Component({
  selector: 'app-knjiznica',
  templateUrl: './knjiznica.component.html',
  styleUrls: ['./knjiznica.component.css']
})
export class KnjiznicaComponent implements OnInit {

  members: Member[]=[];
  books: Book[]=[];
  rents: Rent[]=[];

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
    private rentService: RentService
    ) { }

  ngOnInit(): void {
    this.getBooks();
    this.getMembers();
    this.getRents();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
  getMembers():void{
    this.memberService.getMemebrs()
    .subscribe(members => this.members = members)
  }
  getRents():void{
    this.rentService.getRents()
    .subscribe(rents => this.rents = rents)
  }

  rentBook(book:Book, member:Member){
    this.rentService.rentBook(book, member)
  }
  returnBook(rent:Rent){
    this.rentService.returnBook(rent)
    this.selectedRent = undefined;
  }
}
