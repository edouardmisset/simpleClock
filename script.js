const digitalClock = document.getElementById("digital-clock"),
  hours = document.getElementById("hours"),
  minutes = document.getElementById("minutes");

// To display the time when the script is first read
getTime();

// Function to return the current time in the header
function getTime() {
  digitalClock.textContent = new Date().toLocaleTimeString();
}

// Repeat this function every 1000  milliseconds
setInterval(getTime, 1000);
