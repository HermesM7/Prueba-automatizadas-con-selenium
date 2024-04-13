    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Obtener las credenciales almacenadas en localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Verificar si las credenciales coinciden
        if (username === storedUsername && password === storedPassword) {
            alert('Login successful');
            // Redirige a la página de dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password');
        }
    });

