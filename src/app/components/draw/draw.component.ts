import { Component, OnInit } from '@angular/core';
import { KRUGS } from '../../mock/draw/mock-krugs';
import { POINTS } from '../../mock/draw/mock-points';
import { TROKUTS } from '../../mock/draw/mock-trokuts';
import { Krug } from './models/krug';
import { Point } from './models/point';
import { ShapeModel } from './models/shape';
import { Trokut } from './models/trokut';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  points = POINTS;
  selectedPoint?:Point;

  krugs = KRUGS;
  selectedKrug?:Krug;

  trokuts = TROKUTS;
  selectedTrokut?:Trokut;

  onSelect(point:Point):void {
    // const shape: ShapeModel = new ShapeModel(0,0,0,0);
    // shape.type = 'TROKUT';
    // const test = shape.getData;
    this.selectedPoint = point;
  }

  onSelectPoint(point:Point):void{
    this.selectedPoint = point;
  }
  onSelectKrug(krug:Krug):void{
    this.selectedKrug = krug;
  }
  onSelectTrokut(trokut:Trokut):void{
    this.selectedTrokut = trokut;
    console.log(trokut)
  }
  moveToPoint(point: Point, obj: string):void{
    if(this.selectedKrug && obj == 'krug'){
        this.selectedKrug.x = point.x;
        this.selectedKrug.y = point.y;
    }
    else if(this.selectedTrokut && obj == 'trokut'){
      this.selectedTrokut.x = point.x;
      this.selectedTrokut.y = point.y;
  }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
