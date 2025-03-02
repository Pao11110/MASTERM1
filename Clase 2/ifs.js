//Generador de valor random
let nota = Math.floor(Math.random() * 101)
console.log(nota);


// Verificamos si la nota es válida y su estado
if (nota >= 90) {
    console.log("Nota:", nota , "Excelente :D");
} else if (nota >= 75) {
    console.log("Nota:", nota , "Bien :)");
} else if (nota >= 60) {
        console.log("Nota:", nota , "Suficiente :S");
} else {
    console.log("Nota:", nota , "No aprobado :c");
}
