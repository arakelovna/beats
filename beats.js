let burger = document.querySelector("#hamburger");
let overlay = document.querySelector ("#overlay");
let plankRight = document.querySelector ("#plank-right");
let plankLeft = document.querySelector ("#plank-left");
let plankHide= document.querySelector ("#plank-hide");

let links = document.querySelectorAll (".menu__link");

links.forEach(function(element) {
    element.addEventListener("click", toggleMenu);
});


burger.addEventListener("click", toggleMenu) ;

function toggleMenu () {
   
    overlay.classList.toggle ("overlay--active");
    plankRight.classList.toggle ("hamburger__plank--right");
    plankLeft.classList.toggle ("hamburger__plank--left");
    plankHide.classList.toggle ("hamburger__plank--hide");
};


