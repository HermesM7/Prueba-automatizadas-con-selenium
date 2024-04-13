document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        // Verificar si se proporcionaron tanto el nombre de usuario como el correo electrónico
        if (!username || !email) {
            alert('Both username and email are required');
            return;
        }

        // Aquí puedes agregar la lógica para enviar un correo electrónico de recuperación de contraseña
        alert('Password recovery email sent');
        // Redirige a la página de inicio de sesión o al dashboard
        window.location.href = 'index.html'; // Cambiar a la página correspondiente
    });
});
