// 
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.sidebar-container li');

    menuItems.forEach((item) => {
        const anchor = item.querySelector('a');
        if (!anchor) return;

        anchor.addEventListener('click', (event) => {
            event.preventDefault();

            const submenu = item.querySelector('ul');
            if (!submenu) return;

            submenu.classList.toggle('hidden');
        });
    });

    const submenus = document.querySelectorAll('.sidebar-container ul ul');
    submenus.forEach((submenu) => {
        submenu.classList.add('hidden');
    });
});