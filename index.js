document.addEventListener("DOMContentLoaded", function () {
    // ...

    // Função para adicionar um usuário à tabela HTML
    function addUserToTable(id, username) {
        const table = document.querySelector(".table tbody");
        const newRow = table.insertRow();
        
        const idCell = newRow.insertCell(0);
        const usernameCell = newRow.insertCell(1);
        
        idCell.textContent = id;
        usernameCell.textContent = username;
    }

    // Array para armazenar os usuários
    const users = [];

    // Adicionar evento de submit para o formulário de novo usuário
    newUserForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;

        // Adicionar novo usuário ao array de usuários
        const userId = users.length + 1;
        users.push({ id: userId, username: newUsername, password: newPassword });

        // Adicionar novo usuário à tabela HTML
        addUserToTable(userId, newUsername);

        // Fechar modal
        modal.style.display = "none";
    });

    // ...

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Validação usando o array de usuários
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem("isLoggedIn", true);
            window.location.href = "./control_panel/control_panel.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
});
