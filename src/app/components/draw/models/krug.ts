import { Point } from "./point";

export class Krug extends Point {
  radius:number;
  constructor(id: number, x: number, y: number, radius: number)
  {
    super(id,x,y)
    this.radius = radius;
  }
}
