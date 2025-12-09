const pressioneElement = document.querySelector('.pressione');

// -------------------------------------------

pressioneElement.addEventListener('click', () => {
  pressioneElement.style.left = `${Math.random() * (window.innerWidth - (window.innerWidth/100)*20) }px`;
  
  pressioneElement.style.top = `${Math.random() * (window.innerHeight - (window.innerHeight/100)*5)}px`;
});