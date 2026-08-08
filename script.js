
// Yiang Website Interaction Script


document.addEventListener(
"DOMContentLoaded",
function(){



/* Smooth scrolling */


const links =
document.querySelectorAll(
'nav a[href^="#"], a[href^="#"]'
);



links.forEach(
link=>{

link.addEventListener(
"click",
function(e){

const target =
document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth",

block:"start"

});


}

}

);


});






/* Header background effect */


const header =
document.querySelector(".header");


window.addEventListener(
"scroll",
function(){


if(window.scrollY > 50){


header.style.background =
"rgba(5,7,11,0.9)";


}else{


header.style.background =
"rgba(5,7,11,0.65)";


}


});






/* Fade in animation */


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(

entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


}

);


},

{

threshold:0.15

}

);





const animatedElements =
document.querySelectorAll(

".project-card, .tech-box, .media-card, .document-card, .cooperation-card"

);



animatedElements.forEach(

element=>{


element.classList.add(
"hidden"
);


observer.observe(element);


});





});console.log("Yiang Website V1.0 Loaded");{\rtf1}