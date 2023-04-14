/* Validação de login */

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Validação de exemplo (substitua pela validação desejada)
        if (username === "admin" && password === "12345") {
            window.location.href = "./control-panel/control-panel.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
});