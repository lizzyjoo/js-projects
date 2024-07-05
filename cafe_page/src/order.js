import arrowPath from './assets/img/arrow-scribble.png';
import orderPath from './assets/img/order.png';


const createOrderPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");

    pageContent.classList.add("page-content");

    // order page heading 
    const orderHeading = document.createElement("p");
    orderHeading.classList.add("order-heading");
    orderHeading.textContent = "Place Mobile Order";
    pageContent.appendChild(orderHeading);

    // squiggly arrow
    const arrow = document.createElement("img");
    arrow.id = "arrow";
    arrow.src = arrowPath;
    arrow.height = 70;
    pageContent.appendChild(arrow);

    // order page button
    const orderBtn = document.createElement("button");
    // styling divs
    orderBtn.classList.add("btn");
    orderBtn.classList.add("cube");
    orderBtn.classList.add("cube-hover");

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

    orderBtn.appendChild(bgTop.cloneNode(true));
    orderBtn.appendChild(bgRight.cloneNode(true));
    orderBtn.appendChild(bg.cloneNode(true));

    const orderText = document.createElement("div");
    orderText.classList.add("text");
    const orderIcon = document.createElement("img");
    orderIcon.id = "order-icon";
    orderIcon.src = orderPath;
    orderIcon.height = '35';
    orderText.appendChild(orderIcon);
    orderBtn.appendChild(orderText);
    pageContent.appendChild(orderBtn);

    // add ordering page info
    const orderPage = document.createElement("p");
    orderPage.id = "ordering-page";
    orderPage.textContent = "ordering powered by Cafy inc.";
    pageContent.appendChild(orderPage);

    content.appendChild(pageContent);

}

export default createOrderPage;