const clock = document.querySelector("#clock");

function currentTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  clock.innerText = `${hour}:${min}:${sec}`;
}

currentTime();
setInterval(currentTime, 1000);
