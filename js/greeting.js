const greeting = document.querySelector("#greeting");
const greetingInput = document.querySelector("#greeting input");
const hiUser = document.querySelector("#hiUser");
const HIDDEN_CALSS = "hidden";
const VALUE_KEY = "value";

const printUser = (value) => {
  hiUser.innerText = `hello ${value}`;
  hiUser.classList.remove(HIDDEN_CALSS);
  greeting.classList.add(HIDDEN_CALSS);
};

const handleGreeting = (event) => {
  event.preventDefault();
  greeting.classList.add(HIDDEN_CALSS);
  const value = greetingInput.value;
  localStorage.setItem(VALUE_KEY, value);
  printUser(value);
};

const saveValue = localStorage.getItem(VALUE_KEY);

if (saveValue === null) {
  greeting.classList.remove(HIDDEN_CALSS);
  greeting.addEventListener("submit", handleGreeting);
} else {
  printUser(saveValue);
}
