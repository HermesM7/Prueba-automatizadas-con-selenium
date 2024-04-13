document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Guardar las credenciales en localStorage
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        alert('User registered successfully');
        // Redirige a la página de inicio de sesión
        window.location.href = 'index.html';
    });
});