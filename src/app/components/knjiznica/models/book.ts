export class Book{
    id:number;
    autor:string;
    title:string;
    brojPrimjeraka:number;

    constructor(id:number, autor:string, title:string, brojPrimjeraka:number)
    {
        this.id=id;
        this.autor=autor;
        this.brojPrimjeraka=brojPrimjeraka;
        this.title=title;
    }

}