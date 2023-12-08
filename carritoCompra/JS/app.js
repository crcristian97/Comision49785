let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem('carrito'));

// if(carritoStorage.length >= 1){
//   alert("Veni y termina la compra!")
// }else{
// console.log("Siga siga siga")
// }

const productos = [
  { nombre: "Remera", valor: 10, descripcion: "Excelente estado", img: "../img/gorra.jpg"},
  { nombre: "Gorra", valor: 20, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Zapatilla", valor: 50, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Gorra", valor: 300, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Ojotas", valor: 23, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
  { nombre: "Monitor", valor: 15, descripcion: "Excelente estado", img: "../img/gorra.jpg" },
];

function guardarCarritoLocalStorage(){
  //mandar al local
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(nombre, valor) {
  // Swal.fire({
  //   title: "Este producto se va agregar al carrito",
  //   text: "Buena eleccion",
  //   icon: "info",
  //   showCancelButton: true,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "Yes, delete it!"
  // }).then((result) => {
  //   debugger
  //   if (result.isConfirmed) {
  //     Swal.fire({
  //       title: "Se agrego el producto",
  //       icon: "success"
  //     });
  //   }
  // });

  Toastify({
    text: "Producto agregado al carrito",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
  // Agregar producto al array carrito
  carrito.push({ nombre, valor });

  // Actualizar la lista en el modal
  actualizarListaCarrito();

  // Mostrar el modal
  mostrarModal();

  guardarCarritoLocalStorage();
}



function mostrarModal() {
  const modalElement = document.getElementById('carritoModal');
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

function actualizarListaCarrito() {
  const listaCarrito = document.getElementById('listaCarrito');
  listaCarrito.innerHTML = ''; // Limpiar la lista actual

  // Agregar cada producto del carrito a la lista
  carrito.map((producto, index) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML = `
      ${producto.nombre} - Valor: ${producto.valor}
      <span class="fas fa-trash-alt float-right" style="cursor: pointer;" onclick="eliminarDelCarrito(${index})"></span>
    `;
    listaCarrito.appendChild(item);
  });
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1); // Eliminar el elemento del array
  actualizarListaCarrito(); // Actualizar la lista en el modal
  localStorage.clear();
}

function mostrarProductos(productosFiltrados) {
  const contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = ""; // Limpiar el contenedor
  productosFiltrados.forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("card", "m-2");
      divProducto.style.width = "18rem";
      divProducto.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <img src="${producto.img}" class="card-img-top" alt="Imagen de ${producto.nombre}">
              <p class="card-text">Valor: ${producto.valor}</p>
              <button class="btn btn-primary" onclick="agregarAlCarrito('${producto.nombre}', ${producto.valor})">Agregar al Carrito</button>
          </div>
      `;
      contenedor.appendChild(divProducto);
  });
}

function filtrarProductos() {
  const textoBusqueda = document.getElementById("buscadorProducto").value.toLowerCase();
  const productosFiltrados = productos.filter(producto => 
      producto.nombre.toLowerCase().includes(textoBusqueda)
  );
  mostrarProductos(productosFiltrados);
}

document.getElementById("buscadorProducto").addEventListener("input", filtrarProductos);

mostrarProductos(productos);


