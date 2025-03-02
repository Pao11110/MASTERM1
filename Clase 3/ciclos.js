// Frutas de cada tipo
let tiposFrutas = {
    ácidas: ["kiwi", "limón", "pomelo", "naranja", "manzana"],
    semiácidas: ["fresas", "membrillo", "frambuesa", "ciruela"],
    neutras: ["coco", "aguacate", "nuez", "avellana"],
    dulces: ["plátano", "cereza", "melón", "sandía", "granada", "pera"],
};

// Varios tipos de frutas en un array
let frutas = [
  "kiwi", "limón", "pomelo", "naranja", "manzana", // ácidas
  "fresas", "membrillo", "frambuesa", "ciruela",    // semiácidas
  "coco", "aguacate", "nuez", "avellana",           // neutras
  "plátano", "cereza", "melón", "sandía", "granada", "pera" // dulces
];

// Almacenar la cantidad de cada tipo de fruta
let clasificacionFrutas = {
    ácidas: 0,
    semiácidas: 0,
    neutras: 0,
    dulces: 0,
};

// Ciclo for para recorrer el arreglo y contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

// Clasificar la fruta según su tipo y aumentar el contador correspondiente.
    if (tiposFrutas.ácidas.includes(fruta)) {
        clasificacionFrutas.ácidas++;
    } else if (tiposFrutas.semiácidas.includes(fruta)) {
        clasificacionFrutas.semiácidas++;
    } else if (tiposFrutas.neutras.includes(fruta)) {
        clasificacionFrutas.neutras++;
    } else if (tiposFrutas.dulces.includes(fruta)) {
        clasificacionFrutas.dulces++;
    }
}

// Cantidad de cada tipo de fruta.
console.log("Cantidad de frutas por tipo:");
console.log("Ácidas:", clasificacionFrutas.ácidas);
console.log("Semiácidas:", clasificacionFrutas.semiácidas);
console.log("Neutras:", clasificacionFrutas.neutras);
console.log("Dulces:", clasificacionFrutas.dulces);

// Opcional: Solución con un ciclo `while`.
let clasificacionFrutasWhile = {
    ácidas: 0,
    semiácidas: 0,
    neutras: 0,
    dulces: 0,
};

let j = 0;
while (j < frutas.length) {
    let fruta = frutas[j];

    if (tiposFrutas.ácidas.includes(fruta)) {
        clasificacionFrutasWhile.ácidas++;
    } else if (tiposFrutas.semiácidas.includes(fruta)) {
        clasificacionFrutasWhile.semiácidas++;
    } else if (tiposFrutas.neutras.includes(fruta)) {
        clasificacionFrutasWhile.neutras++;
    } else if (tiposFrutas.dulces.includes(fruta)) {
        clasificacionFrutasWhile.dulces++;
    }

    j++;
}

console.log("\nCantidad de frutas por tipo (usando while):");
console.log("Ácidas:", clasificacionFrutasWhile.ácidas);
console.log("Semiácidas:", clasificacionFrutasWhile.semiácidas);
console.log("Neutras:", clasificacionFrutasWhile.neutras);
console.log("Dulces:", clasificacionFrutasWhile.dulces);