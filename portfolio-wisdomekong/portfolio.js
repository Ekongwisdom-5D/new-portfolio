// =========================================
// TYPING ANIMATION
// =========================================

const words = [
    "Front-End Developer",
    "HTML Expert",
    "CSS Designer",
    "JavaScript Developer",
    "Responsive Web Designer",
    "Creative Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && letterIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================================
// NAVBAR BACKGROUND ON SCROLL
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "0 10px 25px rgba(0,255,255,.2)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});


// =========================================
// ANIMATED COUNTERS
// =========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = Math.ceil(target / 80);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(update, 25);

        } else {

            counter.innerText = target;

        }

    };

    update();

});


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const reveals = document.querySelectorAll(
".about,.skills,.services,.projects,.stats,.contact"
);

window.addEventListener("scroll", revealSections);

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

revealSections();


// =========================================
// MOBILE MENU
// =========================================

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("show");

});


// =========================================
// SMOOTH ACTIVE NAV LINKS
// =========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================================
// BACK TO TOP BUTTON
// =========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// =========================================
// BUTTON RIPPLE EFFECT
// =========================================

const buttons = document.querySelectorAll(".btn,.btn2,.project-btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});
