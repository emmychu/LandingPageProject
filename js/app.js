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
        let navbarHeight = document.getElementById("navbox").getBoundingClientRect().height
        if((position.top - navbarHeight <= 0) && position.bottom <= window.innerHeight && (position.bottom - navbarHeight >= 0)){
            element.setAttribute("class","active-class");
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
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//Hide navbar 
let timer;
function timeOut(){
    timer = setTimeout(function(){
    let navbarList = document.querySelector("#navbox") 
        navbarList.style.display = "none";
}, 3000);}

window.addEventListener("mousemove", function(){
    let navbarList = document.querySelector("#navbox")
    navbarList.style.display = "flex";
    clearTimeout(timer);
    timeOut();
})