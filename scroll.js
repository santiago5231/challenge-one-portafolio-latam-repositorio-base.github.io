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



// Event listeners para los botones de retroceso y continuar
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Llamar a updateNavButtons al cargar la página para configurar la visibilidad inicial
window.addEventListener('load', () => {
    updateNavButtons();
});

// Event listener para detectar el scroll y actualizar la visibilidad de los botones
document.querySelector('.academic__courses').addEventListener('scroll', updateNavButtons);
