document.addEventListener('DOMContentLoaded', function () {
    // Oculta todos os submenus
    const submenus = document.querySelectorAll('.sidebar ul ul');
    submenus.forEach((submenu) => submenu.classList.add('hidden-menu'));

    // Adiciona um evento de clique aos elementos da lista que possuem submenus
    const toggleElements = document.querySelectorAll('.sidebar li > a');
    toggleElements.forEach((element) => {
        const parentElement = element.parentElement;
        const submenu = parentElement.querySelector('ul');

        if (submenu) {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                submenu.classList.toggle('hidden-menu');
            });
        }
    });
});