// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// Define a function boxClick that change the color of box to yellow of it is blue and to blue if it is not blue
export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
