// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    document.documentElement.classList.add('light');
    updateThemeIcon(true);
  } else {
    document.documentElement.classList.remove('light');
    updateThemeIcon(false);
  }

  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
  });

  function updateThemeIcon(isLight) {
    if (isLight) {
      // Moon icon for light mode (to switch to dark)
      themeIcon.innerHTML = `<path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>`;
    } else {
      // Sun icon for dark mode (to switch to light)
      themeIcon.innerHTML = `<path d="M216.7,152.6A96,96,0,0,1,103.4,39.3,8,8,0,0,0,93,30,112,112,0,1,0,226,163,8,8,0,0,0,216.7,152.6Z"></path>`;
    }
  }
});
