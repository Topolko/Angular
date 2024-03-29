import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from './models/book';
import { Member } from './models/member';
import { Rent } from './models/rent';
import { KnjiznicaService } from '../../services/knjiznica/knjiznica.service';
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

  displayBook: boolean = false;
  displayMember: boolean = false;

  newTitle?:string;
  newAutor?:string;
  newCopies?:number;
  newName?:string;

  showModalDialog(type:string) {
    switch(type){
      case type="book":
        this.displayBook = true;
        break;
      case type="member":
        this.displayMember=true;
        break;
    }
  }

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
    private knjiznicaService: KnjiznicaService,
    ) {
    this.members$ = this.knjiznicaService.getMemebrs$(),
    this.books$=this.knjiznicaService.getBooks$(),
    this.rents$= this.knjiznicaService.getRents$() }
  
  ngOnDestroy(): void {
    this.subscribers$.map(s => s.unsubscribe);
  }

  rentBook(book:Book, member:Member){
    this.knjiznicaService.rentBook(book, member)
  }

  returnBook(rent:Rent){
    this.knjiznicaService.returnBook(rent)
    this.selectedRent = undefined;
  }
  addBook(newTitle:any, newAutor:any, newCopies:any):void{
    this.knjiznicaService.addBook(newTitle,newAutor,newCopies);
    this.displayBook=false;
  }
}
