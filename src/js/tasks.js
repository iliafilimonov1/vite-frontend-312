// Иконки heart /
const hearts = document.querySelectorAll('.card-heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('heart-active');
    });
});