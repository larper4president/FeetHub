document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorBox = document.getElementById('signup-error');

    // Clear previous messages
    errorBox.textContent = "";

    if (!username || !email || !password || !confirmPassword) {
        errorBox.textContent = "All fields are required!";
        return;
    }

    if (password !== confirmPassword) {
        errorBox.textContent = "Passwords do not match!";
        return;
    }

    // Success — you can also show a success message if you want
    window.location.href = "login.html";
});
