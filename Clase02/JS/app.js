console.log("Conectado");

//Condicional
//JS lee codigo de arriba hacia abajo
//Cuando hay un condicional se abre la puerta de las oportunidades
//Las oportunidades son los caminios que le voy a decir al usuario que tome

//////////////////IF ELSE ////////////////
//Si (condicion) entonces (va a suceder esto);
//A TENER EN CUENTA QUE LA CONDICION ES DETERMINADA POR TRUE O FALSE
//La estructura inicial. Palabra reservada if , luego parentesis,
//Dentro del parentesis va mi condicion.
//Luego LLAVES y adentro lo que va a suceder.

if(true){
  //bloque de codigo que se va a ejecutar
  console.log("Vas a ver este mensaje");
}

//2do ejemplo
//Este if no es recomendable siempre, pero se usa
if(false){
  console.log("No Vas a ver este mensaje");
}

//Operacion de equivalencia
//el ELSE lo tomo como "sino" hace lo otro
//SIEMPRE SIEMPRE SIEMPRE SIEMPRE SIEMPRE se usa === 
//El == compara solo el valor de la variable 
//El === compara valor y tipo de dato
/*let ingreseNumero = parseInt(prompt("Decime tu edad"));

//Aca ingresas
if(ingreseNumero >= 18){
  //Te redirecciono a la pagina web de compra
  alert("Podes ingresar");
}else {
  //te dejo en la misma pagina sin que puedas ingresar
  //Te muestro con ESTILOS que no podes ingresar
  alert("No pasas");
}*/

//Vimos 3 operadores
// = .Asigna valor a las variables.

// == . Compara el valor del dato.  El usuario me ingreso 6 con string y me va a dar ok.
// if(6 == "6") Esto es true

// === . Compara el TIPO y el VALOR del dato.Aca compara el tipo de dato(boolean, string,number) y el valor
// if(6 === "6") Esto es false

////CREAMOS UN FORMULARIO

/*let nombreIngresado = prompt("Decime tu nombre");

if(nombreIngresado === ""){
  alert("No ingresate nada");
}else {
  alert("Bienvenido " + nombreIngresado);
}*/


//Condiciones anidadas
//En vez de "sino", es un "pero si"
//Se forman con if, else if, else if, else if, else
//Se termina siempre con else 
//En el else if se le pone la condicion

/*
let precio = parseInt(prompt("Cuanto te salio la camisa"));

if( precio > 60000){
  console.log("No te la compro ni a gancho");
} else if(precio < 10000){
  console.log("Mmmmm dejame ver que onda");
} else if(precio === 17000){
  console.log("Venga, dame 1");
}else {
  console.log("No, gracias");
}


let numero = 10;
let esMayor5 = numero > 5; // Esto va a dar true

if (esMayor5) {
    console.log("Verdadero");
}*/


//condicionales &&
//Se tiene que cumplir SI O SI los 2 terminos de las condiciones
/*let nombreIngresado   = prompt("Ingresar nombre"); // 
let apellidoIngresado = prompt("Ingresar apellido"); //  

if((nombreIngresado !== "") && (apellidoIngresado !== "")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}*/

//Operador ||
//Se tiene que cumplir SI O SI uno de los terminos
/*let nombreIngresado   = prompt("Ingresar nombre");
debugger
if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}*/

//Combinacion de Operadores
//Que separa nosotros por terminos.En primer nivel los parentesis, en2do nivel el operador
let nombreIngresado   = prompt("Ingresar nombre"); //Ema

if((nombreIngresado !="") && (nombreIngresado == "EMA") || (nombreIngresado =="ema")){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}





