/* =========================================
   Yiang V2.0
   Main JavaScript
========================================= */


/* =========================================
   Page Loading
========================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"Yiang V2.0 Website Loaded"
);



/* 初始化 */

initLanguage();

initMobileMenu();

initScrollAnimation();

initSmoothScroll();

initLazyLoad();

initVideo();



});





/* =========================================
   Language System
========================================= */


const languageButton =
document.querySelector(
"#language-toggle"
);


let currentLanguage =
localStorage.getItem(
"yiang-language"
) || "en";





function initLanguage(){


changeLanguage(
currentLanguage
);



if(languageButton){


languageButton.addEventListener(
"click",
()=>{


currentLanguage =
currentLanguage==="en"
?
"zh"
:
"en";


localStorage.setItem(
"yiang-language",
currentLanguage
);



changeLanguage(
currentLanguage
);



});


}



}




function changeLanguage(lang){



const elements =
document.querySelectorAll(
"[data-en]"
);



elements.forEach(
element=>{


element.innerHTML =
element.dataset[lang];


});



if(languageButton){

languageButton.innerHTML =
lang==="en"
?
"中文"
:
"English";

}



}





/* =========================================
   Mobile Menu
========================================= */


function initMobileMenu(){



const menuButton =
document.querySelector(
".menu-toggle"
);


const nav =
document.querySelector(
".nav-menu"
);



if(!menuButton || !nav)
return;




menuButton.addEventListener(
"click",
()=>{


menuButton.classList.toggle(
"active"
);


nav.classList.toggle(
"open"
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
"open"
);


menuButton.classList.remove(
"active"
);


});


});



}






/* =========================================
   Scroll Animation
========================================= */


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





const animatedElements =
document.querySelectorAll(
".fade-up,.fade-left,.fade-right"
);



animatedElements.forEach(
item=>{


observer.observe(item);


});



}







/* =========================================
   Smooth Scroll
========================================= */


function initSmoothScroll(){



document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(
anchor=>{


anchor.addEventListener(
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



});


});



}







/* =========================================
   Lazy Loading Images
========================================= */


function initLazyLoad(){



const images =
document.querySelectorAll(
"img[data-src]"
);



const observer =
new IntersectionObserver(
entries=>{


entries.forEach(
entry=>{


if(entry.isIntersecting){


const img =
entry.target;


img.src =
img.dataset.src;


img.removeAttribute(
"data-src"
);


observer.unobserve(
img
);


}


});


});




images.forEach(
img=>{


observer.observe(
img
);


});


}







/* =========================================
   Video Control
========================================= */


function initVideo(){



const videos =
document.querySelectorAll(
"video"
);



videos.forEach(
video=>{


video.addEventListener(
"loadeddata",
()=>{


video.classList.add(
"loaded"
);


});



/*
移动端避免自动播放失败
*/

video.addEventListener(
"click",
()=>{


if(video.paused){

video.play();

}
else{

video.pause();

}


});



});



}







/* =========================================
   Header Scroll Effect
========================================= */


window.addEventListener(
"scroll",
()=>{


const header =
document.querySelector(
"header"
);



if(!header)
return;




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







/* =========================================
   Back To Top
========================================= */


const backTop =
document.querySelector(
".back-top"
);



if(backTop){


backTop.onclick =
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};


}







/* =========================================
   Button Ripple Effect
========================================= */


document
.querySelectorAll(
"button,.btn-primary"
)
.forEach(
button=>{


button.addEventListener(
"click",
function(){


this.classList.add(
"clicked"
);



setTimeout(
()=>{


this.classList.remove(
"clicked"
);


},
300
);



});


});






/* =========================================
   Console Branding
========================================= */


console.log(
"%c Yiang V2.0 ",
`
background:#111;
color:white;
font-size:20px;
padding:10px;
`
);


console.log(
"Creative Intelligence Studio"
);
