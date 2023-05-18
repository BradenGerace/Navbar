const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // console.log(links.classList.contains());
    if (links.classList.contains("links")){
        links.classList.remove("links");
    }
    else {
        links.classList.add("links")
    }
})