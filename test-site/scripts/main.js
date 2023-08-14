const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


// Image switcher code
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.jpg") {
    myImage.setAttribute("src", "images/puppy.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.jpg");
  }
    
};

// Personalized welcome message code
let myButton = document.querySelector("button");


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
 
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
    myButton.onclick = function() {
    setUserName();
  }
  
