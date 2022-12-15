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
  addPoint(newX: number | undefined, newY :number | undefined){
    if(typeof newX!='undefined' && typeof newY!='undefined'){
      let point : Point = {
        id: Math.max.apply(Math, POINTS.map(function(o) { return o.id+1; })),
        x: newX,
        y:newY
      }
      POINTS.push(point)
    }
    else{
      alert('x & y must be numbers')
    }
  }
  addCircle(newX: number | undefined, newY :number | undefined,newRadius :number | undefined){
    if(typeof newX!='undefined' && typeof newY!='undefined' && typeof newRadius !='undefined'){
      let circle : Krug = {
        id: Math.max.apply(Math, KRUGS.map(function(o) { return o.id+1; })),
        x: newX,
        y:newY,
        radius:newRadius
      }
      KRUGS.push(circle)
    }
    else{
      alert('entered values must be numbers')
    }
  }
  addTrokut(newX: number | undefined, newY :number | undefined,newStranica :number | undefined){
    if(typeof newX!='undefined' && typeof newY!='undefined' && typeof newStranica !='undefined'){
      let trokut : Trokut = {
        id: Math.max.apply(Math, KRUGS.map(function(o) { return o.id+1; })),
        x: newX,
        y:newY,
        stranica:newStranica
      }
      TROKUTS.push(trokut)
    }
    else{
      alert('entered values must be numbers')
    }
  }
}
