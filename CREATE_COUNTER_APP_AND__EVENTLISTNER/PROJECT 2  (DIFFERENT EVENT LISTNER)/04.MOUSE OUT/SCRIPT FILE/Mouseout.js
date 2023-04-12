// mouseout event

//The mouseout event is fired at an elment when a pointing device(usually a mouse)
//is used to move the cursor so that it is no longer contained within the elment or

const boxElement = document.getElementById("box");

// add a mouseout  event listner to the element 
boxElement.addEventListener("mouseout" , function(){
    alert("you left the safe  zone  🙅(mouse out event working properly)");

})