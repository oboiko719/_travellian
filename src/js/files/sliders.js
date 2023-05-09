/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, Controller, Pagination  } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.destinations__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.destinations__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.destinations__button.swiper-button-prev',
				nextEl: '.destinations__button.swiper-button-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 1.4,
					spaceBetween: 32,
					//autoHeight: true,
				},

				1152: {
					slidesPerView: 2.7,
					spaceBetween: 32,
				},
				1440: {
				 	slidesPerView: 3,
				 	spaceBetween: 32,
				 },
			},
			
			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.offer__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.offer__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.offer__button.swiper-button-prev',
				nextEl: '.offer__button.swiper-button-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 2,
					spaceBetween: 32,
					//autoHeight: true,
				},
     
				1152: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
				/*
				1440: {
				 	slidesPerView: 3,
				 	spaceBetween: 32,
				 },
				 */
			},
			
			// Події
			on: {

			}
		});
	}
	
	if (document.querySelector('.planners__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.planners__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Controller, Pagination ],
			direction:'horizontal',

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			// Пагінація			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
/*
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.planners__button.swiper-button-prev',
				nextEl: '.planners__button.swiper-button-next',
			},
			*/
			/*
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 1.2,
					spaceBetween: 32,
				},     
				1152: {
					slidesPerView: 2,
					spaceBetween: 32,
				},				
				1440: {
				 	slidesPerView: 3,
				 	spaceBetween: 32,
				 },				 
			},
			*/
			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.gallery__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.gallery__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Thumbs, Controller],
			// observer: true,
			// observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
	

			//direction: 'vertical',

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.gallery__button.swiper-button-prev',
				nextEl: '.gallery__button.swiper-button-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				478: {
					slidesPerView: 1.6,
					spaceBetween: 32,
					//direction: 'horizontal',
					//direction: 'vertical',
					//autoHeight: true,
				},
				
				768: {
					slidesPerView: 2.3,
					spaceBetween: 32,
					//direction: 'horizontal',
					//direction: 'vertical',
					//autoHeight: true,
				},

				1152: {
					slidesPerView: 3.3,
					spaceBetween: 32,
				},
				1440: {
				 	slidesPerView: 4,
				 	spaceBetween: 32,
					 loop: true,
				 },				
			},
			
			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.experiences__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.experiences__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Thumbs, Controller],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.experiences__button.swiper-button-prev',
				nextEl: '.experiences__button.swiper-button-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 1.4,
					spaceBetween: 32,
					//direction: 'vertical',
					//autoHeight: true,
				},

				1152: {
					slidesPerView: 2.12,
					spaceBetween: 32,
				},
				1440: {
				 	slidesPerView: 2.3,
				 	spaceBetween: 32,
				 },
				 
			},
			
			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
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
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});