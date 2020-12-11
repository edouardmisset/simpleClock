const h1 = document.querySelector("h1");
var now, actualTime;

// Function to return the current time as the header
function getTime() {
  now = new Date();
  actualTime = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
  h1.textContent = actualTime;
}

// Repeat this function every one second
setInterval(getTime, 1000);
