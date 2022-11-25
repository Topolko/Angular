import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TROKUTS } from '../../mock/draw/mock-trokuts';
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
  constructor(
    private drawService: DrawService
  ) {
    this.points$=this.drawService.getPoints();
    this.krugs$=this.drawService.getKrugs();
    this.trokuts$= this.drawService.getTrokuts();
   }

  ngOnInit(): void {
  }
}
