window.onload = initGrid;

function initGrid() {
  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.className = 'grid-container';
  div.innerHTML = `
<div class="primary"></div>
<div class="secondary"></div>
<div class="tertiary"></div>
<div class="tetrary"></div>
`;
  main.appendChild(div);
  setupEventListeners();
}

function setupEventListeners() {
  const main = document.querySelector('main');
  const divs = main.getElementsByTagName('div');
  for (let div of divs) {
    div.addEventListener('mouseenter', (event) => {
      div.setAttribute('style', 'transform: translateY(-3px) scale(1.025); box-shadow: lightgray 0 4px 12px');
    });
    div.addEventListener('mouseleave', (event) => {
      div.setAttribute('style', 'transform: none');
    });
  };
}
