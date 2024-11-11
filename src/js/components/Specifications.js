document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.specifications-btn-js');
  const block = document.querySelector('.specifications-js');

  const mediaSm = window.matchMedia('(max-width: 768px)');
  if (mediaSm.matches && btn) {
    btn.classList.add('active');
    block.classList.add('active');
    btn.addEventListener('click', (event) => {
      const target = event.target;
      btn.classList.toggle('active');
      block.classList.toggle('active');

      if (target.classList.contains('specifications-btn-js')) {
        target.classList.toggle('active');
      }
    });
  }
});
