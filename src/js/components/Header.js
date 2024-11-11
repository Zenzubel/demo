document.addEventListener('DOMContentLoaded', () => {
	const tabParent = document.querySelector('.drop-js');
	const comparisonCard = document.querySelector('.comparison-js');
	const mediaSm = window.matchMedia('(max-width: 768px)');

	function removeBlock() {
		const getContent = document.querySelector('.get-content-js');
		const addContent = document.querySelector('.add-content-js');
		if (addContent) {
			const getMedia = addContent.getAttribute('data-media');
			const getClass = addContent.getAttribute('data-class');
			const media = window.matchMedia(`(max-width: ${getMedia}px)`);



			const newBlock = document.createElement('div');
			newBlock.className = `${getClass}`;
			addContent.after(newBlock);
			newBlock.innerHTML += getContent.innerHTML;

			if (mediaSm.matches) {
				// dropMenumobile();
			}
			if (media) {
				if (media.matches && getContent) {
					showBlock();
				} else {
					hideBlock();
				}
			}
			window.addEventListener('resize', () => {
				if (window.innerWidth <= getMedia) {
					showBlock();
				} else {
					hideBlock();
				}
			});
			function showBlock() {
				newBlock.classList.add('show');
				newBlock.classList.remove('hide');
			}
			function hideBlock() {
				newBlock.classList.remove('show');
				newBlock.classList.add('hide');
			}
		}
	}
	removeBlock();

	function dropCatalog() {
		const getCatalog = document.querySelector('.catalog-btn-js');

		if (getCatalog) {
			window.addEventListener('click', (event) => {
				const target = event.target;
				if (
					target.classList.contains('catalog-btn-js') ||
					target.parentElement.classList.contains('catalog-btn-js') ||
					target.parentElement.parentElement.classList.contains('catalog-btn-js')
				) {
					getCatalog.classList.toggle('active');
					tabParent.classList.toggle('active');
					comparisonCard.classList.toggle('index');
				} else if (!tabParent.contains(target)) {
					getCatalog.classList.remove('active');
					tabParent.classList.remove('active');
				}
			});
		}
	}
	dropCatalog();

	function dropMenumobile() {
		const getCatalogMobile = document.querySelector('.mobile-catalog-btn-js');
		const burger = document.querySelector('.burger-js');
		const modileMenu = document.querySelector('.mobile-menu-js');
		const AddToCart = document.querySelector('.sticky-js');
		const getLinksMobile = document.querySelectorAll('.category-btn-js');
		const body = document.querySelector('body');

		window.addEventListener('click', (event) => {
			const target = event.target;
			if (
				target.classList.contains('mobile-catalog-btn-js') ||
				target.parentElement.classList.contains('mobile-catalog-btn-js') ||
				target.parentElement.parentElement.classList.contains('mobile-catalog-btn-js') ||
				target.parentElement.parentElement.parentElement.classList.contains('mobile-catalog-btn-js')
			) {
				getCatalogMobile.classList.toggle('active');
				target.nextElementSibling.classList.toggle('active');
			}

			if (
				target.classList.contains('category-btn-js') ||
				target.parentElement.classList.contains('category-btn-js') ||
				target.parentElement.parentElement.classList.contains('category-btn-js') ||
				target.parentElement.parentElement.parentElement.classList.contains('category-btn-js')
			) {
				getLinksMobile.forEach((item) => {
					if (
						target === item ||
						target.parentElement === item ||
						target.parentElement.parentElement === item
					) {
						item.classList.toggle('active');
						target.nextElementSibling.classList.toggle('active');
					}
				});
			}

			if (target.classList.contains('burger-js')) {
				burger.classList.toggle('active');
				modileMenu.classList.toggle('active');
				body.classList.toggle('lock');
				if (AddToCart) {
					AddToCart.classList.toggle('active');
				}
				if (comparisonCard) {
					comparisonCard.classList.toggle('index');
				}
			}
		});
	}
	dropMenumobile();

	function catalogPage(selector) {
		const trigger = document.querySelectorAll('.' + selector);
		if (trigger) {
			window.addEventListener('click', (event) => {
				const target = event.target;
				if (
					target.classList.contains(selector) ||
					target.parentElement.classList.contains(selector) ||
					target.parentElement.parentElement.classList.contains(selector) ||
					target.parentElement.parentElement.parentElement.classList.contains(selector)
				) {
					trigger.forEach((item) => {
						if (
							target === item ||
							target.parentElement === item ||
							target.parentElement.parentElement === item
						) {
							item.classList.toggle('active');
							target.nextElementSibling.classList.toggle('active');
						}
					});
				}
			});
		}
	}
	catalogPage('category-page-js');

	function setColumns() {
		const getCatalog = document.querySelectorAll('.products-js');
		getCatalog.forEach((item) => {
			const getCatalogElemrnts = item.children;
			getCatalogElemrnts.forEach((child, i) => {
				if (i + 1 > 6) {
					item.classList.add('drop__catalog--columns');
				}
			});
		});
	}
	setColumns();

	function tabList() {
		if (tabParent) {
			const tabBtn = document.querySelectorAll('.category-btn-js');
			const tabList = document.querySelectorAll('.products-js');

			function hideTab() {
				tabBtn.forEach((item) => {
					item.classList.remove('active');
				});
				tabList.forEach((item) => {
					item.classList.remove('active');
				});
			}

			function showTabs(i = 0) {
				tabList[i].classList.add('active');
				tabBtn[i].classList.add('active');
			}
			hideTab();
			showTabs();

			tabParent.addEventListener('click', (event) => {
				const target = event.target;
				event.preventDefault();
				if (
					target.classList.contains('category-btn-js') ||
					target.parentElement.classList.contains('category-btn-js') ||
					target.parentElement.parentElement.classList.contains('category-btn-js')
				) {
					tabBtn.forEach((item, i) => {
						if (
							target === item ||
							target.parentElement === item ||
							target.parentElement.parentElement === item
						) {
							hideTab();
							showTabs(i);
						}
					});
				}
			});
		}
	}
	tabList();

	function headerScroll() {
		const headerActive = document.querySelectorAll('.scroll-active-js');
		const catalogMobile = document.querySelector('.catalog-mobile-js');

		if (headerActive) {
			if (window.scrollY > 0 && mediaSm.matches && catalogMobile) {
				catalogMobile.classList.add('active');
				headerActive.forEach((item) => {
					item.classList.remove('active');
				});
			} else if (window.scrollY > 0) {
				headerActive.forEach((item) => {
					item.classList.add('active');
				});
			}

			window.addEventListener('scroll', function (e) {
				const position = window.scrollY;

				if (!mediaSm.matches) {
					headerActive.forEach((item) => {
						if (position > 0) {
							item.classList.add('active');
						}

						if (position <= 0) {
							item.classList.remove('active');
						}
					});
				}

				if (mediaSm.matches) {
					if (position > 0) {
						catalogMobile.classList.add('active');
					}

					if (position <= 0) {
						catalogMobile.classList.remove('active');
					}
				}
			});
			window.addEventListener('resize', () => {
				if (mediaSm.matches) {
					headerActive.forEach((item) => {
						item.classList.remove('active');
					});
				}
			});
		}
	}
	headerScroll();
});
