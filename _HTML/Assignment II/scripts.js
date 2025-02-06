document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Dark Mode Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Toggle icon
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

        // Save preference to local storage
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    // Load Dark Mode Preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }
});
