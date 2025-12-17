document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorBox = document.getElementById('error-message');

    errorBox.textContent = "";

    if (!email || !password) {
        errorBox.textContent = "Both fields are required!";
        return;
    }

    if (email === "user@example.com" && password === "password123") {
        window.location.href = "dashboard.html";
    } else {
        errorBox.textContent = "Invalid credentials, please try again.";
    }
});
