document.addEventListener('DOMContentLoaded', () => {

	function findScroll() {
		const findSearchScroll = document.querySelector('#modal-search');

		if (findSearchScroll) {
			const block = document.querySelector('[data-search-scroll]');
			findSearchScroll.addEventListener('scroll', function (e) {
				const position = findSearchScroll.scrollTop;
				if (position > 0) {
					block.classList.add('active');
				}
				if (position <= 0) {
					block.classList.remove('active');
				}
			});
		}
	}
	findScroll();
	function foundSearch() {
		const modal = document.querySelector('#modal-search');
		const input = modal.querySelector('[data-search-input]');
		const clear = modal.querySelector('[data-clear-input]');
		const found = modal.querySelector('[data-found]');
		const notFound = modal.querySelector('[data-notfound]');
		const searchList = modal.querySelector('[data-search-list]');

		input.addEventListener('input', (event) => {
			const target = event.target;

			notFound.classList.add('active');
			if (input.value.length > 2) {
				notFound.classList.remove('active');
				found.classList.add('active');
				searchList.classList.add('active');
				clear.classList.add('active');
			} else {
				searchList.classList.remove('active');
				found.classList.remove('active');
				clear.classList.remove('active');
				notFound.classList.add('active');
			}
		});

		clear.addEventListener('click', (event) => {
			input.value = '';

			searchList.classList.remove('active');
			found.classList.remove('active');
			clear.classList.remove('active');
			notFound.classList.add('active');
		})
	}
	foundSearch();
});