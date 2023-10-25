import { data } from './data'
import Swiper from 'swiper' // Инициализация слайдера
import { Navigation, Pagination } from 'swiper/modules' // Инициализация иконок, пагинации и т.д.

const GLOBAL = {
  currentPage: window.location.pathname,
}

/**
 * Функция отрисовки данных
 * @param {string} filterValue - значение фильтра по категории
 * @param {string} searchValue - значение поиска
 */
const renderData = (filterValue, searchValue) => {
  const swiperWrapper = document.querySelector('.swiper-wrapper')

  swiperWrapper.innerHTML = '' // Очистка существующих карточек

  /**
   * Функция фильтрации и поиска данных
   * @param {string} filterValue - значение фильтра по категории
   * @param {string} searchValue - значение поиска
   * @returns {Array} Отфильтрованный массив данных
   */
  const filterAndSearch = (filterValue, searchValue) => {
    return data.filter((product) => {
      // проверка фильтрации по категории
      if (filterValue !== 'all' && product.category !== filterValue) {
        // исключаем товары, к-ые не соотв. выбранной категории
        return false
      }
      // проверка поиска по названию товара (без учета регистра)
      // if(searchValue) {

      // }
      // если товар прошел оба условия, то он остается в результате фильтрации
      return true
    })
  }

  const filteredData = filterAndSearch(filterValue, searchValue)

  filteredData.forEach(function (product) {
    const div = document.createElement('div') // Создать дивку
    div.classList.add('swiper-slide') // Добавить класс дивке

    div.innerHTML = `
    <div class="card-wrapper">

      <a class="card-link" href="tasks-details.html?id=${product.id}" target="_blank" rel="noopener noreferrer nofollow"></a>
        <div class="card">
            <div class="card-image skeleton">
              <img src="${product.imgSrc}" alt="${product.name}" />
              <svg class="card-heart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                ></path>
              </svg>
              <!-- <div class="card-host">${product.name}</div> -->
            </div>

            <div class="card-text">
              <div class="flex-start">
                <h3 class="card-text__title skeleton">
                  Ponta Delgada Ponta Delgada Ponta Delgada Ponta Delgada Ponta Delgada Ponta Delgada
                </h3>

                <div class="card-text__rating flex">
                  <svg
                    class="star"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5_387)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.66024 1.09214L4.11374 4.42401L0.416242 4.90026C0.344975 4.90933 0.277811 4.93867 0.222742 4.98481C0.167672 5.03094 0.127013 5.09193 0.105603 5.16051C0.0841922 5.22908 0.0829308 5.30237 0.101969 5.37164C0.121007 5.44091 0.159542 5.50326 0.212992 5.55126L2.94787 8.01314L2.21099 11.7076C2.19681 11.7784 2.20337 11.8518 2.22989 11.919C2.25641 11.9862 2.30176 12.0443 2.36049 12.0863C2.41922 12.1283 2.48883 12.1525 2.56097 12.1559C2.6331 12.1593 2.70468 12.1418 2.76712 12.1055L5.99999 10.2316L9.23437 12.1055C9.29677 12.1416 9.36826 12.159 9.44028 12.1556C9.5123 12.1521 9.5818 12.128 9.64045 12.086C9.69909 12.0441 9.7444 11.9861 9.77095 11.9191C9.7975 11.852 9.80415 11.7787 9.79012 11.708L9.05324 8.01314L11.7881 5.55126C11.8414 5.50326 11.8799 5.44097 11.8989 5.37178C11.9178 5.3026 11.9166 5.22941 11.8952 5.16092C11.8739 5.09243 11.8333 5.0315 11.7784 4.98536C11.7234 4.93923 11.6564 4.90982 11.5852 4.90064L7.88774 4.42401L6.34012 1.09214C6.31001 1.0273 6.262 0.972414 6.20174 0.933955C6.14148 0.895495 6.07148 0.875061 5.99999 0.875061C5.9285 0.875061 5.85851 0.895495 5.79824 0.933955C5.73798 0.972414 5.68997 1.0273 5.65987 1.09214H5.66024Z"
                        fill="#222222"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_387">
                        <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span class="skeleton">${product.rating}</span>
                </div>
              </div>

              <div class="card-text__descr text-secondary skeleton">
                5,876 kilometers away 5,876 kilometers away 5,876 kilometers away 5,876 kilometers away
              </div>
              <div class="card-text__config text-secondary skeleton">1 queen bed</div>
              <div class="card-text__date text-secondary skeleton">Oct 23 - 28</div>
              <div class="card-text__price flex text-secondary skeleton">
                <span class="price-prev">$289</span>
                <span class="price-current">${product.price}</span>
                <span class="price-total">$120 total</span>
              </div>

              <div class="card-bottom">
                <button data-variant="primary" class="skeleton">Add to card</button>
              </div>
            </div>
          </div>
        <!-- end .card  -->
      </div>
    `

    swiperWrapper.appendChild(div) // Вставка сформированной дивки в swiperWrapper
  })

  initTasksSwiper() // Вызов функции для инициализации слайдера
}

// вызов функции для первичной отрисовки
renderData('all', '')

function displayTasksDetails() {
  const taskUrlId = window.location.search.split('=')[1] // извлекаем id из адресной строки

  const details = data // получение данных из data

  const cardInfo = details.find(function (card) {
    return card.id === taskUrlId
  })

  const div = document.createElement('div')

  div.innerHTML = `
    <div class="details-flex">
      <div class="details-card">
        <!-- Slider main container and our classes -->
        <div class="swiper card-image">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            ${cardInfo?.galleryImages
              .map(
                (image) => `
              <div class="swiper-slide">
                <img src="${image}" alt="${cardInfo?.name}"></img>
              </div>`
              )
              .join('')}
          </div>
          <div class="card-info">
            <svg class="details-heart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
              </path>
            </svg>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="details-information">
        <div class="information-descrption">
          <h2 class="descrption-title">${cardInfo?.name}</h2>
          <h3 class="descrption-subtitle">${cardInfo?.description}</h3>

          <h3 class="descrption-subtitle">Price:</h3>
          <p>${cardInfo?.price}</p>
          <h3 class="descrption-subtitle">Category:</h3>
          <p>${cardInfo?.category}</p>
      </div>
    </div>
  `

  document.querySelector('#tasks-details').appendChild(div)

  initTasksDetailsSwiper()
}

/* Слайдер tasks */
function initTasksSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
  })
}

/* Слайдер tasks-details */
function initTasksDetailsSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })
}

// Инициализация перехода по страницам
function init() {
  console.log(GLOBAL.currentPage)
  switch (GLOBAL.currentPage) {
    case '/tasks.html':
      renderData()
      break
    case '/tasks-details.html':
      displayTasksDetails()
      break
  }
}

document.addEventListener('DOMContentLoaded', init)

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
