// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// añade un nuevo amigo al array de amigos
// se asegura que no este vacio
 
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

// actualiza la vista de la lista de amigos en el DOM, creando elementos <li> 

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

// sortea y muestra un amigo de manera aleatoria
// verifica que la lista no este vacía antes de sortear
// cada nombre sorteado se elimina para que no se repita
 
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  let resultadoHTML = document.querySelector("#resultado");

  if (cantidadAmigos === 0) {
    resultadoHTML.innerHTML = "Ya no quedan amigos por sortear";
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let amigoSorteado = amigos.splice(indiceAmigo, 1)[0];                   // elimina y devuelve el amigo "cortamos elementos"
    resultadoHTML.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    mostrarListaAmigo();                                                     // actualiza la lista visual
  }
}

// agrega nombres con la tecla "enter" "comodidad"
 
document.getElementById("amigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();                                                         // Evita que se refresque la página
    agregarAmigo(); // Llama a la función de agregar
  }
});

