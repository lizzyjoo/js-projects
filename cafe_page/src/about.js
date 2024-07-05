import matchaPath from './assets/img/matcha-latte.jpg';
import rightArrowPath from './assets/img/right-arrow.png';
import leftArrowPath from './assets/img/left-arrow.png';
import pastryPath from './assets/img/pastries.jpg';

const createAboutPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");

    pageContent.classList.add("page-content");

    // home page intro text
    const aboutIntro = document.createElement("p");
    aboutIntro.id = "about-intro";
    aboutIntro.textContent = "We are committed to providing you the best cafe experience";
    pageContent.appendChild(aboutIntro);
    const smallIntro = document.createElement("p");
    smallIntro.id = "about-paragraph";
    smallIntro.textContent = "Hi! Welcome to Hoji Coffee. Our journey began with a goal to deliver a healthy, aesthetic, and flavorful cafe experience in our cozy little corner.";
    pageContent.appendChild(smallIntro);

    // picture and caption cards
    const aboutCards = document.createElement("div");
    aboutCards.classList.add("about-cards");
    // individual cards
    // 1. matcha latte image and caption
    const matchaCard = document.createElement("div");
    matchaCard.id = "matcha-card";
    matchaCard.classList.add("card");


    // matcha latte img
    const matchaImg = document.createElement("img");
    matchaImg.classList.add("about-img");
    matchaImg.id = "matcha-img";
    matchaImg.src = matchaPath;
    matchaImg.height = '300';
    matchaCard.appendChild(matchaImg);
    // arrow png
    const rightArrowImg = document.createElement("img");
    rightArrowImg.classList.add("right-arrow");
    rightArrowImg.src = rightArrowPath;
    rightArrowImg.height = '80';
    matchaCard.appendChild(rightArrowImg);

    const matchaCardCaption = document.createElement("p");
    matchaCardCaption.id = "matcha-caption";
    matchaCardCaption.classList.add("caption");
    matchaCardCaption.textContent = "We know a good cup of freshly prepared matcha latte can make your day!";
    matchaCard.appendChild(matchaCardCaption);

    // 2. pastry image and caption
    const pastryCard = document.createElement("div");
    pastryCard.id = "pastry-card";
    pastryCard.classList.add("card");

    // caption
    const pastryCardCaption = document.createElement("p");
    pastryCardCaption.id = "pastry-caption";
    pastryCardCaption.classList.add("caption");
    pastryCardCaption.textContent = "Freshly baked pastries everyday. Our Matcha/Hojicha/Sesame cream croissant is everyone's favorite!";
    pastryCard.appendChild(pastryCardCaption);

    // arrow png
    const leftArrowImg = document.createElement("img");
    leftArrowImg.classList.add("left-arrow");
    leftArrowImg.src = leftArrowPath;
    leftArrowImg.height = '80';
    pastryCard.appendChild(leftArrowImg);

    // pastry img
    const pastryImg = document.createElement("img");
    pastryImg.classList.add("about-img");
    pastryImg.id = "pastry-img";
    pastryImg.src = pastryPath;
    pastryImg.height = '300';
    pastryCard.appendChild(pastryImg);

    aboutCards.appendChild(matchaCard);
    aboutCards.appendChild(pastryCard);
    pageContent.appendChild(aboutCards);
    
    content.appendChild(pageContent);

}

export default createAboutPage;