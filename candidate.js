document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-btn");
    const errorMessage = document.getElementById("error-message");

    // Restrict username to numeric values only
    usernameInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ""); // Remove non-numeric characters
    });

    // Login button click event
    loginButton.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            errorMessage.textContent = "Please enter both username and password.";
        } else {
            errorMessage.textContent = "";
            window.open("student-dashboard.html", "_self"); // Redirect to dashboard
        }
    });
});
