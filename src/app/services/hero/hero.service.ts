import { Injectable } from '@angular/core';
import { Hero } from '../../components/heroes/models/hero';
import { HEROES } from '../../mock/mock-heroes';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http : HttpClient) { }

  getHeroes$(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  addHero(heroName: string){
    if(typeof heroName!='undefined' && heroName.trim().length != 0){
      let hero : Hero = {
        id: Math.max.apply(Math, HEROES.map(function(o) { return o.id+1; })),
        name: heroName
      }
      HEROES.push(hero)
    }
    else{
      alert('enter a name')
    }
  }

  getUsers$(): any {
    return this.http.get(environment.apiUrl);
  }
}
