import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Krug } from './models/krug';
import { Point } from './models/point';
import { ShapeModel } from './models/shape';
import { Trokut } from './models/trokut';
import { DrawService } from '../../services/draw/draw.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  public points$:Observable<any[]>
  public krugs$: Observable<any[]>
  public trokuts$: Observable<any[]>

  selectedPoint?:Point;
  selectedKrug?:Krug;
  selectedTrokut?:Trokut;

  displayPoint: boolean = false;
  displayCircle: boolean = false;
  displayTriangle: boolean = false;

  newX?:number;
  newY?:number;
  newRadius?:number;
  newStranica?:number;

  showModalDialog(type:string) {
    switch(type){
      case type="point":
        this.displayPoint = true;
        break;
      case type="krug":
        this.displayCircle=true;
        break;
      case type="trokut":
        this.displayTriangle=true;
        break;
    }
  }

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
  constructor(
    private drawService: DrawService
  ) {
    this.points$=this.drawService.getPoints();
    this.krugs$=this.drawService.getKrugs();
    this.trokuts$= this.drawService.getTrokuts();
   }

  ngOnInit(): void {
  }
  addPoint(newX:any, newY:any):void{
    this.drawService.addPoint(newX,newY);
    this.displayPoint=false;
  }
  addCircle(newX:any, newY:any, radius:any):void{
    this.drawService.addCircle(newX,newY,radius);
    this.displayCircle=false;
  }
  addTrokut(newX:any, newY:any, newStranica:any):void{
    this.drawService.addTrokut(newX,newY,newStranica);
    this.displayTriangle=false;
  }

}
