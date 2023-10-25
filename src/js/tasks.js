import { data } from './data'
import Swiper from 'swiper' // Инициализация слайдера
import { Navigation, Pagination } from 'swiper/modules' // Инициализация иконок, пагинации и т.д.

const GLOBAL = {
  currentPage: window.location.pathname,
}

// Функция отрисовки карточек
const renderData = () => {
  const swiperWrapper = document.querySelector('.swiper-wrapper')

  data.forEach(function (product) {
    const div = document.createElement('div') // Создать дивку
    div.classList.add('swiper-slide') // Добавить класс дивке

    div.innerHTML = `
      <a
        class="tasks-link"
        href="tasks-details.html?id=${product.id}"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div class="tasks-card">
          <div class="skeleton tasks-card__image">
            <img src="${product.imgSrc}" alt="${product.name}"/>
          </div>
        </div>
      </a>
    `

    swiperWrapper.appendChild(div) // Вставка сформированной дивки в swiperWrapper

    initTasksSwiper() // Вызов функции для инициализации слайдера
  })
}

renderData()

/* Слайдер tasks */
function initTasksSwiper() {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

// Инициализация перехода по страницам
// function init() {
//     switch (GLOBAL.currentPage) {
//         case "/tasks.html":
//             renderData();
//             break;
//         case "tasks-details.html" :
//             displayTasksDetails();
//             break;
//     }
// }

// document.addEventListener("DOMContentLoaded", init);

// Skeleton
window.addEventListener('load', () => {
  const skeletons = document.querySelectorAll('.skeleton')

  skeletons.forEach(function (element) {
    element.classList.remove('skeleton')
  })
})

// Иконки heart /
const hearts = document.querySelectorAll('.card-heart')

hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('heart-active')
  })
})
