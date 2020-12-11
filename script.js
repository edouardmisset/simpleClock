var now, h, m, s, actualTime;

const h1 = document.querySelector("h1");

// console.log(now);
// console.log(actualTime);

function displayTime() {
  now = new Date();
  h = now.getUTCHours();
  m = now.getUTCMinutes();
  s = now.getUTCSeconds();
  actualTime = `${h}:${m}:${s}`;
  h1.textContent = actualTime;
}

setTimeout(displayTime(), 1000);
