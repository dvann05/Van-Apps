/**
 * ==========================================
 * VanApps - theme.js
 * Dark Mode
 * ==========================================
 */

"use strict";

function initTheme() {

    const toggleButton = document.querySelector(".header-icon");

    const STORAGE_KEY = "vanapps-theme";

    /* ==========================
       APPLY THEME
    ========================== */

    function applyTheme(theme) {

        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem(STORAGE_KEY, theme);

        if (toggleButton) {

            toggleButton.textContent =
                theme === "dark" ? "☀️" : "🌙";

            toggleButton.setAttribute(
                "aria-label",
                theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
            );

        }

    }

    /* ==========================
       GET INITIAL THEME
    ========================== */

    function getInitialTheme() {

        const savedTheme = localStorage.getItem(STORAGE_KEY);

        if (savedTheme) {

            return savedTheme;

        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    }

    let currentTheme = getInitialTheme();

    applyTheme(currentTheme);

    /* ==========================
       TOGGLE
    ========================== */

    if (toggleButton) {

        toggleButton.addEventListener("click", () => {

            currentTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";

            applyTheme(currentTheme);

        });

    }

    /* ==========================
       SYSTEM THEME CHANGE
    ========================== */

    window.matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {

            if (!localStorage.getItem(STORAGE_KEY)) {

                applyTheme(
                    event.matches ? "dark" : "light"
                );

            }

        });

}