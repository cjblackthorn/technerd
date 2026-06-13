document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = link.closest('.mobile-nav');

    if (menu) {
      menu.open = false;
    }
  });
});
