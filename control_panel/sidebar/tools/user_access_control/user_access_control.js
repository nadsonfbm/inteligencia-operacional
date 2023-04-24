document.addEventListener("DOMContentLoaded", function () {
    // Obter elementos necessários
    const newUserBtn = document.querySelector(".new-user-button");
    const modal = document.querySelector("#new-user-modal");
    const closeBtn = document.querySelector(".close");
    const newUserForm = document.querySelector("#new-user-form");

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

    newUserBtn.addEventListener("click", openModal);

    closeBtn.addEventListener("click", closeModal);

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
        closeModal();
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

function openModal() {
    const modal = document.querySelector("#new-user-modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.querySelector("#new-user-modal");
    modal.style.display = "none";
}

function createUser() {
    // Aqui você pode enviar os dados do formulário para o servidor e criar o novo usuário
}
