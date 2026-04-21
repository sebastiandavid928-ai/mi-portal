document.addEventListener("DOMContentLoaded", function() {
    
    // Obtenemos el formulario y si existe, le aplicamos la lógica
    const formulario = document.getElementById("formularioContacto");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Prevenir que la página se recargue
            evento.preventDefault();

            // Variables de validación (asumimos que todo es válido inicialmente)
            let esValido = true;

            // Obtener los valores y los contenedores de error
            const nombre = document.getElementById("nombre").value.trim();
            const errorNombre = document.getElementById("errorNombre");

            const email = document.getElementById("email").value.trim();
            const errorEmail = document.getElementById("errorEmail");
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo válido

            const motivo = document.getElementById("motivo").value;
            const errorMotivo = document.getElementById("errorMotivo");

            const mensaje = document.getElementById("mensaje").value.trim();
            const errorMensaje = document.getElementById("errorMensaje");

            const terminos = document.getElementById("terminos").checked;
            const errorTerminos = document.getElementById("errorTerminos");

            // Ocultar mensaje de éxito previo si lo hubiera
            const mensajeExito = document.getElementById("mensajeExito");
            mensajeExito.classList.add("d-none");

            // 1. Validar Nombre (Mínimo 3 caracteres)
            if (nombre.length < 3) {
                errorNombre.classList.remove("d-none");
                esValido = false;
            } else {
                errorNombre.classList.add("d-none");
            }

            // 2. Validar Email
            if (!emailRegex.test(email)) {
                errorEmail.classList.remove("d-none");
                esValido = false;
            } else {
                errorEmail.classList.add("d-none");
            }

            // 3. Validar Select
            if (motivo === "") {
                errorMotivo.classList.remove("d-none");
                esValido = false;
            } else {
                errorMotivo.classList.add("d-none");
            }

            // 4. Validar Mensaje (Mínimo 20 caracteres)
            if (mensaje.length < 20) {
                errorMensaje.classList.remove("d-none");
                esValido = false;
            } else {
                errorMensaje.classList.add("d-none");
            }

            // 5. Validar Checkbox
            if (!terminos) {
                errorTerminos.classList.remove("d-none");
                esValido = false;
            } else {
                errorTerminos.classList.add("d-none");
            }

            // Resultado Final
            if (esValido) {
                // Mostrar mensaje de éxito (Sin usar alert)
                mensajeExito.classList.remove("d-none");
                // Limpiar el formulario
                formulario.reset();
            }
        });
    }
});