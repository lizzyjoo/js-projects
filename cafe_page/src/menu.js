import arrowPath from './assets/img/arrow-scribble.png';
import menuLinePath from './assets/img/menu-underline.png';

const createMenuPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");

    pageContent.classList.add("page-content");

    // Menu Header 
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-heading");
    const menuText = document.createElement("p");
    menuText.id = "menu-text";
    menuText.textContent = "Menu";
    menuHeader.appendChild(menuText);
    pageContent.appendChild(menuHeader);

    // underline
    const line = document.createElement("img");
    line.id = "line";
    line.src = menuLinePath;
    line.height = 70;
    menuHeader.appendChild(line);

    // menu div: composed of row divs
    const menu = document.createElement("div");
    menu.classList.add("menu");

    pageContent.appendChild(menu);

    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = "Item";
    menu.appendChild(item);

    const hot = document.createElement("div");
    hot.classList.add("hot");
    hot.textContent = "Hot";
    menu.appendChild(hot);

    const ice = document.createElement("div");
    ice.classList.add("ice");
    ice.textContent = "Iced";
    menu.appendChild(ice);

    // added a few items

    // espresso
    const espresso = document.createElement("div");
    espresso.classList.add("name");
    espresso.textContent = "Espresso";
    menu.appendChild(espresso);

    const espressoHot = document.createElement("div");
    espressoHot.classList.add("price");
    espressoHot.textContent = "3.75";
    menu.appendChild(espressoHot);

    const espressoIce = document.createElement("div");
    espressoIce.classList.add("price");
    espressoIce.textContent = "-";
    menu.appendChild(espressoIce);

    // hojicha latte
    const hojicha = document.createElement("div");
    hojicha.classList.add("name");
    hojicha.textContent = "Hojicha Latte";
    menu.appendChild(hojicha);

    const hojichaHot = document.createElement("div");
    hojichaHot.classList.add("price");
    hojichaHot.textContent = "5.75";
    menu.appendChild(hojichaHot);

    const hojichaIce = document.createElement("div");
    hojichaIce.classList.add("price");
    hojichaIce.textContent = "6.00";
    menu.appendChild(hojichaIce);

    // matcha black sesame latte
    const matchaSesame = document.createElement("div");
    matchaSesame.classList.add("name");
    matchaSesame.textContent = "Matcha Black Sesame Latte";
    menu.appendChild(matchaSesame);

    const matchaSesameHot = document.createElement("div");
    matchaSesameHot.classList.add("price");
    matchaSesameHot.textContent = "5.9";
    menu.appendChild(matchaSesameHot);

    const matchaSesameIce = document.createElement("div");
    matchaSesameIce.classList.add("price");
    matchaSesameIce.textContent = "6.30";
    menu.appendChild(matchaSesameIce);



    
    

    





    content.appendChild(pageContent);
}

export default createMenuPage;