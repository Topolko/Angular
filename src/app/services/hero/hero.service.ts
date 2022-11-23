import { Injectable } from '@angular/core';
import { Hero } from '../../components/heroes/models/hero';
import { HEROES } from '../../mock/mock-heroes';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
