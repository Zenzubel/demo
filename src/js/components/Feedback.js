document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.feedback-btn-js');
  const formBox = document.querySelector('.write-feedback-js');

  if (btn) {
    btn.addEventListener('click', (event) => {
      const target = event.target;
      btn.parentElement.classList.add('active');
      formBox.classList.add('active');
    });
  }
});
