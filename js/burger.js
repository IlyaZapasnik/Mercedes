const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
};

burger.addEventListener('click', () => {
    toggleMenu();
});

menuItem.forEach(elem => {
    elem.addEventListener('click',() => {
        menuElem.classList.remove('menu-active');
        burger.classList.remove('humburger-menu-active');
    });
});

//menu menu-active
//menu-list__link