document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('div.wy-nav-content');
  if (!container) return;

  container.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('../')) {
      link.classList.add('reference-link');
    }
  });
});
