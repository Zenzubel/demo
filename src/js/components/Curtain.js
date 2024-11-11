
document.addEventListener('DOMContentLoaded', () => {
	function curtain() {
		const madal = document.querySelectorAll('[data-modal-curtain]');
		const mediaMd = window.matchMedia('(max-width: 1024px)');
		if (madal && mediaMd.matches) {
			madal.forEach(modalEl => {
				const curtain = modalEl.querySelector('[data-curtain]');
				const toutcher = modalEl.querySelector('[data-curtain-toutcher]');

				let height = 390;
				curtain.style.cssText = `height: ${height}px`;

				// Функция для препроцессинга нажатий
				function prepareTouches(e) {
					return Array.prototype.map.call(e.targetTouches, (t) => {
						return {
							x: t.clientX,
							y: t.clientY,
						};
					});
				}

				// Смещение нашего квадрата относительно начала координат
				const dragPosition = {
					x: 0,
					y: 0,
				};

				// Тут мы будем хранить позицию пальца относительно верхнего, правого угла прямоугольника
				const touchOffset = {
					x: 0,
					y: 0,
				};

				toutcher.addEventListener("touchstart", (e) => {
					e.preventDefault();
					const touches = prepareTouches(e);
					// Этот обработчик события актуален только для движения одним пальцем
					if (touches.length === 1) {
						const { x, y } = touches[0];
						// Считаем стартовый отступ пальца от начала координат
						touchOffset.x = x - dragPosition.x;
						touchOffset.y = y - dragPosition.y;
					}
				});

				toutcher.addEventListener("touchmove", (e) => {
					e.preventDefault();
					const touches = prepareTouches(e);
					// Этот обработчик события актуален только для движения одним пальцем
					if (touches.length === 1) {
						// Получаем координаты нашей единственной точки
						const { x, y } = touches[0];
						// Смещаем начальные координаты на высчитанный на старте отступ
						// dragPosition.x = x - touchOffset.x;
						dragPosition.y = y - touchOffset.y;
						// Смещаем квадрат на эти координаты
						// curtain.style.transform = `translate(${dragPosition.x}px, ${dragPosition.y}px)`;

						curtain.style.cssText = `height: ${height - dragPosition.y}px`;

						if (dragPosition.y >= 350) {
							modalEl.classList.remove('active');
							function firstPos() {
								curtain.style.cssText = `height: ${height}px`;
							}
							setTimeout(firstPos, 300);
							dragPosition.y = 0;
						}
					}
				});
			});
		}
	}
	curtain();
});