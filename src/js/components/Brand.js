document.addEventListener('DOMContentLoaded', () => {
  function showMore(button) {
    const btn = document.querySelectorAll(button);
    btn.forEach((item) => {
      item.addEventListener('click', (event) => {
        const target = event.target;
        if (target === item) {
          const getAttr = target.getAttribute('data-second-name');
          const getAttr2 = target.getAttribute('data-first-name');
          target.parentElement.previousElementSibling.classList.toggle('active');
          if (target.innerHTML === getAttr2) {
            target.innerHTML = getAttr;
          } else {
            target.innerHTML = getAttr2;
          }
        }
      });
    });
  }
  showMore('.btn-more-js');

  function tags() {
    const tagsParent = document.querySelector('[data-categories-parent]');
    if (tagsParent) {
      const tags = document.querySelectorAll('[data-category-tag]');
      tagsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target.hasAttribute('data-category-tag')) {
          tags.forEach((item, i) => {
            if (target === item) {
              item.classList.add('active');
            } else item.classList.remove('active');
          });
        }
        if (target.hasAttribute('data-category-tag-close')) {
          target.parentElement.classList.add('hide');
        }
      });
    }
  }
  tags();
});
