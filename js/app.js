/*==================================================
 CyberShield Portfolio
 Author : Amit Pandey
 Version : 1.0
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("CyberShield Portfolio Loaded");

    /*=========================================
      AOS
    =========================================*/

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-in-out"
        });
    }

    /*=========================================
      Sticky Navbar
    =========================================*/

    const navbar = document.querySelector(".glass-nav");

    function navbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.padding = "10px 0";
            navbar.style.background = "rgba(8,15,28,.96)";
            navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

        } else {

            navbar.style.padding = "15px 0";
            navbar.style.background = "rgba(15,23,42,.90)";
            navbar.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", navbarScroll);
    navbarScroll();

    /*=========================================
      Smooth Scroll
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    /*=========================================
      Active Navigation
    =========================================*/

    const navLinks = document.querySelectorAll(".nav-link");

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "index.html" && href === "#")
        ) {
            link.classList.add("active");
        }

    });

    /*=========================================
      Animated Counter
    =========================================*/

    function animateCounter(counter) {

        const target = parseInt(counter.dataset.target);

        if (isNaN(target)) return;

        let value = 0;

        const speed = target / 120;

        function update() {

            value += speed;

            if (value < target) {

                counter.innerText = Math.floor(value) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        }

        update();

    }

    const counters = document.querySelectorAll(".counter");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        });

        counters.forEach(counter => observer.observe(counter));

    }

    /*=========================================
      Hero Image Effect
    =========================================*/

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        heroImage.addEventListener("mousemove", () => {

            heroImage.style.transform = "scale(1.04) rotate(1deg)";

        });

        heroImage.addEventListener("mouseleave", () => {

            heroImage.style.transform = "scale(1) rotate(0deg)";

        });

    }

    /*=========================================
      Scroll To Top Button
    =========================================*/

    const topButton = document.createElement("button");

    topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

    topButton.id = "scrollTop";

    document.body.appendChild(topButton);

    Object.assign(topButton.style, {

        position: "fixed",
        right: "25px",
        bottom: "25px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        background: "#0078D4",
        color: "#fff",
        cursor: "pointer",
        display: "none",
        zIndex: "9999",
        fontSize: "18px",
        boxShadow: "0 8px 20px rgba(0,0,0,.35)",
        transition: ".3s"

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    /*=========================================
      Typing Effect
    =========================================*/

    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "Cybersecurity Manager",
            "SIEM Specialist",
            "SOC Leader",
            "Firewall Expert",
            "Cloud Security Professional"
        ];

        let wordIndex = 0;
        let letterIndex = 0;
        let deleting = false;

        function type() {

            const current = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    current.substring(0, letterIndex++);

                if (letterIndex > current.length) {

                    deleting = true;

                    setTimeout(type, 1200);

                    return;

                }

            } else {

                typingElement.textContent =
                    current.substring(0, letterIndex--);

                if (letterIndex < 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {

                        wordIndex = 0;

                    }

                }

            }

            setTimeout(type, deleting ? 40 : 90);

        }

        type();

    }

});
window.addEventListener("load",()=>{

document.getElementById("loader")
.style.display="none";

});
