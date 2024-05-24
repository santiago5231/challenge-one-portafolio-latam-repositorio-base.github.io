document.querySelector('formcontato__text').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    // Aquí puedes agregar código para validar el formulario si es necesario

    // Envía el formulario manualmente
    fetch('https://formsubmit.co/tronik5231@gmail.com', {
        method: 'POST',
        body: new FormData(event.target) // event.target es el formulario
    }).then(function() {
        // Después de enviar el formulario, redirige al usuario
        window.location.href = 'https://santiago5231.github.io/challenge-one-portafolio-latam-repositorio-base.github.io/';
    });
});