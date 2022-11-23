import { Point } from "./point";

export class ShapeModel extends Point {
  radius:number;
  type: string = 'KRUG';
  private allowedTypes = ['KRUG','TROKUT','KVADRAT'];
  constructor(id: number, x: number, y: number, radius: number)
  {
    super(id,x,y)
    this.radius = radius;
  }

  get getData() { 
    if (this.allowedTypes.includes(this.type)) {
        switch (this.type) {
            case 'TROKUT':
                return new Point(1,2,3);
                break;
            default:
        }
    }
    return new Point(0,0,0);
  }
}