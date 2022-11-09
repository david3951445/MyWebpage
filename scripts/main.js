// switch photo
var myImage = document.querySelector('img');
function f() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.jpeg') {
        myImage.setAttribute('src', 'images/2.png')
    } else {
        myImage.setAttribute('src', 'images/1.jpeg')
    }
}
myImage.onclick = f;

// change user name
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.addEventListener('click', setUserName);