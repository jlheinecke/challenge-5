// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var savedVal
var inputValue
// console.log(inputValue)

document.addEventListener('click', saveVal)


function saveVal() {

  var inputValue = document.getElementById("input-1").value;
  localStorage.setItem("saved-1", inputValue);


}



// onload = function(){document.getElementById("input-1").innerHTML = inputValue};


// document.getElementById("currentDay").innerHTML = dayjs().format('dddd, MMMM D');



$(function () {

  document.getElementById("currentDay").innerHTML = dayjs().format('dddd, MMMM D');

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    console.log(document.getElementById("input-2").innerHTML)

    document.addEventListener('click', saveVal)


    function saveVal() {
    
      var inputValue = document.getElementById("input-1").value;
      localStorage.setItem("input-1", inputValue);

      var inputValue = document.getElementById("input-2").value;
      localStorage.setItem("input-2", inputValue);

      var inputValue = document.getElementById("input-3").value;
      localStorage.setItem("input-3", inputValue);

      var inputValue = document.getElementById("input-4").value;
      localStorage.setItem("input-4", inputValue);

      var inputValue = document.getElementById("input-5").value;
      localStorage.setItem("input-5", inputValue);

      var inputValue = document.getElementById("input-6").value;
      localStorage.setItem("input-6", inputValue);

      var inputValue = document.getElementById("input-7").value;
      localStorage.setItem("input-7", inputValue);

      var inputValue = document.getElementById("input-8").value;
      localStorage.setItem("input-8", inputValue);

      var inputValue = document.getElementById("input-9").value;
      localStorage.setItem("input-9", inputValue);
    }
    
    document.getElementById("input-1").innerHTML = localStorage.getItem("input-1")
    document.getElementById("input-2").innerHTML = localStorage.getItem("input-2")
    document.getElementById("input-3").innerHTML = localStorage.getItem("input-3")
    document.getElementById("input-4").innerHTML = localStorage.getItem("input-4")
    document.getElementById("input-5").innerHTML = localStorage.getItem("input-5")
    document.getElementById("input-6").innerHTML = localStorage.getItem("input-6")
    document.getElementById("input-7").innerHTML = localStorage.getItem("input-7")
    document.getElementById("input-8").innerHTML = localStorage.getItem("input-8")
    document.getElementById("input-9").innerHTML = localStorage.getItem("input-9")

    //

    if (parseInt(document.getElementById("hour-9").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-9').className = 'row time-block hour present'}
    else if (parseInt(document.getElementById("hour-9").textContent) < dayjs().format('HH')) {
      document.getElementById('hour-9').className = 'row time-block hour past'
    }
    else {document.getElementById('hour-9').className = 'row time-block hour future'}

    if (parseInt(document.getElementById("hour-10").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-10').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-10").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-10').className = 'row time-block hour past'
}
else {document.getElementById('hour-10').className = 'row time-block hour future'}

if (parseInt(document.getElementById("hour-11").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-11').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-11").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-11').className = 'row time-block hour past'
}
else {document.getElementById('hour-11').className = 'row time-block hour future'}

if (parseInt(document.getElementById("hour-12").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-12').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-12").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-12').className = 'row time-block hour past'
}
else {document.getElementById('hour-12').className = 'row time-block hour future'}

if (parseInt(document.getElementById("hour-13").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-13').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-13").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-13').className = 'row time-block hour past'
}
else {document.getElementById('hour-13').className = 'row time-block hour future'}

if (parseInt(document.getElementById("hour-14").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-14').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-14").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-14').className = 'row time-block hour past'
}
else {document.getElementById('hour-14').className = 'row time-block hour future'}

if (parseInt(document.getElementById("hour-15").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-15').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-15").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-15').className = 'row time-block hour past'
}
else {document.getElementById('hour-15').className = 'row time-block hour future'}

if (parseInt(document.getElementById("hour-16").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-16').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-16").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-16').className = 'row time-block hour past'
}
else {document.getElementById('hour-16').className = 'row time-block hour future'}

if (parseInt(document.getElementById("hour-17").textContent) === parseInt(dayjs().format('HH'))){document.getElementById('hour-17').className = 'row time-block hour present'}
else if (parseInt(document.getElementById("hour-17").textContent) < dayjs().format('HH')) {
  document.getElementById('hour-17').className = 'row time-block hour past'
}
else {document.getElementById('hour-17').className = 'row time-block hour future'}



    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

  });