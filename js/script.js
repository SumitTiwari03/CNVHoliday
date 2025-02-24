
let navbar = document.querySelector(".cv-navbar");

// sidebar open close javascript code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".cv-navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close javascript code
let mrArrow = document.querySelector(".mr-arrow");
mrArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let mfArrow = document.querySelector(".mf-arrow");
mfArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let maArrow = document.querySelector(".ma-arrow");
maArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}