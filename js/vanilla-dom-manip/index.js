function populateContent() {
  const main = document.getElementById('main');
  for (let i = 0; i < 8; i++) {
    const section = document.createElement('section');
    section.innerHTML = `
<h2>Section ${i}</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;
    main.appendChild(section);
  }
}

window.onload = populateContent;
