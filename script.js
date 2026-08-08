/*
=====================================
Yiang V2.0
Creative Technology Studio

script.js
=====================================
*/


// ===============================
// LANGUAGE SYSTEM
// ===============================


let currentLanguage = "en";


const languageButton =
document.getElementById("language-btn");


const languageButtons =
document.querySelectorAll(
".language-menu button"
);





async function loadLanguage(lang){


    try{


        const response =
        await fetch(`lang/${lang}.json`);


        const data =
        await response.json();



        document
        .querySelectorAll("[data-i18n]")
        .forEach(element=>{


            const key =
            element.getAttribute("data-i18n");



            if(data[key]){

                element.innerHTML =
                data[key];

            }


        });



        currentLanguage = lang;


        updateLanguageButton(lang);



    }

    catch(error){

        console.log(
        "Language loading error:",
        error
        );

    }



}






function updateLanguageButton(lang){


    const languageMap = {


        en:"🌐 EN ▼",

        zh:"🌐 中文 ▼",

        jp:"🌐 JP ▼"


    };


    languageButton.innerHTML =
    languageMap[lang];


}







languageButtons.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        const lang =
        button.dataset.lang;


        loadLanguage(lang);


    });


});






// Default language


document.addEventListener(
"DOMContentLoaded",
()=>{


    loadLanguage("en");


});








// ===============================
// SCROLL ANIMATION
// ===============================



const observer =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
            "show"
            );


        }


    });


},
{

threshold:0.15

});






document
.querySelectorAll(
".section, .project-card"
)
.forEach(element=>{


    observer.observe(element);


});








// ===============================
// HEADER EFFECT
// ===============================



const header =
document.querySelector(".header");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(5,7,13,0.95)";


    }

    else{


        header.style.background =
        "rgba(5,7,13,0.75)";


    }


});








// ===============================
// MOBILE MENU READY
// ===============================


// Reserved for future mobile navigation upgrade



console.log(
"Yiang V2.0 loaded successfully."
);
