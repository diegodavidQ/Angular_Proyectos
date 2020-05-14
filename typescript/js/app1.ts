console.log("hola mundo soy la app1");
let nombre:string = "diego";

//#################################//
//Tipos de datos

let texto:string;
texto = "Esto es un texto";
// texto = 12; //en TypeScript no es posible cambiar de tipo de dato

let variableBool:boolean = false;
let numero:number = 123;

let cualquiera:any = "Cualquier cosa";

let arrayCaracter:string[] = ["texto1","texto2"];
let arrayNumero:number[];
let arrayBooleano:boolean[];
let arrayCualquiera:any[] = ["texto",123,true];

//#################################//

//clases
export class App1{

    numero:number;

    constructor(valor:number){
        console.log("Inic.iando app1.."+valor);
        this.numero = valor;
        console.log(this.numero);
    }   


}



