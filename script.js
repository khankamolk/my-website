
const modeToggle = document.querySelector('#mode-toggle');
const body = document.body;
const modeKey = 'mode';

// Check local storage for mode preference
if (localStorage.getItem(modeKey) === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle mode on button click
modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem(modeKey, mode);
});
