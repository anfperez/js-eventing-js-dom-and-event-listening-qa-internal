const main = document.querySelector('#main');
const paragraph = document.querySelector('p');


main.addEventListener('click', (event) => {
  console.log('I was clicked');
})

paragraph.addEventListener('click', (event) => {
  alert('you clicked the p!');
})