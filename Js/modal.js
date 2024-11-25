document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón de enviar y el modal
    const enviarBtn = document.getElementById("enviarBtn");
    const modalConfirmacion = new bootstrap.Modal(document.getElementById("modalConfirmacion"));

    // Escucha el clic en el botón
    enviarBtn.addEventListener("click", function() {
        // Abre el modal
        modalConfirmacion.show();
    });
});
