const API_KEY = "027bd9368a5998532eba32f1c9fd342c";

const onSuccess = (position) => {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  console.log(`latitude is ${lat} longitude is ${log}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.main.temp;
    });
};

const onError = () => {
  alert("you are not found");
};

navigator.geolocation.getCurrentPosition(onSuccess, onError);
