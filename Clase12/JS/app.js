// let temperatura = 21

// if( temperatura > 30 ){
//   console.log("Hace calor")
// }
// else{
//   console.log("Esta lindo");
// }


// //la ssintaxys del operador ternario

// // condicion ? caso 1 : caso 2;
// // temperatura > 30 ? console.log("Esta caluroso") : console.log("Dia agradable");

// // let edad = 25;
// // //operador ternario con 3 condiciones
// // let esMayorEdad = (edad>= 18) 
// //   ?  mayorEdad()
// //   : (edad < 0) ? edadInvalida()
// //   : menorEdad()

// // function mayorEdad(){
// // }

// // function edadInvalida(){
// // }

// // function menorEdad(){
// // }

// // const usuario = {
// //   nombre : "Cristian",
// //   edad: 26
// // }

// /* ESTO SE VA A REFACTORIZAR
// let permiso

//   if (usuario.edad >= 18) {
//     permiso = true
//   } else {
//     permiso = false
//   }

//   if (permiso) {
//     alert("Puede comprar cerveza")
//   } else {
//     alert("No puede comprar")
//   }
// */

// // const permiso = (usuario.edad >= 18) ? true : false;

// // permiso ? console.log("Podes compar cerveza") : console.log("No puedes comprar cerveza");

// //Operador logicos and

// // const usuario = {
// //   nombre: "John Doe",
// //   edad: 14
// // }
// // const registroIngreso = usuario.edad >= 18 && new Date();

// // console.log(registroIngreso) // FALSE



// //Operador Nullish o de fusion nula ?? 

// // let nombreUsuario = null;
// // let nombreMostrar = nombreUsuario ?? "Invitado";

// // console.log(nombreMostrar); 

// //const usuario = null

// //console.log( usuario.nombre || "El usuario no existe" );
// // Error: "No se pueden leer propiedades de NULL"

// //console.log( usuario?.nombre || "El usuario no existe");
// //FORMULA DE LA DESESTRUCTURACION
// //let { prop1 , prop2 } = objecto;

// // const usuario = {
// //   nombre: "John Doe",
// //   edad: 32,
// //   telefono: {
// //       cel: 113334444,
// //       casa: null,
// //       trabajo: 113325555
// //   }
// // }

// // const { nombre , edad, telefono: { trabajo, cel , casa } } = usuario;

// // console.log(nombre);
// // console.log(edad);
// // console.log(trabajo);


// // const item = {
// //   item_id: 432,
// //   product_name: "Some product",
// //   price_per_unit: 5600
// // }

// // const { item_id: id, product_name: nombreProducto , price_per_unit: precioProducto } = item;

// // if(nombreProducto){
// //   console.log("El nombre existe");
// // }

// const producto = {
//   id: 10,
//   curso: "Javascript",
//   precio: 123000,
//   profesor: true
// }

// /*
// const desestructuracion = (item) => {
//   //desestructurar dentro del bloque
//   const { id, curso, precio } = item;
// }
// */

// const desestructuracion = ({ id, curso, precio, profesor }) => {
//   //desestructurar dentro del bloque
//   if(curso === "Javascript") {

//   }
//   if(profesor){

//   }
// }

// desestructuracion(producto);

// const nombre = ["Juan", "Julieta", "Lilaj", "Carlos"];
// //POR POSICION
// const [ , , b , c, e ] = nombre;

// const comision4444 =[
//   {nombre: "Antonela", rol: "alumno"},
//   {nombre: "Diego", rol: "alumno"},
//   {nombre: "Javier", rol: "alumno"},
//   {nombre: "Cristian", rol: "profesor"},
// ]

// let alumnosComision = [];

// comision4444.map(alumno => {
//   if(alumno.rol === "alumno"){
//     alumnosComision.push(alumno);
//   }
// })
// debugger
// const comisionNueva = {
//   ...alumnosComision
// }

// console.log(comisionNueva);

const usuario1 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript"
}
// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
  ...usuario1
}
//Aca se agrega la propiedad email y se reemplaza la propiedad curso
const usuario3 = {
  ...usuario1,
  curso: "ReactJS",
  email: "juan@doe.com"
}

console.log(usuario3)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }


function saludar(nombre, nombre2, nombre3){
  if(nombre2 === undefined){
    console.log("Saludar a ", nombre);
  }else {
    console.log("Saludar a " +  nombre + "y a" + nombre2);
  }
}

function saludar(...nombres){
  console.log(nombres);
}

//boton de la pagina principal
saludar("Cristian");
//boton de la pagina secundaria
saludar("Gonzalo", "Lautaro");
//boton de la pagina footer
saludar("Gonzalo", "Lautaro", "Jeiker");
saludar("Gonzalo", "Lautaro", "Jeiker","Craken");