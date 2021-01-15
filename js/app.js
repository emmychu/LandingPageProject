//Global Variables
const sectionList = document.getElementsByTagName("section")
const navbox = document.getElementById("navbox")

/**creates the anchors */
let h2List = document.getElementsByTagName("h2")
for(let n = 0; n< h2List.length; n++){
    let textContent = h2List[n].textContent;
    h2List[n].innerHTML = "<a id=\"anchor"+ (n+1) + "\">" + textContent + "</a>"
}

// Builds the navbar
let navbar = document.getElementById("navbar__list");
for(let n = 0; n < sectionList.length; n++){
    navbar.insertAdjacentHTML("beforeend", "<a><li></li></a>");
    let liList = navbar.getElementsByTagName("li");
    let liVariable = liList[n];
    liVariable.innerHTML = sectionList[n].getAttribute("data-nav");
    liVariable.setAttribute("id","sec" +(n+1));
    liVariable.setAttribute("class","nav-section");
}

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {
    for(let n = 0; n < sectionList.length; n++){
        let element = sectionList[n];
        let position = element.getBoundingClientRect();
        let navboxHeight = navbox.getBoundingClientRect().height
        if((position.top - navboxHeight <= 0) && position.bottom <= window.innerHeight && (position.bottom - navboxHeight >= 0)){
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
    anchorList[n].addEventListener("click", () => {
        let anchorPosition = document.getElementById("anchor"+ (n+1)).getBoundingClientRect();
        let navboxHeight = navbox.getBoundingClientRect().height;
        window.scrollTo({
            top:anchorPosition.top - navboxHeight + window.pageYOffset,
            behavior: "smooth"
        })
    })
}

// //Inserts button to scroll to top
let footer = document.querySelector("footer")
let backTop = footer.insertAdjacentHTML("beforebegin", "<a id=\"button\">Scroll to Top</a>")
let button = document.querySelector("#button")
button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//Hide navbar 
let timer;
function timeOut(){
    timer = setTimeout(() => {
    let navboxList = document.querySelector("#navbox") 
        navboxList.style.display = "none";
}, 3000);}

window.addEventListener("mousemove", () => {
    let navboxList = document.querySelector("#navbox")
    navboxList.style.display = "flex";
    clearTimeout(timer);
    timeOut();
})