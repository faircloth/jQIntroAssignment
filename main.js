$(function () {


// first clock

// create date


function currentTime () {
  var nowTime = new Date();
  var hours1 = nowTime.getHours();
  var minutes1 = nowTime.getMinutes();
  var seconds1 = nowTime.getSeconds();


  // use ternary operator to correct for digits

  rawHours = hours1;

  hours1 = (hours1 <= 12 ? '0' : hours1 - 12);
  minutes1 = (minutes1 < 10 ? '0' : '') + minutes1;
  seconds1 = (seconds1 < 10 ? '0' : '') + seconds1;

  console.log(hours1);
  console.log(minutes1);
  console.log(seconds1);


  // turn this into a real clock
  var clock1Time = hours1 + ':' + minutes1 + ':' + seconds1 + (rawHours <= 12 ? ' AM' : ' PM');
  console.log(clock1Time);


  // put the time on the page
  $('#clock1time').html(clock1Time);

}

// set frequency of update
window.onload = currentTime();
setInterval(currentTime, 1000);



// second clock



});












