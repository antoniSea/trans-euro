console.log('navbar.js loaded');

document.getElementById('mobile-toggle-button').addEventListener('click', (() => {
    const nav = document.getElementById("mobile-navbar-open");
    
    if (nav.style.display === "flex") {
        nav.classList.add("mobile-navbar-open-out");
        setTimeout(() => {
            changeDisplay(nav, "none");
            nav.classList.remove("mobile-navbar-open-out");
        }, 500)
    } else {
        changeDisplay(nav, "flex");
    }
}));

const changeDisplay = (element, display) => {
    element.style.display = display;
}