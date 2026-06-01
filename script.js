const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }
    });
});

function revealElements(){

    const reveals = document.querySelectorAll(
        ".skill-card,.project-card,.timeline-item,.stat-card"
    );

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            element.classList.add("active");
            element.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

const roles = [
    "Software Developer",
    "Data Analyst",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-content h2");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        roleElement.textContent =
            roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);
    }
    else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

window.onload = () => {

    roleElement.textContent = "";

    typeEffect();

    revealElements();
};