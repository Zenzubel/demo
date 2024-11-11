document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.region-input-js');
  const orderBox = document.querySelectorAll('[data-listen]');

  if (input) {
    const list = document.querySelector('.region-list-js');
    const PlaseItem = document.querySelectorAll('[data-place]');

    PlaseItem.forEach((item) => {
      item.innerHTML = item.getAttribute('data-place');
    });

    list.addEventListener('click', (event) => {
      const target = event.target;
      const place = target.getAttribute('data-place');
      input.value = place;
      list.classList.remove('active');
    });

    input.addEventListener('input', function () {
      if (input.value <= 0) {
        list.classList.remove('active');
      } else {
        list.classList.add('active');
      }
    });
  }

  if (orderBox) {
    orderBox.forEach((item) => {
      const radio = item.querySelector('input[type="radio"]');
      item.addEventListener('click', (event) => {
        const target = event.target;
        radio.checked = true;
      });
    });
  }
});
