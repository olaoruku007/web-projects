// Image switcher code

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/programming.jpg") {
    myImage.setAttribute("src", "images/devops.png");
  } else {
    myImage.setAttribute("src", "images/programming.jpg");
  }
    
};



