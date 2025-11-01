// Aguarda o DOM (estrutura HTML) ser completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DO SCROLL DO MENU ---
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --- LÓGICA DO DARK MODE ---
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === "dark-mode") {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light-mode");
        }
    });
    
    console.log("Site 'Conectando Gerações' carregado!");

});
