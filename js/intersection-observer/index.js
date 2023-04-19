function populateContent() {
  const main = document.getElementById('main');
  for (let i = 0; i < 8; i++) {
    const section = document.createElement('section');
    section.className = `section-${i}`;
    main.appendChild(section);
  }
}

function populateSection(section) {
  if (!section) {
    return;
  }
  section.innerHTML = `
<div class="fade">
  <h2>Section ${section.className.replace('section-', '')}</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
`;
  section.querySelector('div').className = 'fade in';
}

window.addEventListener('load', function() {
  populateContent();

  const options = {
    root: null,
    threshold: '0.5',
  }
  const observer = new IntersectionObserver((entries, observer) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        console.log('entry', entry);
        populateSection(entry.target);
      }
    }
  }, options);

  const sections = document.querySelectorAll('section');
  for (let section of sections) {
    observer.observe(section);
  }
})
