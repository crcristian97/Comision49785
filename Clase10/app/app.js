//Para agregar un evento , necesitamos identificar una etiqueta para mandarle el evento

const boton = document.getElementById("btnPrincipal");

/////////OPCION 1//////////////////
//Como se agrega un evento?
//con la propiedad addEventListener
//Le pasamos el evento click, y como 2do parametro una funcion
/*boton.addEventListener("click", respuestaClick);

function respuestaClick(){
  debugger
  console.log("Respuesta del evento");
}*/


/////////////OPCION 2 //////////////////
//boton.onclick = () => { console.log("Respuesta N2 de evento"); };

// const nombreInput = document.getElementById("nombre");
// const edadInput = document.getElementById("edad");

// nombreInput.onkeyup = (e) => {console.log("keyup")}
// edadInput.onkeydown = (e) => {console.log("keydown")};


const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFomulario);

function validarFomulario(e){
  e.preventDefault();
  debugger
  let formulario = e.target
  //Obtengo el valor del primero hijo <input type="text">
  console.log(formulario.children[0].value); 
  //Obtengo el valor del segundo hijo <input type="number"> 
  console.log(formulario.children[1].value);  
}