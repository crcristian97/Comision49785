//Que es un objecto

//son estructuras que podemos definir para agrupar
//propiedad y valor
//definimos la variable, palabra del objecto y llaves
//Se puede modificar su propiedad y valor

// const persona = {
//   //Propiedad es nombres y valor Cristian
//   nombre : 'Manuel',
//   apellido: 'Carranza',
//   email: 'cc@gmail.com',
//   password: 'password',
//   alumno: true,
//   tutor: "Lautaro amengual",
//   edad: 26,
// }
//console.log("Manu aca es alumno" , persona);
//Obtener los valores. 1er forma de objeter valores
//console.log(persona.alumno);
//2da forma de obtener valores.Corchete, comillas y la propeidad
//console.log(persona["nombre"]);

//Modificar una propiedad de acuerdo a las especificaciones
//persona.alumno = false;
//persona.tutor = true;
//console.log("Manu aca es tutor" , persona);

//Puede crear una funcion que me modifique a manu para que sea tutor

// function promocion(persona) {
// //Aca armo la logica para que manu sea tutor
// //Cambiar el alumno por false
// //Preguntar si persona.alumno es false
// return persona.tutor = true;
// }
// promocion(persona);

// console.log(persona);

//CONSTRUCTORES
//Para crear objectos
//Palabra function seguido del nombre Mayuscula,parentesis y corchetes



 function Persona(nombre, apellido, email, password, alumno, tutor, edad){
   this.nombre = nombre;
   this.apellido = apellido;
   this.email = email;
   this.password = password;
   this.alumno = alumno;
   this.tutor = tutor;
   this.edad = edad;
 }

//Para crear nuevos objectos se hace, una constantes con el nombre y palabra NEW haciendo referencia al constructor
//EN ORDEN DE ACUERDO A LOS PARAMETROS
 const persona1 = new Persona("Esteban", "Villagra", "crcr@gmail.com", 12334, true, false, 25);
 const persona2 = new Persona("Pablo", "Diaz", "diazcrack@gmail.com", 12334, true, false);

// console.log(persona1);
// console.log(persona2);

// function Persona12(literal) {
//   debugger
//   this.nombre = literal.nombre;
//   this.edad   = literal.edad;
//   this.calle  = literal.calle;
// }
// const persona12 = new Persona12({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });

// console.log(persona12);


// let cadena = "HOLA CODER";
// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());

// function Persona(nombre, edad, calle) {
//   debugger
//   this.nombre = nombre;
//   this.edad   = edad;
//   this.calle  = calle;
//   this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// debugger
// persona1.hablar();

//IN y FOR...IN
//El operador in devuelve TRUE si la propiedad existe en el objecto
//El bucle for....in permite acceder a todas las propiedades del objecto

//De esta 

function PersonaUno(literal) {    
  this.nombre = literal.nombre;
  this.edad   = literal.edad;
  this.calle  = literal.calle;
  this.hablar = function() { }// logica de la funcion
}
const personaUno = new PersonaUno({ nombre: "Homero", edad: 24, calle: "Av.Siempreviva 742" });
personaUno.hablar();
//Pasamos a esta 
class PersonaTwo {
  constructor(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
  }
  hablar(){

  }
}
const personaTwo = new PersonaTwo({ nombre: "Homero", edad: 24, calle: "Av.Siempreviva 742" });
personaTwo.hablar()
// function persona()

// const personaUno = new Persona({ nombre: "Homero", edad: 24, calle: "Av.Siempreviva 742" });

// //console.log( "nombre" in personaUno);
// //Devuelve true o false
// // if("edad" in personaUno > 18){
// //   console.log("Podes entrar");
// // }
// //la palabra propiedad puede elegir cualquier cosa, pero es recomendable 
// //estar siempre alineado al objecto
// //se utiliza la palabra for...in
// for (const propiedad in personaUno){
//   console.log(personaUno[propiedad]);
//   if(personaUno[propiedad] === "Homero"){
    
//   }
// }

// class Producto {
//   constructor(nombre, precio) {
//       this.nombre  = nombre.toUpperCase();
//       this.precio  = parseFloat(precio);
//       this.vendido = false;
//   }
//   sumaIva() {
//       this.precio = this.precio * 1.21;
//   }
//   vender() {
//       this.vendido = true;
//   }
// }
// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");
// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();



