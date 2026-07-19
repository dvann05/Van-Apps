/**
 * ==========================================
 * VanApps - search.js
 * Search Function
 * ==========================================
 */

"use strict";

function initSearch() {

    const searchInputs = document.querySelectorAll(".search-input");
    const searchForms = document.querySelectorAll(".search-form");

    if (!searchInputs.length) return;

    /* ==========================
       SUBMIT SEARCH
    ========================== */

    searchForms.forEach(form => {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const input = this.querySelector(".search-input");

            if (!input) return;

            const keyword = input.value.trim();

            if (keyword === "") {

                input.focus();

                return;

            }

            window.location.href =
                `search.html?q=${encodeURIComponent(keyword)}`;

        });

    });

    /* ==========================
       ENTER KEY (Fallback)
    ========================== */

    searchInputs.forEach(input => {

        input.addEventListener("keydown", function (event) {

            if (event.key !== "Enter") return;

            event.preventDefault();

            const keyword = this.value.trim();

            if (keyword === "") return;

            window.location.href =
                `search.html?q=${encodeURIComponent(keyword)}`;

        });

    });

    /* ==========================
       SEARCH PAGE
    ========================== */

    if (!window.location.pathname.endsWith("search.html")) return;

    const params = new URLSearchParams(window.location.search);
    const keyword = params.get("q") || "";

    const keywordText = document.querySelector(".search-keyword");
    const resultContainer = document.querySelector(".search-results");

    if (keywordText) {

        keywordText.textContent = keyword;

    }

    if (!resultContainer) return;

    /* ==========================
       DATA
       (sementara, nanti diganti JSON)
    ========================== */

    if (typeof appsData === "undefined") {

        resultContainer.innerHTML =
            "<p>Data aplikasi belum tersedia.</p>";

        return;

    }

    const results = appsData.filter(app => {

        const text =
            `${app.name} ${app.category} ${app.description}`.toLowerCase();

        return text.includes(keyword.toLowerCase());

    });

    if (!results.length) {

        resultContainer.innerHTML =
            "<p>Tidak ada aplikasi yang ditemukan.</p>";

        return;

    }

    resultContainer.innerHTML = results.map(app => `

        <article class="app-card">

            <img src="${app.icon}"
                 alt="${app.name}"
                 loading="lazy">

            <div class="app-info">

                <h3>${app.name}</h3>

                <p>${app.description}</p>

                <a class="btn"
                   href="detail.html?id=${app.id}">
                   Lihat Detail
                </a>

            </div>

        </article>

    `).join("");

}