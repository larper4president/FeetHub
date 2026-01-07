document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const messageBox = document.getElementById('login-message');

    // Reset message
    messageBox.textContent = "";
    messageBox.className = "";

    if (!email || !password) {
        messageBox.textContent = "Both fields are required.";
        messageBox.classList.add("error");
        return;
    }

    if (email === "user@example.com" && password === "password123") {
        messageBox.textContent = "Login successful! Redirecting...";
        messageBox.classList.add("success");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        messageBox.textContent = "Invalid credentials, please try again.";
        messageBox.classList.add("error");
    }
});
