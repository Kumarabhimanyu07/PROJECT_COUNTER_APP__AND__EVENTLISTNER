//Mouseover

//The mouseOver event is fired at an Element when a pointing device(such a mouse)


const boxElement = document.getElementById("box");
//add a mouseOver event listner to the element 
boxElement.addEventListener("mouseover", function(){
    alert(
    "you entered  in Restricted Area 👮‍♀️(mouse over event is working properly ) "
    );

});