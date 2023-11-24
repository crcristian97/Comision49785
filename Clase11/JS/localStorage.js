//Llamar al localStorage
//SI O SI usar los 3 metodos
//1)setItem
//2)getItem
//3)clear
//KEY
//VALUE
localStorage.setItem("Bienvenido", "Hola coders");

debugger

localStorage.setItem("EdadProfe", 26);
localStorage.setItem("esMayorEdad", true);

// function enviarLocalStorage({nombre}){
//   localStorage.setItem("usuario", nombre);
// }

//Para obtener los datos utilizao el getItem
//Se le pasa la key para obtener el item
// let nombreUsuario = localStorage.getItem("Bienvenido");
// debugger
// console.log(nombreUsuario);

debugger

//SesionStorage
// sessionStorage.setItem("email", "crcris@gmail.com");

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave: "+ clave);
  console.log("Valor: "+ localStorage.getItem(clave));
}

//Para borrar el el localStorage o sessionStorage hacemos:
localStorage.removeItem("Bienvenido"); //Borra uno especifico y le tenes que pasar la key
localStorage.clear(); //Esto te borra TODO el localStorage


const productos = [
  { nombre: "Remera", valor: 10, descripcion: "Excelente estado", img: "../img/gorra.jpg"},
  { nombre: "Gorra", valor: 20, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Zapatilla", valor: 50, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Gorra", valor: 300, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Ojotas", valor: 23, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Monitor", valor: 15, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
];
//Parsea de un objeto a una cadena de texto
//Se utiliza para enviar datos a un servidor o guardarlos localmente

const cadenaJSON = JSON.stringify(productos);
console.log(cadenaJSON);
localStorage.setItem("PRODUCTOS", cadenaJSON);

