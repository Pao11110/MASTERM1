console.log('Hola mundo');

/*Datos primitivos*/

let nombre = "Pau";
let edad = 25;
let esMayordeEdad = true;
let saldo;
let cuenta = null;
let id = Symbol("id");
let numeroGrande = 12319847274832792n;

console.log("Este dato es de tipo:",typeof nombre,"y su valor es:", nombre)
console.log("Este dato es de tipo:",typeof edad,"y su valor es:", edad)
console.log("Este dato es de tipo:",typeof esMayordeEdad,"y su valor es:", esMayordeEdad)
console.log("Este dato es de tipo:",typeof saldo,"y su valor es:", saldo)
console.log("Este dato es de tipo:",typeof cuenta,"y su valor es:", cuenta)
console.log("Este dato es de tipo:",typeof id, "y su valor es de:", id)
console.log("Este dato es de tipo:",typeof numeroGrande,"y su valor es:", numeroGrande)

/* Datos combinados*/

/*Objeto*/

let persona = {
    nombre: "Pau",
    edad: 25,
    nacionalidad: "Mexicana"
}

/*Array*/

let numeros = [2,4,6,8,10,12]

/*Función*/

function suma(a,b) { 
    return a + b
}

/*
let fecha = new Date();
console.log(fecha);
*/


console.log("Este dato es de tipo:",typeof persona,"y su valor es:", persona)
console.log("Este dato es de tipo:",typeof numeros,"y su valor es:", numeros)
console.log("Este dato es de tipo:",typeof suma,"y su valor es:", suma)

