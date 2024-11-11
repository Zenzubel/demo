document.addEventListener('DOMContentLoaded', () => {
	function comparisonScroll() {
		const scrollComparison = document.querySelectorAll('.comparison-js');

		if (scrollComparison) {
			const findScroll = document.querySelector('[data-find-scroll]');
			if (window.scrollY < 0) {
				scrollComparison.forEach((item) => {
					item.classList.remove('active');
				});
			} else if (window.scrollY > 0) {
				scrollComparison.forEach((item) => {
					item.classList.add('active');
				});
			}

			window.addEventListener('scroll', function (e) {
				const position = window.scrollY;
				scrollComparison.forEach(item => {
					if (position > 100) {
						item.classList.add('active');
					} else {
						item.classList.remove('active');
					}
				});
			});
		}
	}
	comparisonScroll();
});
