/**
 * ==========================================
 * VanApps - navigation.js
 * Header & Mobile Navigation
 * ==========================================
 */

"use strict";

function initNavigation() {

    const menuToggle = document.querySelector(".menu-toggle");

    const mobileNav = document.querySelector(".mobile-nav");

    const overlay = document.querySelector(".mobile-overlay");

    const header = document.querySelector(".site-header");

    /* ==========================
       MOBILE MENU
    ========================== */

    function openMenu() {

        if (!mobileNav || !overlay) return;

        mobileNav.classList.add("active");
        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeMenu() {

        if (!mobileNav || !overlay) return;

        mobileNav.classList.remove("active");
        overlay.classList.remove("active");

        document.body.style.overflow = "";

    }

    if (menuToggle) {

        menuToggle.addEventListener("click", openMenu);

    }

    if (overlay) {

        overlay.addEventListener("click", closeMenu);

    }

    /* ==========================
       CLOSE MENU WHEN CLICK LINK
    ========================== */

    if (mobileNav) {

        mobileNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", closeMenu);

        });

    }

    /* ==========================
       ESC KEY
    ========================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });

    /* ==========================
       HEADER SCROLL
    ========================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}