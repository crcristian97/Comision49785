//Funciones. Como se declaran

//Las funciones se declaran con la palabra RESERVADA function
//El nombre en miniscula y sin espacio
//Los parentesis seguido de corchete
//PRIMERO SE DECLARA LA FUNCION, LUEGO SE LLAMA
function saludar(){
  console.log("Saludar");
}

// function sumarIva(){

// }

// function agregarCarritoCompra(){

// }

//No basta con crearla, sino hay que llamarlas
//Llamada de funcion
saludar();

////////////////EJEMPLO APLICADO A FUNCIONES
//Si quiero el nombre de la persona hariamos esto>
// let nombreIngresado = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado); 

// nombreIngresado = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado); 

// nombreIngresado = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado); 

//Ahora con las funciones que pasa?
function solicitarNombre(){
  let nombreIngresado   = prompt("Ingresar nombre")
  alert("El nombre ingresado es " + nombreIngresado)
}

//solicitarNombre(); // Me va a dar 1 nombre. Este es igual a la linea 25
//solicitarNombre(); //Este es igual a la linea 28
//A esta funcion la podes llamar en otro lado de tu codigo o archivo.

//Paramtros
//En el parentesis se pasan los parametros
//Los parametros son informacion que se pasan a la funcion
//Para que quiero los parametros? Para mejorar codigo, funcionalidad y memoria
//Los parametros van dentro de los parentesis

//let nombre = prompt("Ingresar nombre");
//Este prompt lo tienen que cambiar por un ID del html para el input
//let apellido = "Magliaretti"

//Che que parametros tiene esa funcion
//El parametro puede tener  CUALQUIER NOMBRE, pero es ideal ponerle un nombre de acuerdo a la logica
//Cuantos argumentos se puede pasar? 
//Se puede pasar n elementos 
//Pasar como maximo 2 
//Si agrego un argumento en la funcion , se tiene que agregar en el llamado
//Que los parametros se reciben en orden de acuerdo al argumento y no por el nombre del parametro

// function solicitarNombreParam(apellido, nombre){
//   debugger
//   console.log("El nombre ingresado es " + nombre + apellido);
// }

// solicitarNombreParam(nombre, apellido) // Pasale x argumentos 


// let resultado = 0;
// debugger
// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero // 9
//     //resultado = 9
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje)
// }
// //Llamamos primero a sumar y luego a mostrar
// let sumaNumeros = sumar(6, 3);            
// mostrar(resultado); 


function vaso(liquido){
  console.log("Este vaso tiene " + liquido);
}

vaso("Coca");
vaso("Agua");
vaso("Yogurt");







// alert("Vamos a sumar 3 numeros");

// const suma = () => {
//   let a = parseInt(prompt("Ingresa el primer numero"));
//   let b = parseInt(prompt("Ingresa el segundo numero"));
//   let c = parseInt(prompt("Ingresa el tercer numero"));
//   let sumar = a + b + c;
//   return sumar;
// };
// alert(sumar());

// function pais(sudamerica){
//   let paisGanador = "El pais ganador es " + sudamerica;
// }
// pais("Argentina");
// console.log(paisGanador);


const nombre = "John Doe" // variable global

function saludar() {
  //Refactorizamos el nombre de la variable
    let nombre = "Juan Coder" // variable local
    console.log(nombre);
}

//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() ;

///////////////Funciones Anonimas ////////
//Se elimina el nombre de la funcion y se guarda en una variable
//Para ahorrar lineas de codigo, sintaxis mejorada
//Concatenacion de variables
let resultado = 0
function sumar(a, b) {
      return resultado = a + b 
  //     //resultado = 9
}
sumar(6,3);

const sumar = function(a, b) { return a + b; };
sumar(15, 60);

//emsc6.Pregunta de entrevista
//Que ventaja me da arrow function y apartir de que ems esta valido
//Es una mejora de sintaxis en nuestro proyecto, esto hace
//que a la hora de trabajr en equipo , se puede ser mas claro 
//sumandole que en las funciones de orden superior son las que se usan
//EMSC6
//Como se escribe? igual que las anonimas , sacando la palabra funcion y agregandole =>
function sumar(a, b) { return resultado = a + b }

const sumar2 = function(a, b) { return a + b; }; //EMS5.Anonima

//Se reemplaza la palbra funcion y se pone => adelante de los ()
const restar = (a, b) => {return a - b} //EMS6.Flecha
