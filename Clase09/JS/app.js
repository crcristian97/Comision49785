//Que es dom?
//Identificame los nodos texto y nodo elementos
//En esta estructura html, identificame el nodo padre y nodo hijo.

//nodo elemento = etiqueta, nodo texto = texto entre etiquetas
//nodo elemento = p, article, h2 . nodo texto = Comision 4889762

// console.dir(document.activeElement)
// console.dir(document.body)
// console.dir(document.head)

// console.log(document)
// console.log(document.body)
// console.log(document.head)



//CODIGO JS
// let div     = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");


// const usuario = document.getElementById("usuario");
// const email = document.getElementById("email");
// const pass = document.getElementById("pass");
// // console.log(usuario);
// // console.log(email);
// // console.log(pass);
// let paises = document.getElementsByClassName("paises");
// debugger
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// function campeonMundial(){

// }

// if(paises[0].innerHTML === "AR"){
//     console.log("Sos campeon del mundo");
//     campeonMundial()
// }

// let titulo = document.getElementById("titulo");
// console.log( titulo.innerText );
// debugger
// // cambio el contenido del elemento
// titulo.innerText = "Hola Coder!";
// console.log( titulo.innerText );

// const container = document.getElementById("carrito");
// // cambio el código HTML interno
// const zapatillas = {
//     titulo : "Nike"
// }
// //Lorem ipsum por la propiedad del objecto
// container.innerHTML = `<div className>Carrito de compra
//                         <p>${zapatillas.titulo}</p>
//                         <p>Lorem ipsum</p>
//                         </div>
//                         `

// //para crear un elemento html parrafo
// let parrafo = document.createElement('p');
// parrafo.innerHTML = `<h2 className=alertaMensaje>¡Hola Coder!</h2>`;
// // Añadir el nodo Element como hijo de body
// document.body.append(parrafo);

debugger
// document.getElementById("nombre").value = "HOMERO";
// document.getElementById("edad").value   = 39;


let padre = document.getElementById("personas");
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
debugger
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}