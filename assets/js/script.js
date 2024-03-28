$(document).ready(function(){
    // Seleccionamos el botón por su ID y agregamos un evento de clic
    $("#enviarCorreo").click(function(){
        // Mostramos una alerta cuando se hace clic en el botón
        alert("El correo fue enviado correctamente...");
    });

    // Inicialización de tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});
