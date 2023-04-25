document.addEventListener("DOMContentLoaded", function () {
    // Obter elementos necessários
    const newUserBtn = document.querySelector(".new-user-button");
    const modal = document.querySelector("#new-user-modal");
    const closeBtn = document.querySelector(".close");
    const newUserForm = document.querySelector("#new-user-form");

    // Função para adicionar um usuário à tabela HTML
    function addUserToTable(user) {
        const table = document.querySelector(".table tbody");
        const newRow = table.insertRow();

        const checkboxCell = newRow.insertCell(0);
        const idCell = newRow.insertCell(1);
        const usernameCell = newRow.insertCell(2);
        const firstnameCell = newRow.insertCell(3);
        const lastnameCell = newRow.insertCell(4);
        const emailCell = newRow.insertCell(5);
        const lastLoginCell = newRow.insertCell(6);
        const activeCell = newRow.insertCell(7);
        const actionsCell = newRow.insertCell(8);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkboxCell.appendChild(checkbox);

        idCell.textContent = user.id;
        usernameCell.textContent = user.username;
        firstnameCell.textContent = user.firstname;
        lastnameCell.textContent = user.lastname;
        emailCell.textContent = user.email;
        lastLoginCell.textContent = user.lastLogin;
        activeCell.textContent = user.active ? "Sim" : "Não";

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        actionsCell.appendChild(deleteButton);
    }


    // Array para armazenar os usuários
    const users = [];

    newUserBtn.addEventListener("click", openModal);

    closeBtn.addEventListener("click", closeModal);

    newUserForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newFirstname = document.getElementById("new-user-firstname").value;
        const newLastname = document.getElementById("new-user-lastname").value;
        const newEmail = document.getElementById("new-user-email").value;
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;

        const newUser = {
            id: users.length + 1,
            firstname: newFirstname,
            lastname: newLastname,
            email: newEmail,
            username: newUsername,
            password: newPassword,
            lastLogin: "N/A", // Altere isso para a data de login real
            active: true,
        };

        // Adicionar novo usuário ao array de usuários
        users.push(newUser);

        // Adicionar novo usuário à tabela
        addUserToTable(newUser);

        // Limpar o formulário
        newUserForm.reset();
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

// Função modificada para lidar com o clique no cabeçalho da tabela
function handleHeaderClick(event) {
    const header = event.target;
    const sortKey = header.dataset.sort;
    const currentDirection = header.dataset.sortDirection;

    if (sortKey) {
        users.sort((a, b) => {
            if (currentDirection === "asc") {
                return a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0;
            } else {
                return a[sortKey] < b[sortKey] ? 1 : a[sortKey] > b[sortKey] ? -1 : 0;
            }
        });

        // Atualizar a direção de classificação
        header.dataset.sortDirection = currentDirection === "asc" ? "desc" : "asc";

        // Limpar a tabela e adicionar novamente os usuários
        const table = document.querySelector(".table tbody");
        table.innerHTML = "";

        users.forEach((user) => {
            addUserToTable(user);
        });
    }
}

// Adicionar event listeners para os cabeçalhos da tabela
document.querySelectorAll(".sortable").forEach((header) => {
    header.addEventListener("click", handleHeaderClick);
});

function updateTable(sortedUsers) {
    const table = document.querySelector('.table tbody');
    table.innerHTML = '';

    sortedUsers.forEach((user) => {
        const newRow = table.insertRow();

        const idCell = newRow.insertCell(0);
        const usernameCell = newRow.insertCell(1);

        idCell.textContent = user.id;
        usernameCell.textContent = user.username;
    });
}