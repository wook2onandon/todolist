const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const userLs = 'currentUser';
const showingCn = 'showing';

const saveName = (text) => {
localStorage.setItem(userLs, text);
}

function handleSubmit (event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

const askForName = () => {
  form.classList.add(showingCn);
  form.addEventListener('submit', handleSubmit)
}

const paintGreeting = (text) => {
  form.classList.remove(showingCn);
  greeting.classList.add(showingCn);
  greeting.innerText = `Hello ${text}`;
}

const loadName = () => {
  const currentUser = localStorage.getItem(userLs);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser)
  }
}

function init() {
  loadName();
}

init()