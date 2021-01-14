/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
/**creates the anchors */

let h2List = document.getElementsByTagName("h2")
for(let n = 0; n< h2List.length; n++){
    let textContent = h2List[n].textContent;
    h2List[n].innerHTML = "<a id=\"anchor"+ (n+1) + "\">" + textContent + "</a>"
}

// Builds the navbar
let navbar = document.getElementById("navbar__list");
let sectionList = document.getElementsByTagName("section")
for(let n = 0; n < sectionList.length; n++){
    navbar.insertAdjacentHTML("beforeend", "<a><li></li></a>");
    let liList = navbar.getElementsByTagName("li");
    liList[n].innerHTML = sectionList[n].getAttribute("data-nav");
    liList[n].setAttribute("id","sec" +(n+1));
    liList[n].setAttribute("class","nav-section");
}



// Add class 'active' to section when near top of viewport
let secList = document.getElementsByTagName("section")
window.addEventListener("scroll", function(){
    for(let n = 0; n < secList.length; n++){
        let element = secList[n];
        let position = element.getBoundingClientRect();
        if(position.top >= (0 - document.getElementById("navbox").getBoundingClientRect().height) && position.bottom <= window.innerHeight){
            element.setAttribute("class","your-active-class");
        }
        else{
            element.removeAttribute("class");
        }
    }  
})

// Scroll to anchor ID using scrollTO event
let anchorList = navbar.getElementsByTagName("a");
for(let n = 0; n < anchorList.length; n++){
    anchorList[n].addEventListener("click",function(){
        let anchorPosition = document.getElementById("anchor"+ (n+1)).getBoundingClientRect();
        let navbarHeight = document.getElementById("navbox").getBoundingClientRect().height;
        window.scrollTo({
            top:anchorPosition.top - navbarHeight + window.pageYOffset,
            behavior: "smooth"
        })
    })
}

// //Inserts button to scroll to top
let footer = document.querySelector("footer")
let backTop = footer.insertAdjacentHTML("beforebegin", "<a id=\"button\">Scroll to Top</a>")
let button = document.querySelector("#button")

button.addEventListener("click", function(){
    console.log("i am click");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})





//Hide navbar 


function timeOut(){setTimeout(function(){
    let navbarList = document.querySelectorAll(".navbar__menu") 
    for(let n = 0; n < navbarList.length; n++){
        navbarList[n].style.display = "none";
    }
}, 10000);}

window.addEventListener("mousemove", function(){
    clearTimeout(timeOut);
    let navbarList = document.querySelectorAll(".navbar__menu")
    for(let n = 0; n < navbarList.length; n++){
        navbarList[n].style.display = "flex";
    }
    timeOut();
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


