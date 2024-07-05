import createAboutPage from "./about";
import createContactPage from "./contact";
import createMenuPage from "./menu";
import createOrderPage from "./order";
import createCafeHomePage from "./Home";

import cupLogo from './assets/img/logo-cup.png';


const createTabs = () => {
    const content = document.getElementById("content");
    // create header section
    const pageHeader = document.createElement("header");
    pageHeader.id = 'page-header';
    // cafe name/logo 
    const cafeLogo = document.createElement("div");
    cafeLogo.classList.add("cafe-logo");
    // logo
    const logo = document.createElement("img");
    logo.src = cupLogo;
    logo.height = '50'
    cafeLogo.appendChild(logo);

    // cafe name 
    const cafeName = document.createElement("h1");
    cafeName.id = "cafe-name";
    cafeName.textContent = "Hoji Coffee";
    cafeLogo.appendChild(cafeName);

    

    pageHeader.appendChild(cafeLogo);
    // create nav for tabs
    const headerNav = document.createElement("nav");
    pageHeader.appendChild(headerNav);
    content.appendChild(pageHeader);

    // create div for each tab 
    const homeTab = document.createElement("button");
    const aboutTab = document.createElement("button");
    const menuTab = document.createElement("button");
    const orderTab = document.createElement("button");
    const contactTab = document.createElement("button");

    // set id attribute
    homeTab.setAttribute("id", "home-btn");
    aboutTab.setAttribute("id", "about-btn");
    menuTab.setAttribute("id", "menu-btn");
    orderTab.setAttribute("id", "order-btn");
    contactTab.setAttribute("id", "contact-btn");

    // add class
    homeTab.classList.add("tab");
    homeTab.classList.add("cube");
    homeTab.classList.add("cube-hover");

    aboutTab.classList.add("tab");
    aboutTab.classList.add("cube");
    aboutTab.classList.add("cube-hover");

    menuTab.classList.add("tab");
    menuTab.classList.add("cube");
    menuTab.classList.add("cube-hover");

    orderTab.classList.add("tab");
    orderTab.classList.add("cube");
    orderTab.classList.add("cube-hover");

    contactTab.classList.add("tab");
    contactTab.classList.add("cube");
    contactTab.classList.add("cube-hover");

    // add divs for button box styling
    // text for different tabs
    const homeBtnText = document.createElement("div");
    homeBtnText.classList.add("text");
    homeBtnText.textContent = "Home";

    const menuBtnText = document.createElement("div");
    menuBtnText.classList.add("text");
    menuBtnText.textContent = "Menu";

    const aboutBtnText = document.createElement("div");
    aboutBtnText.classList.add("text");
    aboutBtnText.textContent = "About";

    const orderBtnText = document.createElement("div");
    orderBtnText.classList.add("text");
    orderBtnText.textContent = "Order";

    const contactBtnText = document.createElement("div");
    contactBtnText.classList.add("text");
    contactBtnText.textContent = "Contact";

    // Btn sections: bg, top, right
    const bgTop = document.createElement("div");
    bgTop.classList.add("bg-top");
    const bgRight = document.createElement("div");
    bgRight.classList.add("bg-right");
    const bg = document.createElement("div");
    bg.classList.add("bg");
    let bgInner = document.createElement("div");
    bgInner.classList.add("bg-inner");
    bg.append(bgInner.cloneNode(true));
    bgTop.append(bgInner.cloneNode(true));
    bgRight.append(bgInner.cloneNode(true));

    // append divs to each button 
    homeTab.appendChild(bgTop.cloneNode(true));
    homeTab.appendChild(bgRight.cloneNode(true));
    homeTab.appendChild(bg.cloneNode(true));
    homeTab.appendChild(homeBtnText);

    aboutTab.appendChild(bgTop.cloneNode(true));
    aboutTab.appendChild(bgRight.cloneNode(true));
    aboutTab.appendChild(bg.cloneNode(true));
    aboutTab.appendChild(aboutBtnText);
    
    menuTab.appendChild(bgTop.cloneNode(true));
    menuTab.appendChild(bgRight.cloneNode(true));
    menuTab.appendChild(bg.cloneNode(true));
    menuTab.appendChild(menuBtnText);

    orderTab.appendChild(bgTop.cloneNode(true));
    orderTab.appendChild(bgRight.cloneNode(true));
    orderTab.appendChild(bg.cloneNode(true));
    orderTab.appendChild(orderBtnText);

    contactTab.appendChild(bgTop.cloneNode(true));
    contactTab.appendChild(bgRight.cloneNode(true));
    contactTab.appendChild(bg.cloneNode(true));
    contactTab.appendChild(contactBtnText);

    headerNav.appendChild(homeTab);
    headerNav.appendChild(aboutTab);
    headerNav.appendChild(menuTab);
    headerNav.appendChild(orderTab);
    headerNav.appendChild(contactTab);

    // add event listeners to tab buttons
    homeTab.addEventListener("click", () => {
        clearContent();
        createCafeHomePage();
    })

    aboutTab.addEventListener("click", () => {
        clearContent();
        createAboutPage();
    })

    menuTab.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    })

    orderTab.addEventListener("click", () => {
        clearContent();
        createOrderPage();
    })

    contactTab.addEventListener("click", () => {
        clearContent();
        createContactPage();
    })

}
function clearContent() {
    const content = document.getElementById("content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }

}
export default createTabs;