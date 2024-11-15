document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const leftArrow = container.querySelector('.arrow.left');
    const rightArrow = container.querySelector('.arrow.right');

    // Función para actualizar el estado de las flechas
    const updateArrows = () => {
        const scrollLeft = carousel.scrollLeft;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

        leftArrow.classList.toggle('active', scrollLeft > 0);
        rightArrow.classList.toggle('active', scrollLeft < maxScrollLeft);
    };

    // Evento para desplazar hacia la izquierda
    leftArrow.addEventListener('click', () => {
        if (leftArrow.classList.contains('active')) {
            carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
        }
    });

    // Evento para desplazar hacia la derecha
    rightArrow.addEventListener('click', () => {
        if (rightArrow.classList.contains('active')) {
            carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
        }
    });

    // Actualizar las flechas cuando el carrusel se desplace
    carousel.addEventListener('scroll', updateArrows);

    // Actualiza flechas al cargar la página
    updateArrows();
});
