// Theme management
(function() {
  const THEME_KEY = 'theme-preference';
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const sunIcon = '☀️';
  const moonIcon = '🌙';

  // Get initial theme
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // If no saved preference, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.textContent = sunIcon;
    } else {
      root.setAttribute('data-theme', 'light');
      if (themeToggle) themeToggle.textContent = moonIcon;
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  }

  // Initialize
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  // Add event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes (only if user hasn't set a preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
