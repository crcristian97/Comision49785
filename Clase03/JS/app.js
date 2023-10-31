console.log("Conectado");

//Ciclos

//3 tipos de ciclo

//Ciclo for
//Como se construye el ciclo for?

/*
for(desde; hasta; actualizacion){
  //aca lo uqe querramos ejecutar
}

*/
//El let i = 0. Siempre tiene que ser i o index
//Condicion importante porque es lo que te va hacer frenar el ciclo
//El i++ te suma en este 1 a la variable previa
// for(let i = 0; i < 10; i++){
//   console.log(i);
// }

/*let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) { 
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}*/

//IMPORTANTE: 
//LA CONDICION, esto hace que o genere un bucle infinito, o se termine el ciclo

/*for (let i = 0; i <= 20; i++) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre"); 
  // Informamos el turno asignado usando el número de repetición (i).
  alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}*/

//La sentencia BREAK hace que el codigo se pare ANTES DE QUE termine tu condicion 
//La sentencia continue te salta la condicion que vos le pongas.Usa la palabra reservada continue
/*for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 interrumpo el for. 
  if(i === 5){
      continue; 
  }
  alert(i);
}*/
//Nuevo ciclo > while
/*
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}*/

// Es que en el do lo que se pone adentro se hace SI O SI
//El while te genera la condicion para romper el ciclo
// let repetir = false;
// do{
//   console.log("¡Solo una vez!");
// }while(repetir)


/*let numero = 0;
do{
    //El do lo que hace es que la condicion dentro del do se hace si o si
    //AL MENOS 1 VEZ
    //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));*/

//DIFERENCIA ENTRE DO..WHILE y WHILE
//do..while = se ejecuta si o si una vez y después si no se cumple es como el break del for
//En cambio el while primero mira la condición y entonces tal vez se ejecuta y tal vez no se ejecuta 


//SWITCH ES MUY PARECIDO A IF ELSE
//switch tiene 3 palabras reservadas: case, break, default. ESTRUCTURA SI O SI
//En cada case se pone BREAK;
//En el default tambien se pone BREAK,
let entrada = prompt("Decime que dia es");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "Lunes":
            alert("HOLA Lunes");
            break;

      case "Martes":
            alert("HOLA Martes");
            break;

      case "Miercoles":
        alert("HOLA Miercoles");
        break;

        case "Jueves":
          alert("HOLA Jueves");
          break;
       default:
           alert("¿es sabado?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}


