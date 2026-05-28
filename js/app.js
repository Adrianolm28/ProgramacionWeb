document.addEventListener("DOMContentLoaded", function() {
    
    const elementosAnimables = document.querySelectorAll('.introduccion, .caja-estadistica, .celda, .contenedor-contacto');
    
    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('animar-entrada');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elementosAnimables.forEach(elemento => {
        elemento.classList.add('animar-entrada');
        observador.observe(elemento);
    });

    const formulario = document.querySelector('.formulario');
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();
            
            const nombre = formulario.querySelector('input[type="text"]').value;
            const correo = formulario.querySelector('input[type="email"]').value;
            
            if(nombre === "" || correo === "") {
                alert("Por favor, completa los campos requeridos para enviar tu consulta.");
            } else {
                alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje y te contactaremos pronto.`);
                formulario.reset();
            }
        });
    }
});