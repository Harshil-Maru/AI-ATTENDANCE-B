document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple validation (replace with actual authentication)
    if (username === "admin" && password === "admin123") {
        window.location.href = "admin1.html"; // Redirect to admin dashboard
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password!";
        document.getElementById("error-message").style.color = "red";
    }
});
