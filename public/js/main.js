document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todas las barras de progreso
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(function(bar) {
        // Obtenemos el porcentaje de cada barra desde el atributo data-percentage
        const percentage = bar.getAttribute('data-percentage');

        // Usamos setTimeout para animar la barra
        setTimeout(function() {
            bar.style.width = percentage + '%';
            bar.textContent = percentage + '%';
        }, 500); // Un pequeño retardo para la animación
    });
});
