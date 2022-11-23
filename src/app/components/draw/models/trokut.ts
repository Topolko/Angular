import { Point } from "./point";

export class Trokut extends Point {
  stranica :number;
  constructor(id: number, x: number, y: number, stranica: number)
  {
      super(id,x,y)
      this.stranica = stranica;
      const opseg = stranica*3
  }
}
