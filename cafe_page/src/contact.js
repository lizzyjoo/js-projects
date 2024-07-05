import arrowPath from './assets/img/arrow-scribble.png';
import sendPath from './assets/img/send.png';

const createContactPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // contact page heading 
    const contactHeading = document.createElement("p");
    contactHeading.classList.add("contact-heading");
    contactHeading.textContent = "Questions? Reach out!";
    pageContent.appendChild(contactHeading);

    // squiggly arrow
    const arrow = document.createElement("img");
    arrow.id = "arrow";
    arrow.src = arrowPath;
    arrow.height = 70;
    pageContent.appendChild(arrow);

    // contact form 
    const form = document.createElement("form");
    form.classList.add("contact-form");

    // first name
    const firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First Name";
    const firstName = document.createElement("input");
    firstName.type = 'text';
    firstName.placeholder = "First Name";
    form.appendChild(firstNameLabel);
    form.appendChild(firstName);

    // last name
    const lastNameLabel = document.createElement("label");
    lastNameLabel.textContent = "Last Name";
    const lastName = document.createElement("input");
    lastName.type = 'text';
    lastName.placeholder = "Last Name";
    form.appendChild(lastNameLabel);
    form.appendChild(lastName);

    // phone number
    const numLabel = document.createElement("label");
    numLabel.textContent = "Phone Number (optional)";
    const phoneNum = document.createElement("input");
    phoneNum.type = 'number';
    phoneNum.placeholder = "123456789";
    form.appendChild(numLabel);
    form.appendChild(phoneNum);

    // email address
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email";
    const email = document.createElement("input");
    email.type = 'email';
    email.placeholder = "hojicoffee@gmail.com";
    form.appendChild(emailLabel);
    form.appendChild(email);

    // inquiry subject
    const subject = document.createElement("input");
    subject.id = "subject";
    subject.type = 'text';
    subject.placeholder = "What's your inquiry?";
    form.appendChild(subject);

    // submit button; button styling divs
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("btn");
    submitBtn.classList.add("cube");
    submitBtn.classList.add("cube-hover");

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

    submitBtn.appendChild(bgTop.cloneNode(true));
    submitBtn.appendChild(bgRight.cloneNode(true));
    submitBtn.appendChild(bg.cloneNode(true));

    // squiggly arrow icon
    const submitText = document.createElement("div");
    submitText.classList.add("text");
    const sendArrow = document.createElement("img");
    sendArrow.id = "send-arrow";
    sendArrow.src = sendPath;
    sendArrow.height = '35';

    submitText.appendChild(sendArrow);
    submitBtn.appendChild(submitText);
    
    form.appendChild(submitBtn);

    pageContent.appendChild(form);
    content.appendChild(pageContent);
}

export default createContactPage;