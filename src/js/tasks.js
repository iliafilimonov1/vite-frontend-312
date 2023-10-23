// Skeleton
window.addEventListener("load", () => {
    const skeletons = document.querySelectorAll(".skeleton");

    skeletons.forEach(function (element) {
        element.classList.remove("skeleton");
    });
});

// Иконки heart /
const hearts = document.querySelectorAll('.card-heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('heart-active');
    });
});