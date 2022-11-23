import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reverse-number',
  templateUrl: './reverse-number.component.html',
  styleUrls: ['./reverse-number.component.css']
})
export class ReverseNumberComponent implements OnInit {

  @Input() num?: number;

  constructor() { }

  ngOnInit(): void {
  }
  getReverse(num: any) {
    if (isNaN(num)) {
      alert("Not a number")
    }
    else {
      alert(
        parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
      )      
    }
    return
  }
}
