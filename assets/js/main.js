// EET-GS Lab — main.js

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
  }

  // Highlight active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.includes(href) && href !== '/') {
      link.classList.add('active');
    } else if (href === '/' && (path === '/' || path.endsWith('/eetgslab/') || path.endsWith('/eetgslab'))) {
      link.classList.add('active');
    }
  });
});
