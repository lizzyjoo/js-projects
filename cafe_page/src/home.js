import cafeImgPath from './assets/img/cafe-home.jpg';

const createCafeHomePage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");

    pageContent.classList.add("page-content");

    // home page intro text
    const cafeIntro = document.createElement("p");
    cafeIntro.id = "cafe-intro";
    cafeIntro.textContent = "We Serve the Best Hojicha In Town!"
    pageContent.appendChild(cafeIntro);

    // intro caption
    const caption = document.createElement("p");
    caption.id = "cafe-caption";
    caption.textContent = "Experience the very best Hojicha, Matcha, Sesame flavored drinks and high-quality coffee.";
    pageContent.appendChild(caption);

    // create and append home page main img
    const cafeImg = document.createElement("img");
    cafeImg.id = "home-img";
    cafeImg.src = cafeImgPath;
    cafeImg.height = '500';
    pageContent.appendChild(cafeImg);

    // location & hours section
    const cafeInfo = document.createElement("div");
    cafeInfo.classList.add("cafe-info");
    pageContent.appendChild(cafeInfo);

    // location & hours title
    const locHours = document.createElement("h2");
    locHours.textContent = "Location & Hours"
    locHours.id = "location-hours";
    pageContent.appendChild(locHours);

    // address  
    const location = document.createElement("div");
    const locationP = document.createElement("p");
    location.id = "location";
    pageContent.appendChild(location);
    const locationParagraph = [
        "Hoji Coffee, USA",
        "123 Hoji Street",
        "Boston, Massachusetts 00000",
        "(123) 456-789.",
        "info@hojicoffee.com"
    ];

    locationP.innerHTML = locationParagraph.join("<br>");
    location.appendChild(locationP);

    // hours
    const hours = document.createElement("div");
    hours.id = "hours";
    const hoursP = document.createElement("p");
    pageContent.appendChild(hours);
    const hoursParagraph = [
        "Monday: 8am-6pm" ,
        "Tuesday: 8am-6pm",
        "Wednesday: 8am-6pm",
        "Thursday: 8am-6pm",
        "Friday: 8am-6pm",
        "Saturday: 8am-6pm",
        "Sunday: 8am-6pm"
    ];

    hoursP.innerHTML = hoursParagraph.join("<br>");
    hours.appendChild(hoursP);

    content.appendChild(pageContent);

    cafeInfo.appendChild(locHours);
    cafeInfo.appendChild(location);
    cafeInfo.appendChild(hours);


}

export default createCafeHomePage;