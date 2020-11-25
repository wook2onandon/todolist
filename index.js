const title = document.querySelector('#title');

const clickedClass = "clicked";

const handleClick = () => {
  title.classList.toggle(clickedClass)
}

const init = () => {
  title.addEventListener('click', handleClick);
}

init();

