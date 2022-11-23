import { RENTS } from "src/app/mock/Knjiznica/mock-rents";

export class Rent{
    id:number;
    dateRented:Date;
    idMember:number;
    idBook:number;

    constructor( dateRented:Date, idBook:number, idMember:number){
        this.id=Math.max(...RENTS.map(x => x.id), 0)+1;
        this.dateRented=dateRented;
        this.idBook=idBook;
        this.idMember=idMember;
    }
}