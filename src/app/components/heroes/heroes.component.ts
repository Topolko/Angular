import { Component,OnInit  } from '@angular/core';

import { Hero } from './models/hero';
import { HeroService } from '../../services/hero/hero.service';
import { MessageService } from '../../services/message/message.service';
import { finalize, forkJoin, map, Observable, of, Subject, take, takeUntil, tap } from 'rxjs';
import { HEROES } from 'src/app/mock/mock-heroes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  newHeroName: string ='';

  destroyed$ = new Subject();
  public heroes$:Observable<any[]>
  users:any

  display: boolean = false;

  public joinCallObservable:any;
  public isLoading = false;
  public empLastList?: any[];
  public userList: any;
  public employeeList?: any[];
  
  showModalDialog() {
      this.display = true;
  }

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService,
    private httpClient: HttpClient ) 
    { 
      this.heroes$=this.heroService.getHeroes$();
    }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  addHero(heroName:string):void{
    this.heroService.addHero(heroName)
  }

  ngOnInit() {
    // this.loadData();
    // this.joinCall();
    this.getList();
  }

  getList(): void {
    this.isLoading = true;
    this.joinCall();
    console.log('Call getEmployees and getUsers');
    this.joinCallObservable.subscribe(() => {
      this.isLoading = false;
      console.log('All HTTP calls successful');
    }, (_error: any) => {
      this.isLoading = false;
      alert('error');
    });
  }

  loadData(){
    this.heroService.getUsers$().pipe(
      tap(
        data => {
          this.users = (data && (data as any).data) ? (data as any).data : [];
        },
        error => {
          alert('nejde vise')
        }),
        finalize(() => {
          
        }),
        takeUntil(this.destroyed$))
        .subscribe();
  }

  // private joinCall() {
  //   const getHeroes = of(HEROES);
  //   const getUsers = this.heroService.getUsers$();
  //   const joinCallObservable = forkJoin(getHeroes, getUsers)
  //     .pipe(map((responseArray: [any[], any]) => {
  //       const heroesList = responseArray[0];
  //       const userList = responseArray[1];
  //     })).subscribe(data => {
  //       this.users = data;
  //       return responseArray;
  //     });
  // }
  private joinCall() {
    const getEmployees = of(HEROES);
    const getUsers = this.heroService.getUsers$();
    this.joinCallObservable = forkJoin(getEmployees, getUsers)
      .pipe(map((responseArray: [any[], any]) => {
        this.employeeList = responseArray[0];
        this.userList = responseArray[1].data;
        this.empLastList = [];

        this.httpClient
            .get('https://reqres.in/api/users?delay=5')
            .pipe(map((res: any) => {
              return res.data;
            }))
            .subscribe(data => {
              this.empLastList = data;
              return responseArray;
            });
      }));
  }
}
