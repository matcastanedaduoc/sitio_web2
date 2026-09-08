document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formularioRegistro");
    const mensajeError = document.getElementById("mensajeError");
    const mensajeExito = document.getElementById("mensajeExito");


    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 

        mensajeError.textContent = "";
        mensajeExito.textContent = "";


        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (nombre === "" || email === "" || password === "" || confirmPassword === "") {
            mensajeError.textContent = "Error: Todos los campos son obligatorios.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            mensajeError.textContent = "Error: Ingrese un correo electrónico válido (ejemplo@dominio.com).";
            return;
        }

        if (password.length < 6) {
            mensajeError.textContent = "Error: La contraseña debe tener al menos 6 caracteres.";
            return;
        }

        if (password !== confirmPassword) {
            mensajeError.textContent = "Error: Las contraseñas no coinciden.";
            return;
        }

        mensajeExito.textContent = "¡Registro exitoso! Tus datos han sido procesados.";
        formulario.reset(); 
    });
});