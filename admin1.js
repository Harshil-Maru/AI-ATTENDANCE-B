document.addEventListener("DOMContentLoaded", function () {
    const profileMenu = document.querySelector(".profile-menu");
    const profileIcon = document.querySelector(".profile-icon");

    profileIcon.addEventListener("click", function (event) {
        profileMenu.classList.toggle("active");
        event.stopPropagation();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileMenu.contains(event.target)) {
            profileMenu.classList.remove("active");
        }
    });
});

function toggleTheme() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
}

function logout() {
    window.location.href = "index.html";
}
