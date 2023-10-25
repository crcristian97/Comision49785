//Sirve para chequear que se conecto mi archivo JS
console.log("Conectado");

//Reglas basicas para comentar 

// 1 forma de comentar codigo es con // Comentario de Linea
/*
console.log("Conectado");
console.log("Conectado");
console.log("Conectado");
console.log("Conectado");
console.log("Conectado");
console.log("Conectado");
console.log("Conectado");
Comentario de bloque
*/

//Palabras reservadas
//Existen variables que guardan informacion
//3 tipos de variables

//1era: 
//var edad = 18; //NO LA USAN NUNCA EN SU VIDA, SI LA TIENE PUNTO MENOS
//ESMC 5

//2da forma:
//let nombreUsuario = "Cristian Cabrera";

//3era forma:
const CURSO = "Javascript";

//Declaracion de variable: significa crearla
//correcto
//let apellido;
let telefono;
//const anioNacimiento;
//incorrecto
var año
var teléfonoMóvil
var teléfono_móvil
let declarionAnonymous

//Tipos de valores
//const IVA = 0.21; //valores numerico
const edad = 18

//valor string
//let nombreUsuario = "Cristian Cabrera";
//let apellidoUsuario = 'Cracken';

//valor boolean
let esMayorEdad = true;
let esActivo = false;

//valor undefined
//Reprensenta un valor no definido
let apellido;
let apellido2 = undefined;

//valor null
//Reprenseta la ausencia de un valor
let valorNulo = null;

//Operaciones basicas
let numeroA = 50;
let numeroB = 70;
const IVA = 0.21;

//Sumamos numeros
//CONCATENACION
let resultadoSuma = numeroA + numeroB;
console.log(resultadoSuma);

let resultadoResta = numeroA - numeroB;
console.log(resultadoResta);

let resultadoProducto = numeroA * IVA;
console.log(resultadoProducto)


//prompt , alert y console.log
//let nombreUsuario = prompt("Decime tu edad");

//En el medio de aca se hace un if else, en donde depende del valor yo le muestro algo al usuario
//Condicional
//alert("Sos menos de 18");

//Ejercicio coderhouse
//1-Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
//2-Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
//3-Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

//Ejercicio 1
let nombreUser = prompt("Decime tu nombre");
console.log("Hola " + nombreUser);

//Ejercicio 2

let numeroUsuario = parseInt(prompt("Decime un numero"));
let sumaNumber = numeroUsuario + IVA;
console.log("El resultado es " + sumaNumber);

//el parseInt te cambia el tipo de dato de string a number
//Que es el parseo? es cuando se cambia el tipo de dato de string a number
//typeof.Leeanlo

//Ejercicio 3 
let textUser1 = prompt("Decime tu nombre");
let textUser2 = prompt("Decime tu apellido");

let userObject = textUser1 + " " + textUser2;

alert(userObject);


