const h1 = document.querySelector("h1");

// Function to return the current time as the header
function getTime() {
  h1.textContent = new Date().toLocaleTimeString();
}

// Repeat this function every 1000  milliseconds
setInterval(getTime, 1000);
