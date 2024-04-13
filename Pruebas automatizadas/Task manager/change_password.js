document.addEventListener('DOMContentLoaded', function() {
    const changePasswordForm = document.getElementById('change-password-form');

    changePasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Obtener la contraseña actual del usuario desde localStorage
        const storedPassword = localStorage.getItem('password');

        // Verificar si la contraseña actual coincide con la almacenada en localStorage
        if (currentPassword !== storedPassword) {
            alert('Current password is incorrect');
            return;
        }

        // Verificar si la nueva contraseña coincide con la confirmación
        if (newPassword !== confirmPassword) {
            alert('New password and confirmation do not match');
            return;
        }

        // Guardar la nueva contraseña en localStorage
        localStorage.setItem('password', newPassword);

        alert('Password changed successfully');
        // Redirige a la página de inicio de sesión o al dashboard
        window.location.href = 'index.html'; // Cambiar a la página correspondiente
    });
});
