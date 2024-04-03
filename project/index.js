window.onload = function() {
    let displayRed = document.getElementById('timer');
    var minute = 9;
    var sec = 59;
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + ":" + sec;
      sec--;
      if (sec == 00) {
        minute--;
        sec = 59;
        if (minute == 0) {
          minute = 9;
        }
        displayRed.style.display = 'none';
      }
    }, 1000);
  }