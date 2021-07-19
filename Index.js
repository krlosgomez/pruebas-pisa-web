const elements = document.getElementsByTagName('li');
for (const element of elements) {
  element.addEventListener('click', () => {
    element.style.backgroundColor = 'lightgray';
  });
  element.addEventListener('dblclick', () => {
    element.style.color = 'blue';
  });
}
