const productos = [
  { nombre: "Remera", valor: 10 },
  { nombre: "Gorra", valor: 20 },
  { nombre: "Zapatilla", valor: 50 },
  { nombre: "Gorra", valor: 300 },
  { nombre: "Ojotas", valor: 23 },
  { nombre: "Monitor", valor: 15 },
];

// Función para mostrar productos
function mostrarProductos(productosFiltrados) {
  const contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = ""; // Limpiar el contenedor
  productosFiltrados.forEach(producto => {
      // Crear el div para el producto con estilo de tarjeta de Bootstrap
      const divProducto = document.createElement("div");
      divProducto.classList.add("card", "m-2");
      divProducto.style.width = "18rem";
      divProducto.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">Valor: ${producto.valor}</p>
              <button class="btn btn-primary" onclick="alert('Producto agregado: ${producto.nombre}')">Agregar al Carrito</button>
          </div>
      `;

      // Añadir el div del producto al contenedor
      contenedor.appendChild(divProducto);
  });
}

// Función para filtrar productos basado en la entrada del usuario
function filtrarProductos() {
  const textoBusqueda = document.getElementById("buscadorProducto").value.toLowerCase();
  debugger
  const productosFiltrados = productos.filter(producto => 
      producto.nombre.toLowerCase().includes(textoBusqueda)
  );
  mostrarProductos(productosFiltrados);
}

// Evento para detectar la entrada del usuario
document.getElementById("buscadorProducto").addEventListener("input", filtrarProductos);



// Inicialmente mostrar todos los productos
mostrarProductos(productos);








