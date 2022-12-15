import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fiz-buzz',
  templateUrl: './fiz-buzz.component.html',
  styleUrls: ['./fiz-buzz.component.css']
})
export class FizBuzzComponent implements OnInit {

  nesto: string[]=[];

  @Input() num?: number;
  constructor() { }

  ngOnInit(): void {
  }

  getFiz(num: any)
  {
    var numberValue = Number(num);
    this.nesto.splice(0)
    if (isNaN(numberValue)) {
      alert("not a number")
    }
    else
    {
      for (var i = 1; i < numberValue+1; i++)
      {
        if (i % 3 == 0 && i % 5 == 0)
        {
          this.nesto.push(' fiz-buzz ');
        }
        else if (i % 5 == 0)
        {
          this.nesto.push(' buzz ');
        }
        else if (i % 3 == 0)
        {
          this.nesto.push(' fiz ');
        }
        else
        {
          this.nesto.push(" "+i.toString()+" ");
        }
      }
    }
  }
}

