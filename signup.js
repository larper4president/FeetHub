document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageBox = document.getElementById('signup-message');

    // Reset message
    messageBox.textContent = "";
    messageBox.className = "";

    if (!username || !email || !password || !confirmPassword) {
        messageBox.textContent = "All fields are required.";
        messageBox.classList.add("error");
        return;
    }

    if (password !== confirmPassword) {
        messageBox.textContent = "Passwords do not match.";
        messageBox.classList.add("error");
        return;
    }

    // Success message (NO alert)
    messageBox.textContent = "Sign-up successful! Redirecting...";
    messageBox.classList.add("success");

    setTimeout(() => {
        window.location.href = "homepage.html";
    }, 1500);
});