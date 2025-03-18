let amigos = [];
/**
 * se definen las funciones
 */
function addFriend() {
    let nameFriend = document.getElementById("friend").value; 

    if (nameFriend.trim() === "") {
        alert("Por favor, inserta el nombre de tu amigo");
      } else {
        amigos.push(nameFriend);
        document.querySelector("#friend").value = "";
        mostrarListaAmigo();
      }
    }
    
    /**
     * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
     */
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
    
    /**
     * Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
     * Verifica que la lista no esté vacía antes de realizar el sorteo.
     */
    function sortearAmigo() {
      let cantidadAmigos = amigos.length;
      if (cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
      } else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
      }
    }