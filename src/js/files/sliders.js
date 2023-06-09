/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
	Navigation,
	// Pagination
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper__types')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper__types', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 60,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination-types',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-types-btn_next',
				prevEl: '.swiper-types-btn_prev',
			},

			breakpoints: {
				320: {
					spaceBetween: 0,
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},

			on: {

			}
		});
	}
	if (document.querySelector('.swiper__sets')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper__sets', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 60,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination-types',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-types-btn_next',
				prevEl: '.swiper-types-btn_prev',
			},

			breakpoints: {
				320: {
					spaceBetween: 0,
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},

			on: {

			}
		});
	}
	if (document.querySelector('.docs__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.docs__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 60,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.swiper-pagination-types',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.swiper-types-btn_next',
				prevEl: '.swiper-types-btn_prev',
			},

			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 0,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 30,
			// 	},
			// 	992: {
			// 		enabled: true,
			// 		slidesPerView: 3,
			// 		spaceBetween: 60,
			// 	},
			// 	// 1268: {
			// 	// 	slidesPerView: 4,
			// 	// 	spaceBetween: 30,
			// 	// },
			// },

			on: {

			}
		});
	}
	// if (document.querySelector('.swiper__sets')) { // Указываем класс нужного слайдера
	// 	// Создаем слайдер
	// 	new Swiper('.swiper__sets', {
	// 		// Подключаем модули слайдера
	// 		// для конкретного случая
	// 		modules: [Navigation],
	// 		/*
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 3,
	// 		spaceBetween: 60,
	// 		// autoHeight: true,
	// 		speed: 800,
	// 		// watchOverflow: true,

	// 		// touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,
	// 		// Dotts
	// 		// pagination: {
	// 		// 	el: '.swiper-pagination',
	// 		// 	clickable: true,
	// 		// },
	// 		// Arrows
	// 		navigation: {
	// 			nextEl: '.swiper-types-btn_next',
	// 			prevEl: '.swiper-types-btn_prev',
	// 		},

	// 		breakpoints: {
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 30,
	// 			},
	// 			992: {
	// 				enabled: true,
	// 				slidesPerView: 3,
	// 				spaceBetween: 60,
	// 			},
	// 			// 1268: {
	// 			// 	slidesPerView: 4,
	// 			// 	spaceBetween: 30,
	// 			// },
	// 		},

	// 		on: {

	// 		}
	// 	});
	// }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});