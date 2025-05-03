// Espera a que todo el contenido HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // Muestra un mensaje en la consola del navegador para confirmar que el script se cargó
    console.log("Script cargado correctamente. ¡Listo para interactuar!");

    // Obtiene referencias a los elementos HTML con los que interactuaremos
    const miBoton = document.getElementById('miBoton');
    const mensajeElemento = document.getElementById('mensaje');

    // Verifica si el botón existe en la página antes de añadir el listener
    if (miBoton) {
        // Añade un "escuchador de eventos" que se activará cuando se haga clic en el botón
        miBoton.addEventListener('click', function() {
            console.log("Botón presionado!"); // Mensaje en consola al hacer clic

            // Muestra el mensaje oculto eliminando la clase 'oculto'
            if (mensajeElemento) {
                mensajeElemento.classList.remove('oculto');

                // Opcional: Oculta el mensaje de nuevo después de unos segundos
                setTimeout(function() {
                    mensajeElemento.classList.add('oculto');
                }, 3000); // 3000 milisegundos = 3 segundos
            }
        });
    } else {
        console.error("Error: No se encontró el elemento con ID 'miBoton'.");
    }

});