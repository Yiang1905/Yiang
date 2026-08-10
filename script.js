/* =====================================
   Yiang V2.1 Final JavaScript
   Creative Intelligence Studio
===================================== */



document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"Yiang V2.1 Loaded"
);



initLanguage();

initMobileMenu();

initScrollAnimation();

initHeader();

initVideo();



});







/* =========================
LANGUAGE SYSTEM
========================= */


let currentLang =
localStorage.getItem(
"yiang-lang"
) || "en";




async function loadLanguage(lang){


try{


const response =
await fetch(
`lang/${lang}.json`
);



const data =
await response.json();



document
.querySelectorAll("[data-key]")
.forEach(
element=>{


const key =
element.dataset.key;



if(data[key]){


element.innerHTML =
data[key];


}



});



localStorage.setItem(
"yiang-lang",
lang
);



}

catch(error){


console.log(
"Language loading error:",
error
);


}



}






function initLanguage(){



const button =
document.querySelector(
"#language-toggle"
);



loadLanguage(
currentLang
);





if(button){


button.addEventListener(
"click",
()=>{



if(currentLang==="en"){


currentLang="zh";


button.innerHTML="English";


}

else if(currentLang==="zh"){


currentLang="jp";


button.innerHTML="日本語";


}

else{


currentLang="en";


button.innerHTML="中文";


}



loadLanguage(
currentLang
);



});



}



}









/* =========================
MOBILE MENU
========================= */


function initMobileMenu(){



const menu =
document.querySelector(
".menu-toggle"
);



const nav =
document.querySelector(
".nav-menu"
);




if(!menu || !nav)
return;





menu.addEventListener(
"click",
()=>{


nav.classList.toggle(
"active"
);


menu.classList.toggle(
"active"
);



});






document
.querySelectorAll(
".nav-menu a"
)
.forEach(
link=>{


link.addEventListener(
"click",
()=>{


nav.classList.remove(
"active"
);


});


});



}









/* =========================
SCROLL ANIMATION
========================= */


function initScrollAnimation(){



const observer =
new IntersectionObserver(
entries=>{


entries.forEach(
entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},
{

threshold:0.15

}

);





document
.querySelectorAll(
".project-card,.about-card,.technology-card,.document-card"
)
.forEach(
element=>{


element.classList.add(
"fade"
);


observer.observe(
element
);


});



}








/* =========================
HEADER EFFECT
========================= */


function initHeader(){



const header =
document.querySelector(
".header"
);



if(!header)
return;





window.addEventListener(
"scroll",
()=>{


if(window.scrollY>50){


header.classList.add(
"scrolled"
);


}

else{


header.classList.remove(
"scrolled"
);


}



});



}









/* =========================
VIDEO
========================= */


function initVideo(){



const video =
document.querySelector(
"video"
);



if(!video)
return;




video.addEventListener(
"loadeddata",
()=>{


console.log(
"Video Loaded"
);


});





video.addEventListener(
"error",
()=>{


console.log(
"Video Loading Failed"
);


});



}









/* =========================
SMOOTH SCROLL
========================= */


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(
link=>{


link.addEventListener(
"click",
function(e){



const target =
document.querySelector(
this.getAttribute(
"href"
)
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});



});








/* =========================
IMAGE CHECK
========================= */


window.addEventListener(
"load",
()=>{


document
.querySelectorAll(
"img"
)
.forEach(
img=>{


if(!img.complete ||
img.naturalWidth===0){


console.log(
"Image missing:",
img.src
);


}



});


});