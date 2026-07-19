/**
 * ==========================================
 * VanApps - scroll.js
 * Scroll Features
 * ==========================================
 */

"use strict";

function initScroll() {

    const backToTop = document.querySelector(".back-to-top");
    const progressBar = document.querySelector(".scroll-progress");

    /* ==========================
       UPDATE SCROLL
    ========================== */

    function updateScroll() {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        /* Progress Bar */

        if (progressBar) {

            progressBar.style.width = progress + "%";

        }

        /* Back To Top */

        if (backToTop) {

            if (scrollTop > 300) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }

    }

    /* ==========================
       BACK TO TOP
    ========================== */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================
       SMOOTH ANCHOR LINK
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    updateScroll();

    window.addEventListener("scroll", updateScroll);

}