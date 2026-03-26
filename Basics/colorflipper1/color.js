const colors = ['green', 'red', 'rgba(233,211,212)', '#f15025'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const randomcolor = colors[randomNumber()];
  document.body.style.backgroundColor = randomcolor;
  color.style.color = randomcolor;
});

function randomNumber() {
  const color = Math.floor(Math.random() * colors.length);

  return color;
}
