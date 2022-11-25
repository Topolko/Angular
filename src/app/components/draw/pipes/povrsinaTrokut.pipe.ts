import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'povrsinaTrokut'
})
export class PovrsinaTrokutPipe implements PipeTransform{
    transform(value: number) {
        
        return ((Math.sqrt(3) / 4)*(Math.pow(value, 2))).toFixed(2) ;
    }
}