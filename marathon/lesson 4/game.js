const board = document.querySelector('#board');
const squares_number = 500;
const colors = ['pink', 'purple', 'blue', 'green', 'yellow', 'orange', 'white']


for (let i =0; i < squares_number; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // square.addEventListener('mouseover', () => setColor(square))
  //   // console.log('hello')

  // square.addEventListener('mouseleave', () => removeColor(square))


square.addEventListener('mouseover', setColor);

square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px${color}, 0 0 10px ${color}`;
};

function removeColor(event) {
  const element = event.taget;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px black`;
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index]
};
