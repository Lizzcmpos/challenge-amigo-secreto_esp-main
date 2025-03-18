let amigos = [];
/**
 * se definen las funciones
 */
function addFriend() {
    let nameFriend = document.getElementById("friend").value;   //llama el elemento con el id friend, desde el form HTML

    if (nameFriend.trim() === "") {
        alert("Por favor, inserta el nombre de tu amigo");      //Se agrega Validacion para evitar campos 'vacios'
      } else {
        amigos.push(nameFriend);
        document.querySelector("#friend").value = "";
        showListaAmigos();                                    //se agregan los datos del form a la lista 
      }
    }
    
    /**
     * Actualiza la visualización de la lista de amigos en el DOM, creando elementos <li> para cada amigo.
     */
    function showListaAmigos() {
        let listaAmigos = document.querySelector("#listaAmigos");
        listaAmigos.innerHTML = "";
      
        for (let index = 0; index < amigos.length; index++) {
          const element = amigos[index];
      
          let listaHTML = document.createElement("li");
          listaHTML.textContent = element;
          listaAmigos.appendChild(listaHTML);                  //actualiza la lista con los elementos del form y los muestra en la web
        }
      }
      