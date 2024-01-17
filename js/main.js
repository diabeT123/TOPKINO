const burger = document.querySelector('.header__burger');
const menuPopup = document.querySelector('.menu__popup')
const closeIcon = document.querySelector('.menu__popup-close');
closeIcon.addEventListener('click', ()=>{
    menuPopup.classList.remove('menu__popup-active');

})
burger.addEventListener('click', ()=>{
        menuPopup.classList.add('menu__popup-active');
})