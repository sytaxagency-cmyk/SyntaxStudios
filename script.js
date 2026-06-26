// ===============================
// Syntax Studios - script.js
// ===============================

// Smooth reveal animation
const reveals = document.querySelectorAll(
".card, .project, .about-text, .section-title, .hero-content, #contact"
);

const revealOnScroll = () => {

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < windowHeight - 100){

el.classList.add("show");

}

});

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// Header shadow

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

header.style.boxShadow="0 8px 30px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="none";

}

});


// Active navigation

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;
const height=section.clientHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Button hover animation

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});


// Footer year

const footer=document.querySelector("footer p");

const year=new Date().getFullYear();

footer.innerHTML=`© ${year} Syntax Studios. All Rights Reserved.`;


// Console message 😄

console.log("%cSyntax Studios","color:#4f8cff;font-size:22px;font-weight:bold;");

console.log("Website developed by Syntax Studios");
console.log("Telegram: https://t.me/zahlos");
console.log("Email: sytaxagency@gmail.com");
