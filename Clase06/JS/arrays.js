//Array es una conjunto de datos
//van desde el 0 al n.IMPORTANTE ARRANCA EN 0
//Declaracion de Array
//Creamos una constante o let luego el nombre y lo asignamos con corchetes
const array = [];

//ELEMENTO:        0          1       2        3          4         5                  
//const alumnos = ["Amador", "Lilaj", "Luna", "Cristian", "Samu", "Gonzalo"];
const sumaTotalProductos = [400, 300, 20, 75];
const isAdmin = [true, false];
const productos = [
  { nombre: "Nike", precio: 35, descripcion: "Las mejores zapas"},
  { nombre: "Remera Jordan", precio: 435, descripcion: "Las mejores Remeras"},
  { nombre: "Adidas", precio: 325, descripcion: "Buena tela"},
  { nombre: "Gorra", precio: 335, descripcion: "Las mejores gorras"},
];

/*console.log(array);
console.log(alumnos);
console.log(sumaTotalProductos);
console.log(isAdmin);
console.log(productos);*/

//Para acceder al elemento del array se utiliza el nombre de la constante y el corchete
//console.log("Este sacamelo de aca: " , alumnos[3]);
//Asi se accede a una propiedad de un objeto de un array
//console.log("Este cambiale el precio" , productos[0].precio);



//METODOS DE ARRAYS
//LENGHT te permite reccorer todo el array

// const numeros = [1, 2, 3, 4, 5];
// for (let index = 0; index < numeros.length; index++) {
//     alert(numeros[index]);
// }

//METODO PUSH te permite agregar un elemento al array
//el push te agrega el producto al final
//unshift al principio

// const alumnos = ["Amador", "Lilaj", "Luna", "Cristian", "Samu", "Gonzalo"];
// debugger;
// alumnos.push("Justinee");
// alumnos.unshift("Emanuel");

//Para eliminar elemntos del array usamos
//metodos shift() elimina el primer elemento
//metodo pop() que te elimina el ultimo elemento
// const alumnos = ["Amador", "Lilaj", "Luna", "Cristian", "Samu", "Gonzalo"];
// console.log(alumnos);
// debugger
// alumnos.shift();
// console.log(alumnos);
// alumnos.pop();
// console.log(alumnos);

//Para eliminar 1 o varios elementos de un array
//El metodo splice se le pasa 2 parametros
//El 1er parametro es el indice donde se ubica el metodo
//El 2er parametro es la cantidad de elementos a eliminar
// const alumnos = ["Amador", "Lilaj", "Luna", "Cristian", "Samu", "Gonzalo"];
// alumnos.splice(3, 1);
//Aca eliminamos al profesor
// console.log(alumnos);

//Join, generar un string con todos lso elementos del array

// const nombres = ["Luis", "Ana", "Julia", "Juan"]
// debugger
// console.log( nombres.join(", ") ) 

// console.log( nombres.join("*") ) 

// const sociedad = ["S.A", "Cristian", "RLS"];
// sociedad.pop();
// sociedad.join(" ");
// console.log( sociedad);

//Concat 
//Te unifica 2 arras en 1 solo
// const perros   = ["Pupy", "Ronnie"];
// const gatos = ["Mishi", "Garfield", "Zuri"];
// const pajaros = ["Carpintero", "Tero"];
// const mascotas = perros.concat(gatos).concat(pajaros);
// console.log(mascotas);

//Slice: devuelve una COPIA del array dentro de un nuevo array
//2 parametros

// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3);
// debugger
// console.log(nombres);

//INMUTABILIDAD

//IndexOf te retorna la posicion del valor en el array
//googlear , indexoF ejemplo en array de objectos
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log(nombres.indexOf("Vanesa"));
console.log(nombres.indexOf("Cristian"));


//jeiker va a ser mi usuario

let sociedad = ["ARG", "Cristian", "Micheetii", "Carlos"];

//Una forma para saber si el elemento esta en mi array y si no esta lo pusheo
// if(sociedad.indexOf("Administracion") === -1){
//   sociedad.push("Administracion");
//   console.log(sociedad);
// }else{
//   alert("Esa sociedad existe");
// }


// if(sociedad.includes("Administracion") === true){
//   alert("Esa sociedad existe");
// }else{
//   sociedad.push("Administracion");
//   console.log(sociedad);
// }


// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// debugger
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));

//Array de objetos
//Corchetes, llaves , propiedad valor , separados por coma

// const camisa = {
//   nombre: "camisa", 
//   precio: 35, 
//   descripcion: "Las mejores zapas"
// }
// //Desestructuracion 
// camisa.descripcion = "Buena camisa";
// camisa.precio = 3600;
// camisa.nombre = 3600;

// let { descripcion, precio, nombre } = camisa;

//LEAN DESETRUCTURACION DE OBJETOS Y PARA QUE SIRVE


const productosTienda = [
  { nombre: "Nike", precio: 35, descripcion: "Las mejores zapas", stock: 2},
  { nombre: "Remera Jordan", precio: 435, descripcion: "Las mejores Remeras"},
  { nombre: "Adidas", precio: 325, descripcion: "Buena tela"},
  { nombre: "Gorra", precio: 335, descripcion: "Las mejores gorras"},
];

productosTienda.push({ nombre: "Remera", precio: 450, descripcion: "Buena remera"});

for(const producto of productosTienda){
  if(producto.stock > 1){
    //MOSTRAME EL PRODUCTO EN EL FRONT
  }else {
    //No me mostres el producto
  }
}