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
    