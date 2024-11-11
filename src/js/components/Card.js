document.addEventListener('DOMContentLoaded', () => {
  const findLow = document.querySelectorAll('.low-price-js');
  function toggler(element) {
    const block = document.querySelectorAll(element);
    if (element) {
      block.forEach((item) => {
        item.addEventListener('click', (event) => {
          const target = event.target;
          if (target === item) {
            item.classList.toggle('active');
          }
        });
      });
    }
  }
  toggler('.favorite-card-js');
  toggler('.specifications-btn-js');
  toggler('.specifications-js');

  if (findLow) {
    findLow.forEach((item) => {
      item.parentElement.classList.add('align-top');
    });
  }
});
