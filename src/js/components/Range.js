import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';

document.addEventListener('DOMContentLoaded', () => {
	function rangePrice() {
		const handlesSlider = document.getElementById('slider-handles-price');
		if (handlesSlider) {
			noUiSlider.create(handlesSlider, {
				start: [0, 676000],
				connect: true,
				range: {
					min: 0,
					max: 676000,
				},
				format: wNumb({ decimals: 0 }),
			});

			const inputNumbermin = document.getElementById('input-price-min');
			const inputNumberMax = document.getElementById('input-price-max');
			const inputs = [inputNumbermin, inputNumberMax];

			handlesSlider.noUiSlider.on('update', function (values, handle) {
				const value = values[handle];

				function numberWithSpaces(newValue) {
					return newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
				}
				numberWithSpaces(value);

				const newValue = numberWithSpaces(value);
				if (handle) {
					inputNumberMax.value = newValue;
				} else {
					inputNumbermin.value = newValue;
				}
			});

			inputNumbermin.addEventListener('change', function () {
				noUiSlider.set([null, this.value]);
			});
			inputNumberMax.addEventListener('change', function () {
				noUiSlider.set([null, this.value]);
			});

			inputs.forEach(function (input, handle) {
				input.addEventListener('change', function () {
					handlesSlider.noUiSlider.setHandle(handle, this.value);
				});

				input.addEventListener('keydown', function (e) {
					const values = handlesSlider.noUiSlider.get();
					const value = Number(values[handle]);
					// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
					const steps = handlesSlider.noUiSlider.steps();
					// [down, up]
					const step = steps[handle];
					let position;
					// 13 is enter,
					// 38 is key up,
					// 40 is key down.
					switch (e.which) {
						case 13:
							handlesSlider.noUiSlider.setHandle(handle, this.value);
							break;

						case 38:
							// Get step to go increase slider value (up)
							position = step[1];
							// false = no step is set
							if (position === false) {
								position = 1;
							}
							// null = edge of slider
							if (position !== null) {
								handlesSlider.noUiSlider.setHandle(handle, value + position);
							}
							break;

						case 40:
							position = step[0];
							if (position === false) {
								position = 1;
							}
							if (position !== null) {
								handlesSlider.noUiSlider.setHandle(handle, value - position);
							}
							break;
					}
				});
			});
		}
	}
	rangePrice();

	function rangeSize() {
		const handlesSliderSize = document.getElementById('slider-handles-size');
		if (handlesSliderSize) {

			noUiSlider.create(handlesSliderSize, {
				start: [50, 110],
				connect: true,
				range: {
					min: 0,
					max: 200,
				},
				format: wNumb({ decimals: 0 }),
			});

			const inputNumbermin = document.getElementById('input-size-min');
			const inputNumberMax = document.getElementById('input-size-max');
			const inputs = [inputNumbermin, inputNumberMax];

			handlesSliderSize.noUiSlider.on('update', function (values, handle) {
				const value = values[handle];

				if (handle) {
					inputNumberMax.value = value;
				} else {
					inputNumbermin.value = value;
				}
			});

			inputNumbermin.addEventListener('change', function () {
				noUiSlider.set([null, this.value]);
			});
			inputNumberMax.addEventListener('change', function () {
				noUiSlider.set([null, this.value]);
			});

			inputs.forEach(function (input, handle) {
				input.addEventListener('change', function () {
					handlesSliderSize.noUiSlider.setHandle(handle, this.value);
				});

				input.addEventListener('keydown', function (e) {
					const values = handlesSliderSize.noUiSlider.get();
					const value = Number(values[handle]);
					// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
					const steps = handlesSliderSize.noUiSlider.steps();
					// [down, up]
					const step = steps[handle];
					let position;
					// 13 is enter,
					// 38 is key up,
					// 40 is key down.
					switch (e.which) {
						case 13:
							handlesSliderSize.noUiSlider.setHandle(handle, this.value);
							break;

						case 38:
							// Get step to go increase slider value (up)
							position = step[1];

							// false = no step is set
							if (position === false) {
								position = 1;
							}

							// null = edge of slider
							if (position !== null) {
								handlesSliderSize.noUiSlider.setHandle(handle, value + position);
							}
							break;

						case 40:
							position = step[0];
							if (position === false) {
								position = 1;
							}
							if (position !== null) {
								handlesSliderSize.noUiSlider.setHandle(handle, value - position);
							}
							break;
					}
				});
			});
		}
	}
	rangeSize();
});
