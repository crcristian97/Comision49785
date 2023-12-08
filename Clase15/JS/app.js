// //Linea 1 
// console.log("1 - Inicio del programa");

// // Función asíncrona simulada con setTimeout
// function operacionAsincronica() {
//   //Linea 6
//   console.log("6 - Inicio de la operación asincrónica");
  
//   // Simulamos una operación que toma 2 segundos
//   setTimeout(function() {
//     //Linea 11
//     console.log(" 11 - Fin de la operación asincrónica");
//   }, 2000);

//   clearTimeout();
// }

// // Llamamos a la función asincrónica
// operacionAsincronica();
// //Linea 19
// console.log("19 - Fin del programa");
// const productos = [
//   { nombre: "Remera", valor: 10, descripcion: "Excelente estado", img: "../img/gorra.jpg"},
//   { nombre: "Gorra", valor: 20, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
//   { nombre: "Zapatilla", valor: 50, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
//   { nombre: "Gorra", valor: 300, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
//   { nombre: "Ojotas", valor: 23, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
//   { nombre: "Monitor", valor: 15, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
// ];

// const eventoFuturo = (res) => {
//   return new Promise( (resolve, reject) => {
//       if (res.length > 0) {
//           resolve('Promesa resuelta')
//       } else {
//           reject('Promesa rechazada')
//       }
//   })
// }

// console.log( eventoFuturo(productos) )
// console.log( eventoFuturo(productos) )

// eventoFuturo(true)
//     .then( (response) => {
//         console.log(response)
//     })
//     .catch( (error) => {
//       debugger
//         console.error(error)
//         mostrarMensajeError(error);
//     })

// eventoFuturo(productos)
//     .then( (response) => {
//       debugger
//         console.log(response)
//     })
//     .catch( (error) => {
//         console.log(error) 
//     })

const BD = [
  {id: 1, nombre: 'Producto 1', precio: 1500},
  {id: 2, nombre: 'Producto 2', precio: 2500},
  {id: 3, nombre: 'Producto 3', precio: 3500},
  {id: 4, nombre: 'Producto 4', precio: 3500},
]

const pedirProductos = () => {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(BD)
      }, 3000)
  })
}

let productos = []

const renderProductos = (arr) => {
    // función que genere la vista de los productos
}

// asincrónicamente pedimos los datos y generamos la vista
pedirProductos()
    .then((res) => {
      debugger
        productos = res
        renderProductos(productos)
    })
    .catch( (err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Busqueda finalida")
    })

