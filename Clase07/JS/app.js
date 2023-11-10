//ABSTRACCION

// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   debugger
//     total += i
// }

// console.log(total);

//APLICAR ABSTRACION
//let total;
// let numInicio = prompt("Decime el primer numero");
// let numFin = prompt("Decime el FINAL numero");

// function sumarRango(inicio, fin){
//   let total = 0;
//   for (let i = inicio; i <= fin; i++) {
//       total += i
//   }
//   return total;
// }

//let resultado = sumarRango(numInicio, numFin); //55


//Retorna funciones.Nosotros vimos que las funciones generalmente retorna valores
// function mayorQue(n) {
//   return (m) => m > n
//         //12 => 12 > 10
// }

// const mayorQueDiez = mayorQue(10); // m > 10
// //let mayorQueDiez = (m) => m > 10

// let mayorQueVeinte = mayorQue(20); // m > 10
// //No es string
// //No es boolean
// //No es un array
// //Es una funcion de funcion

// console.log( mayorQueDiez(12) ); // m = 12
// console.log( mayorQueVeinte(20) );

// let operacion = prompt("Que operacion queres hacer");
// let num1 = prompt("Decime un numero");
// let num2 = prompt("Decime un numero"); 
// function asignarOperacion(op) {
//   if (op === "sumar") {
//       return (a, b) => a + b;
//   } else if (op === "restar") {
//       return (a, b) => a - b;
//   }
// }

// let suma = asignarOperacion(operacion);
// //suma = (a, b) => a + b;
// //suma = (4, 6) => 4 + 6;
// let resta = asignarOperacion(operacion);
// //resta = (a, b) => a - b;
// //resta = (5, 3) => 5 - 3;


// console.log( suma(num1, num2) );  
// console.log( resta(num1, num2) );

//Recibimso funcione spor parametro
// function porCadaUno(arr, aplicarIVA) {
//   debugger
//   for (const el of arr) {
//     aplicarIVA(el)
//   }
// }

// const productos = [
//   {nombre: "Libro", precio: 10},
//   {nombre: "Mate", precio: 20},
//   {nombre: "Termo", precio: 30},
// ]

// function aplicarIVA(producto){
//   debugger
//   const iva = 0.21;
//   const precioIvaFinal = producto.precio + (producto.precio * iva);
//   console.log(`${producto.nombre} es el precio final ${precioIvaFinal}`);
// }

// porCadaUno(productos, aplicarIVA);

// const numeros= [1, 2, 3, 4];

// function duplicarNumer(numero){
//   debugger
//   console.log(numero * 2);
// }
//           //1er ele, 2do que es una "funcion"
// porCadaUno(numeros, duplicarNumer);

//Metodo forEach que recorrer cada elemento y hace la logica que queres
//  const numeros = [1, 2, 3, 4, 5, 6];


// // ↓  (donde buscar) . forEach (que voy a buscar ) ↓ 
// numeros.forEach( ()=> {
//      console.log()
// } )

// const productos = [
//    {nombre: "Libro", precio: 10},
//    {nombre: "Mate", precio: 20},
//    {nombre: "Termo", precio: 30},
// ];
// productos.forEach( (producto)=> {
//   debugger
//   console.log(producto.precio);
// } )

//Metodo FIND

// const cursos = [
//   {nombre: 'Javascript', precio: 15000},
//   {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => el.nombre === "ReactJS");
// const resultado2 = cursos.find((el) => el.nombre === "DW");

// console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
// console.log(resultado2)

//Metodo filter

// const cursos = [
//   {nombre: 'Javascript', precio: 15000, alumno: "Agustin", rol: "Profesor" ,profesor: true},
//   {nombre: 'ReactJS', precio: 22000, alumno: "Agustin", rol: "Alumno", profesor: false},
//   {nombre: 'AngularJS', precio: 22000, alumno: "Agustin", rol: "Alumno", profesor: false},
//   {nombre: 'Desarrollo Web', precio: 16000, alumno: "Agustin", rol: "Profesor", profesor: true},
// ]

// const resultado = cursos.filter((el) => el.alumno.includes('Agustin'))
// //const resultado2 = cursos.filter((el) => el.precio < 14000)

// console.log(resultado);

// //Some, RETORNA TRUE O FALSE

// console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// // true
// console.log( cursos.some((el) => el.nombre == "VueJS")) 
// // false


// const numeros = [1, 2, 3, 4, 5, 6];
// debugger
// const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

// console.log(total) 


const numeros = [ 40, 1, 5, 200 ];
//Que pasa si es un array de objectos? Como se haria
debugger
console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
console.log(numeros.sort((a, b) => b - a)); 