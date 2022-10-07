// Insert current date in the Jumbotran area.
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
console.log("check")


var hour9El = document.querySelector("#hour-9")
var hour10El = document.querySelector("#hour-10")
var hour11El = document.querySelector("#hour-11")
var hour12El = document.querySelector("#hour-12")
var hour13El = document.querySelector("#hour-13")
var hour14El = document.querySelector("#hour-14")
var hour15El = document.querySelector("#hour-15")
var hour16El = document.querySelector("#hour-16")
var hour17El = document.querySelector("#hour-17")


// Keep the To-Do notes in local storage
hour9El.value = localStorage.getItem("hour9-toDo")
hour10El.value = localStorage.getItem("hour10-toDo")
hour11El.value = localStorage.getItem("hour11-toDo")
hour12El.value = localStorage.getItem("hour12-toDo")
hour13El.value = localStorage.getItem("hour13-toDo")
hour14El.value = localStorage.getItem("hour14-toDo")
hour15El.value = localStorage.getItem("hour15-toDo")
hour16El.value = localStorage.getItem("hour16-toDo")
hour17El.value = localStorage.getItem("hour17-toDo")


//Click on Save button and store the To-Do notes in local storage.
function saveHour9Value(){
    var input= hour9El.value;
    localStorage.setItem("hour9-toDo",input);   
}
function saveHour10Value(){
    var input= hour10El.value;
    localStorage.setItem("hour10-toDo",input);   
}
function saveHour10Value(){
    var input= hour11El.value;
    localStorage.setItem("hour11-toDo",input);   
}
function saveHour10Value(){
    var input= hour12El.value;
    localStorage.setItem("hour12-toDo",input);   
}
function saveHour10Value(){
    var input= hour13El.value;
    localStorage.setItem("hour13-toDo",input);   
}
function saveHour10Value(){
    var input= hour14El.value;
    localStorage.setItem("hour14-toDo",input);   
}
function saveHour10Value(){
    var input= hour15El.value;
    localStorage.setItem("hour15-toDo",input);   
}
function saveHour10Value(){
    var input= hour16El.value;
    localStorage.setItem("hour16-toDo",input);   
}
function saveHour10Value(){
    var input= hour17El.value;
    localStorage.setItem("hour17-toDo",input);   
}


//Notes from Henry//
// hard way
// add event listener to all save buttons 
// triggers save function
// save function: 
// - check which btn was clicked using event.target
// - based on the button, grab value of corresponding input field
// - save to local storage


// for time styling
// var currentHour = parseInt(today.format("H"))
// for loop (9 times)
// iterate over each row 
// if (timeSlot < currentHour) {
    //apply past class
// } else