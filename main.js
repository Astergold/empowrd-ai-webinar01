// Every "Register" link scrolls to the form panel and moves focus there,
// so keyboard and screen-reader users land on the form too.
function smoothScrollToRegister(event) {
  const panel = document.getElementById('register');
  if (!panel) return;
  event.preventDefault();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  panel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  // Focus the panel, not an input: focusing an input pops the phone keyboard.
  panel.focus({ preventScroll: true });
}

document.querySelectorAll('a[href="#register"]').forEach((link) => {
  link.addEventListener('click', smoothScrollToRegister);
});
