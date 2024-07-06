 // Función para mover los cursos hacia atrás o adelante
 function moveSlide(direction) {
    const container = document.querySelector('.academic__courses');
    const scrollAmount = container.clientWidth; // Ancho del contenedor

    // Determinar la nueva posición de scroll
    let newPosition = container.scrollLeft + (scrollAmount * direction);

    // Animación de desplazamiento suave
    container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
    });

    // Actualizar visibilidad de botones después del desplazamiento
    updateNavButtons();
}

// Función para actualizar visibilidad de botones
function updateNavButtons() {
    const container = document.querySelector('.academic__courses');
    const backBtn = document.querySelector('.prev');
    const forwardBtn = document.querySelector('.next');

    // Mostrar u ocultar botón de retroceso según la posición actual de scroll
    if (container.scrollLeft > 0) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }

    // Mostrar u ocultar botón de avanzar según la posición actual de scroll
    if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
        forwardBtn.style.display = 'block';
    } else {
        forwardBtn.style.display = 'none';
    }
}

// Event listeners para los botones de retroceso y continuar
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Llamar a updateNavButtons al cargar la página para configurar la visibilidad inicial
window.addEventListener('load', () => {
    updateNavButtons();
});

// Event listener para detectar el scroll y actualizar la visibilidad de los botones
document.querySelector('.academic__courses').addEventListener('scroll', updateNavButtons);
