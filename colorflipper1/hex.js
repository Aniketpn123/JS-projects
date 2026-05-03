const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let randomcolor = '#';
  for (let i=0; i <= 5; i++) {
    randomcolor += hex[randomValue()];
  }
  document.body.style.backgroundColor = randomcolor;
    
  color.style.color = randomcolor;
});

function randomValue(){
  return Math.floor(Math.random() * hex.length);
}
