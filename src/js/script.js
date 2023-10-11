import {Modal} from "./components/modal";
import Swiper from "swiper"; // Инициализация слайдера
import {Navigation, Pagination} from "swiper/modules"; // Инициализация иконок, пагинации и т.д.

// Модалка формы
const modalForm = new Modal("#modal", "#signup");
console.log(modalForm);
// Модалка навигации в мобилке
const modalNav = new Modal("#modal-nav", ".burger-menu");
console.log(modalNav);

/* Слайдер в баннере */
const swiper = new Swiper(".swiper", {
    modules: [ Navigation, Pagination ],
    direction: "horizontal",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // breakpoints: {
    //     545: {},
    // },
});
console.log('swiper', swiper);

const inputText = document.querySelector("#register-username");

/* Обработчик событий текстовый инпут */
inputText.addEventListener("change", event => {
    console.log(event.target.value);

    const error = document.querySelector("#username-error");

    // Регулярное выражение для проверки имени пользователя
    const usernamePattern = /^[a-zA-Zа-яА-Я]{3,}$/;

    if (!event.target.value) {
        error.textContent = "";
    } else if (!usernamePattern.test(event.target.value)) {
        error.textContent = "Имя пользователя не соответствует требованиям";
    } else {
        error.textContent = "";
    }
});
