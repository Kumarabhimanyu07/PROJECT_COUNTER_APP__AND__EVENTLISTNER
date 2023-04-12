//dbclick event

//The dbclick event fires when a pointing device button (such as a mouse's  primary button)
// is double-clicked; that is, when its's rapidly clicked twice on a single element within a very short span of time.

const boxElment = document.getElementById("box");

//assing a dbclick event listener to the element
boxElment.addEventListener("dblclick" , function(){
    alert("doubleClick event is working properly 👍 ");
});
