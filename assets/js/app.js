/**
 * ==========================================
 * VanApps - app.js
 * Main Application
 * ==========================================
 */

"use strict";

const VanApps = {

    init() {

        console.log("VanApps Started");

        this.initModules();

        this.initCurrentYear();

    },

    initModules() {

        if (typeof initNavigation === "function") {
            initNavigation();
        }

        if (typeof initTheme === "function") {
            initTheme();
        }

        if (typeof initScroll === "function") {
            initScroll();
        }

        if (typeof initSearch === "function") {
            initSearch();
        }

        if (typeof initCarousel === "function") {
            initCarousel();
        }

        if (typeof initLazyLoad === "function") {
            initLazyLoad();
        }

        if (typeof initAnimations === "function") {
            initAnimations();
        }

        if (typeof loadFeaturedApps === "function") {
            loadFeaturedApps();
        }

        if (typeof loadTrendingApps === "function") {
            loadTrendingApps();
        }

        if (typeof loadLatestApps === "function") {
            loadLatestApps();
        }

    },

    initCurrentYear() {

        const year = document.getElementById("currentYear");

        if (year) {

            year.textContent = new Date().getFullYear();

        }

    }

};

/* ==========================================
   APP READY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    VanApps.init();

});