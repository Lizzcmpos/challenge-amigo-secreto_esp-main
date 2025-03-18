# Gestión de Amigos y Sorteo de Amigo Secreto

Este proyecto implementa una sencilla aplicación web que permite gestionar una lista de amigos y realizar un sorteo aleatorio para elegir a un "amigo secreto".

## Características

1. **Añadir amigos**:
   - Permite agregar el nombre de un amigo ingresado a través de un formulario.
   - Valida que no se ingresen nombres vacíos.

2. **Mostrar lista de amigos**:
   - Actualiza dinámicamente la lista en el DOM.
   - Los nombres de los amigos se presentan en un formato de lista ordenada.

3. **Sorteo aleatorio de amigo**:
   - Realiza un sorteo para seleccionar un amigo de manera aleatoria.
   - Incluye una validación para asegurarse de que la lista no esté vacía antes de realizar el sorteo.

## Uso

1. **Agregar un amigo**:
   - Llena el campo del formulario con el nombre de tu amigo y haz clic en el botón "Agregar amigo". El nombre será añadido automáticamente a la lista.

2. **Mostrar la lista de amigos**:
   - Cada vez que agregues un amigo, la lista será actualizada automáticamente en la página.

3. **Sortear amigo secreto**:
   - Haz clic en el botón de sorteo para seleccionar a un amigo de la lista de manera aleatoria. El nombre del amigo secreto aparecerá en el área designada.

## Estructura del Código

### Función `addFriend()`
- Obtiene el nombre del amigo ingresado desde el campo de formulario HTML.
- Valida el nombre para evitar campos vacíos y lo agrega al array `amigos`.
- Llama a `showListaAmigos()` para actualizar la lista en la interfaz.

### Función `showListaAmigos()`
- Vacía y actualiza dinámicamente la lista de amigos en el DOM.
- Crea elementos `<li>` para cada amigo en la lista.

### Función `sortearAmigo()`
- Valida que el array `amigos` no esté vacío antes de proceder.
- Selecciona aleatoriamente a un amigo utilizando la función `Math.random` y muestra el resultado en el DOM.

## Requisitos

Este proyecto utiliza JavaScript para gestionar las interacciones y actualizaciones en el DOM. Asegúrate de tener:
- Un archivo HTML con los elementos necesarios, como un formulario de entrada, una lista para los amigos y un área para mostrar el resultado del sorteo.

¡Disfruta utilizando la aplicación para sortear tu amigo secreto!
