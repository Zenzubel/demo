document.addEventListener('DOMContentLoaded', () => {
  const parent = document.querySelectorAll('[data-add-raiting]');

  if (parent) {
    parent.forEach((parent) => {
      const getNominalRait = parent.getAttribute('data-add-raiting');
      const stars = parent.querySelectorAll('[data-star]');

      stars.forEach((star, i) => {
        if (i + 1 <= getNominalRait) {
          star.classList.add('active');
        }
      });
    });
  }
});
