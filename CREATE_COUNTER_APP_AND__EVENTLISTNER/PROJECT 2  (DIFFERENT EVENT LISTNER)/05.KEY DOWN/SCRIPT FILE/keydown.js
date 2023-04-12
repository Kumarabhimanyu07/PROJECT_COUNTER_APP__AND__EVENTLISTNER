//keydown and keyup event

//keydown
// The keyup event is fired when a key is released.

//keyup
//The keyup is fired when a key is released.
let container = document.getElementById("container");
let display = document.getElementById("display");

//adding a keydown  event listner to the document 
document.addEventListener("keydown", function(e){
    display.style.color = " red";
    display.innerText = e.key + " is sDown ";
});

//adding a keyup event  listner to the document 
document.addEventListener("keyup", function(e){
    display.style.color="green";
    display.innerText = e.key + " is keyup ";
});