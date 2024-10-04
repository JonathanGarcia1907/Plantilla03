document.addEventListener("DOMContentLoaded", function () {
    const validUsername = "jota";
    const validPassword = "dejame";
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");
    const loginCard = document.getElementById("loginCard");
    const mainContent = document.getElementById("mainContent");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir envío del formulario

        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        // Verificar que el nombre de usuario tenga al menos 3 caracteres
        if (usernameValue.length < 3) {
            alert("El nombre de usuario debe tener al menos 3 caracteres.");
            return;
        }

        // Deshabilitar los campos mientras se procesa el login
        usernameInput.disabled = true;
        passwordInput.disabled = true;
        loginForm.querySelector('input[type="submit"]').disabled = true;

        // Comprobar las credenciales
        if (usernameValue === validUsername && passwordValue === validPassword) {
            // Mostrar mensaje de bienvenida
            loginMessage.innerText = "¡Bienvenido!";

            // Esperar 2 segundos antes de mostrar el contenido principal
            setTimeout(function () {
                loginCard.style.display = "none"; // Ocultar la tarjeta de login
                mainContent.style.display = "block"; // Mostrar el contenido principal
            }, 2000);
        } else {
            // Mostrar mensaje de error
            loginMessage.innerText = "Credenciales incorrectas.";
            loginForm.reset(); // Limpiar el formulario

            // Volver a habilitar los campos
            usernameInput.disabled = false;
            passwordInput.disabled = false;
            loginForm.querySelector('input[type="submit"]').disabled = false;
        }
    });
});