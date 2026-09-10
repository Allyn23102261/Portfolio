document.getElementById('year').textContent = new Date().getFullYear();

// Respect reduced-motion: skip the hero path draw-in and just show it complete.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  const heroPath = document.getElementById('heroPath');
  if (heroPath) {
    heroPath.style.animation = 'none';
    heroPath.style.strokeDashoffset = '0';
  }
}
