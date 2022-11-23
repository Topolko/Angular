import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})
export class GearsComponent implements OnInit {

  @Input() brojZub?: any;
  @Input() pogon?: any;

  constructor() { }

  ngOnInit(): void {
  }

  getGears(brojZub: any, pogon: any)
  {
    let zubcanici: number[] = brojZub.split(',');
    let pogonZub: number[] = pogon.split(',');

    zubcanici.forEach(function (value) {
      if (isNaN(value)) {
        alert("Unešene vrijednosti nisu brojevi")
        return;
      }
    })

    pogonZub.forEach(function (value) {
      if (isNaN(value)) {
        alert("Unešene vrijednosti nisu brojevi")
        return;
      }
    })

    let omjer: string[] = [];

    zubcanici.forEach(function (zubcanik) {
      pogonZub.forEach(function (pogon) {
        omjer.push((zubcanik / pogon).toFixed(2))
      })
    })
    alert(omjer)
  }

}
