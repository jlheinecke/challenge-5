// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
if (parseInt(document.getElementById("hour-9").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-9').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-9").textContent) < parseInt(dayjs().format('HH'))) {
  document.getElementById('hour-9').className = 'row time-block hour past'
}
else {document.getElementById('hour-9').className = 'row time-block hour future'}

console.log(dayjs().format('HH'))
console.log(parseInt(document.getElementById("hour-9").textContent))
// if (parseInt(text) === parseInt(dayjs().format('D'))) {document.body.style.backgroundColor = "red";}
// else {document.body.style.backgroundColor = "yellow";}
var savedVal
var inputValue
console.log(inputValue)


function saveVal() {
inputValue = document.getElementById('input-1').value
console.log(inputValue)
// savedVal = localStorage.setItem("input-1",inputValue)
savedVal = inputValue
// document.getElementById("input-1").innerHTML = inputValue
return savedVal
}
console.log(saveVal.value)
if (localStorage !== null) {document.getElementById("input-1").innerHTML = inputValue};

// onload = function(){document.getElementById("input-1").innerHTML = inputValue};


document.getElementById("currentDay").innerHTML = dayjs().format('dddd, MMMM D');
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    if (document.getElementById("hour-5").innerHTML === "hour-5"){

    }
    // if id < hour then gray 
    // else if id = hour then red 
    // else then green


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });