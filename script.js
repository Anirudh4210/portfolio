// ===== Current year in footer =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ===== Mobile nav toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Close menu when clicking a link (on mobile)
    navLinks.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-link")) {
            navLinks.classList.remove("open");
        }
    });
}

// ===== Highlight active section in navbar =====
const sections = document.querySelectorAll("section[id]");
const navLinkElements = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinkElements.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
