document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-btn');

    logoutButton.addEventListener('click', function() {
        // Limpiar la sesión o realizar cualquier otra tarea necesaria al cerrar sesión

        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'index.html';
    });
});
