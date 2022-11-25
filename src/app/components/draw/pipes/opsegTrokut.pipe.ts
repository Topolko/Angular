import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'opsegTrokut'
})
export class OpsegTrokutPipe implements PipeTransform{
    transform(value: number) {
        return (value * 3).toFixed(2);
    }
}