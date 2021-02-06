const digitalClock = document.getElementById("digital-clock"),
  hours = document.getElementById("hours"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds");

// To display the time when the script is first read
setTime();

// Function to return the current time in the header
function setTime() {
  const date = new Date();
  digitalClock.textContent = date.toLocaleTimeString();
  hours.style.transform = `rotate(${date.getHours() * 30}deg)`;
  minutes.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
  seconds.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
}

// Repeat this function every 1000  milliseconds
setInterval(setTime, 1000);
