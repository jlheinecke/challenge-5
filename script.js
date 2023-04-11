
$(function () {
 
  document.getElementById("currentDay").innerHTML = dayjs().format('dddd, MMMM D');


  var button = document.querySelector('#button');
  button.addEventListener('click', saveVal)

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


  if (parseInt(document.getElementById("hour-9").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-9').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-9").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-9').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-9').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-10").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-10').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-10").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-10').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-10').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-11").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-11').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-11").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-11').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-11').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-12").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-12').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-12").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-12').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-12').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-13").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-13').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-13").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-13').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-13').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-14").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-14').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-14").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-14').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-14').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-15").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-15').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-15").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-15').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-15').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-16").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-16').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-16").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-16').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-16').className = 'row time-block hour future' }

  if (parseInt(document.getElementById("hour-17").textContent) === parseInt(dayjs().format('HH'))) { document.getElementById('hour-17').className = 'row time-block hour present' }
  else if (parseInt(document.getElementById("hour-17").textContent) < dayjs().format('HH')) {
    document.getElementById('hour-17').className = 'row time-block hour past'
  }
  else { document.getElementById('hour-17').className = 'row time-block hour future' }


});