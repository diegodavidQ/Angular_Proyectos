"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hola mundo soy la app1");
var nombre = "diego";
//#################################//
//Tipos de datos
var texto;
texto = "Esto es un texto";
// texto = 12; //en TypeScript no es posible cambiar de tipo de dato
var variableBool = false;
var numero = 123;
var cualquiera = "Cualquier cosa";
var arrayCaracter = ["texto1", "texto2"];
var arrayNumero;
var arrayBooleano;
var arrayCualquiera = ["texto", 123, true];
//#################################//
//clases
var App1 = /** @class */ (function () {
    function App1(valor) {
        console.log("Inic.iando app1.." + valor);
        this.numero = valor;
        console.log(this.numero);
    }
    return App1;
}());
exports.App1 = App1;
