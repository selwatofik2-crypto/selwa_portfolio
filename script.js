// =====================================================
// SELWA TOFIK PORTFOLIO
// Main JavaScript
// =====================================================


// =====================================================
// 1. TYPING EFFECT
// =====================================================

const heroTitle = document.querySelector(".hero-text h2");

const typingText = "Frontend Developer";

let typingIndex = 0;


function typingEffect() {

    if (!heroTitle) return;

    if (typingIndex < typingText.length) {

        heroTitle.textContent +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typingEffect, 100);

    }

}


// =====================================================
// 2. PAGE LOADER
// =====================================================

window.addEventListener("load", () => {

    typingEffect();

    const loader =
        document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 700);

    }

});


// =====================================================
// 3. MOBILE MENU
// =====================================================

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");


if (menuToggle && navMenu) {

    const menuIcon =
        menuToggle.querySelector("i");


    menuToggle.addEventListener("click", () => {

        const isOpen =
            navMenu.classList.toggle("active");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        if (isOpen) {

            menuIcon.classList.remove("fa-bars");

            menuIcon.classList.add("fa-xmark");

        } else {

            menuIcon.classList.remove("fa-xmark");

            menuIcon.classList.add("fa-bars");

        }

    });


    // Close mobile menu after clicking a link

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuIcon.classList.remove("fa-xmark");

            menuIcon.classList.add("fa-bars");

        });

    });

}


// =====================================================
// 4. DARK MODE
// =====================================================

const themeToggle =
    document.getElementById("theme-toggle");


if (themeToggle) {

    const themeIcon =
        themeToggle.querySelector("i");


    function updateThemeIcon() {

        const darkMode =
            document.body.classList.contains("dark-mode");


        if (darkMode) {

            themeIcon.classList.remove("fa-moon");

            themeIcon.classList.add("fa-sun");

        } else {

            themeIcon.classList.remove("fa-sun");

            themeIcon.classList.add("fa-moon");

        }

    }


    themeToggle.addEventListener("click", () => {

        const darkMode =
            document.body.classList.toggle("dark-mode");


        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );


        updateThemeIcon();

    });


    // Restore saved theme

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    updateThemeIcon();

}


// =====================================================
// 5. SCROLL REVEAL
// =====================================================

const sections =
    document.querySelectorAll("section");


function revealSections() {

    const screenPosition =
        window.innerHeight * 0.85;


    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;


        if (sectionTop < screenPosition) {

            section.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealSections
);


// Reveal visible sections immediately

revealSections();


// =====================================================
// 6. ACTIVE NAVIGATION
// =====================================================

const pageSections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("#nav-menu a");


function updateActiveNavigation() {

    let currentSection = "";


    pageSections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


// Set initial active link

updateActiveNavigation();


// =====================================================
// 7. SCROLL TO TOP
// =====================================================

const scrollTopButton =
    document.getElementById("scroll-top");


if (scrollTopButton) {

    function updateScrollButton() {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("show");

        } else {

            scrollTopButton.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateScrollButton
    );


    scrollTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    updateScrollButton();

}


// =====================================================
// 8. FOOTER YEAR
// =====================================================

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Selwa Tofik. All Rights Reserved.`;

}


// =====================================================
// 9. CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            alert(
                "Thank you for your message! The contact form will be connected to email later."
            );

            contactForm.reset();

        }
    );

}