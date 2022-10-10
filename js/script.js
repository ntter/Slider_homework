let slides = document.getElementsByClassName("project__image__body");
let info = document.getElementsByClassName("completed__projects__info");
let navlinks = document.getElementsByClassName("project__navigation__item");
let navlinks2 = document.getElementsByClassName("completed__projects__navigation-list__item");
let currentSlide = 0;

document.getElementById("nav__button__next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav__button__previous").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

document.getElementById('nav__button__previous__button').addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});
document.getElementById('nav__button__next__button').addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    info[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    navlinks2[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    info[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    navlinks2[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}
// let autoSlide = setInterval(function(){
//     document.getElementById('nav__button__next__button').click();
// }, 3000);

// let stopInterval = document.getElementById("completed__projects");

// stopInterval.addEventListener("mouseover", function(){ clearInterval(autoSlide)});
// stopInterval.addEventListener("mouseout", function(){
//     setInterval(() => {
//         document.getElementById('nav__button__next__button').click();
//     }, 3000);
    
// });

document.querySelectorAll('.project__navigation__item').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})
document.querySelectorAll('.completed__projects__navigation-list__item').forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        if (currentSlide !== tabIndex) {
            changeSlide(tabIndex);
        }
    })
})