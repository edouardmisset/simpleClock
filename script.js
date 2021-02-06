const digitalClock = document.getElementById("digital-clock"),
  hoursStyle = document.getElementById("hours").style,
  minutesStyle = document.getElementById("minutes").style,
  secondsStyle = document.getElementById("seconds").style;

// To display the time when the script is first read
let date = new Date();
setTimeAndStyle();

// Function to return the current time in the header
function setTimeAndStyle() {
  date = new Date();
  const seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours();

  digitalClock.textContent = date.toLocaleTimeString();

  // Rotation
  hoursStyle.transform = `rotate(${hours * 30}deg)`;
  minutesStyle.transform = `rotate(${minutes * 6}deg)`;
  secondsStyle.transform = `rotate(${seconds * 6}deg)`;

  // Hands color
  // hoursStyle.stroke = `hsl(${hours * 30}, 30%, 20%)`;
  // minutesStyle.stroke = `hsl(${minutes * 6}, 30%, 20%)`;
  secondsStyle.stroke = `hsl(${seconds * 6}, 35%, 30%)`;
}

// Repeat this function every 1000  milliseconds
setInterval(setTimeAndStyle, 1000);
