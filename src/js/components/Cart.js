document.addEventListener('DOMContentLoaded', () => {
  function plusser() {
    const parent = document.querySelectorAll('[data-quantity]');
    if (parent) {
      parent.forEach((item) => {
        const input = item.querySelector('[data-quantity-input]');
        function setValue(varValue) {
          input.value = varValue;
        }
        setValue(input.getAttribute('data-start-value'));
        item.addEventListener('click', (event) => {
          const target = event.target;
          if (target.hasAttribute('data-quantity-plus')) {
            input.value++;
          } else if (target.hasAttribute('data-quantity-minus') && input.value > 1) {
            input.value--;
          }
        });

        input.addEventListener('input', (event) => {
          const target = event.target;
          const maxLength = 3;
          // запрещаем вводить ноль перед числом и ставить ноль в поле
          target.value = target.value.replace(/^[\D0]+|\D/g, '');
          // запрет ввода больше трех символов
          if (input.value.length > maxLength) {
            input.value = input.value.substring(0, maxLength);
          }
        });

        input.addEventListener('focusout', (event) => {
          const target = event.target;
          if (target.value === '') {
            setValue(1);
          }
        });
      });
    }
  }
  plusser();
});
