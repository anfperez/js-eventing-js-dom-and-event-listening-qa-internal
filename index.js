const main = document.querySelector('#main');
const paragraph = document.querySelector('p');

let divs = document.querySelectorAll('div');

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

main.addEventListener('click', (event) => {
  console.log('I was clicked');
})

paragraph.addEventListener('click', (event) => {
  alert('you clicked the p!');
  paragraph.style.backgroundColor = 'yellow';
})