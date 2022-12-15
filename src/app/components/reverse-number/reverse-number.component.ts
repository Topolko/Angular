import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reverse-number',
  templateUrl: './reverse-number.component.html',
  styleUrls: ['./reverse-number.component.css']
})
export class ReverseNumberComponent implements OnInit {

  reverse: number[]=[];
  @Input() num?: number;

  constructor() { }

  ngOnInit(): void {
  }
  getReverse(num: any) {
    if (isNaN(num)) {
      alert("Not a number")
    }
    else {

      this.reverse.push(parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num))  
          
    }
    return
  }
}
