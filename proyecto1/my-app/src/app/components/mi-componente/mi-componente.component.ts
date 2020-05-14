import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})


export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Este es un componente";
        this.comentario = "Este es el comentario";
        this.year = 2020;
    }

}



