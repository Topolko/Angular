import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Point } from '../../components/draw/models/point';
import { POINTS } from '../../mock/draw/mock-points';
import { Trokut } from '../../components/draw/models/trokut';
import { TROKUTS } from '../../mock/draw/mock-trokuts';
import { Krug } from '../../components/draw/models/krug';
import { KRUGS } from '../../mock/draw/mock-krugs';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor() { }

  getKrugs(): Observable<Krug[]>{
    const krugs= of(KRUGS);
    return krugs
  }

  getTrokuts(): Observable<Trokut[]>{
    const trokuts = of(TROKUTS)
    return trokuts
  }
  getPoints(): Observable<Point[]>{
    const points = of(POINTS);
    return points
  }
}
