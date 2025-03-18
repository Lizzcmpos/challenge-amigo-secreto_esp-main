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
        mostrarListaAmigo();                                    //se agregan los datos del form a la lista 
      }
    }
