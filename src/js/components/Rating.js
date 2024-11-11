document.addEventListener('DOMContentLoaded', () => {
  const starsParent = document.querySelectorAll('.rait-parent-js');

  if (starsParent) {
    starsParent.forEach((parent) => {
      const starsSvg = parent.querySelectorAll('.star-svg-js');
      const stars = parent.querySelectorAll('.rait-star-js');
      const raitActivePath = parent.getAttribute('data-active-star');
      const raitUnactivePath = parent.getAttribute('data-unactive-star');

      function unactive() {
        starsSvg.forEach((svg) => {
          const raitUnactivePath = svg.parentElement.getAttribute('data-unactive-star');
          svg.firstElementChild.setAttribute('xlink:href', `svg/sprite.svg#${raitUnactivePath}`);
        });
      }
      unactive();

      function firstRait() {
        const firstRaitNum = parent.getAttribute('data-first-rait');
        stars.forEach((star, i) => {
          if (i + 1 <= firstRaitNum) {
            star.firstElementChild.firstElementChild.setAttribute(
              'xlink:href',
              `svg/sprite.svg#${raitActivePath}`
            );
          } else {
            star.firstElementChild.firstElementChild.setAttribute(
              'xlink:href',
              `svg/sprite.svg#${raitUnactivePath}`
            );
          }
        });
      }
      firstRait();

      parent.addEventListener('click', (event) => {
        const target = event.target;
        const raitNum = target.getAttribute('data-raiting');

        if (target.classList.contains('rait-star-js')) {
          stars.forEach((star, i) => {
            if (i + 1 <= raitNum) {
              star.firstElementChild.firstElementChild.setAttribute(
                'xlink:href',
                `svg/sprite.svg#${raitActivePath}`
              );
            } else {
              star.firstElementChild.firstElementChild.setAttribute(
                'xlink:href',
                `svg/sprite.svg#${raitUnactivePath}`
              );
            }
          });
        }
      });
    });
  }
});
