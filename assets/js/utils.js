/**
 * ==========================================
 * VanApps - utils.js
 * Common Utility Functions
 * ==========================================
 */

"use strict";

/* ==============================
   SELECTOR
============================== */

const $ = (selector, parent = document) => parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

/* ==============================
   EVENT
============================== */

function on(element, event, callback) {

    if (!element) return;

    element.addEventListener(event, callback);

}

/* ==============================
   CREATE ELEMENT
============================== */

function create(tag, className = "") {

    const element = document.createElement(tag);

    if (className) {

        element.className = className;

    }

    return element;

}

/* ==============================
   CLASS
============================== */

function addClass(element, className) {

    if (!element) return;

    element.classList.add(className);

}

function removeClass(element, className) {

    if (!element) return;

    element.classList.remove(className);

}

function toggleClass(element, className) {

    if (!element) return;

    element.classList.toggle(className);

}

/* ==============================
   ATTRIBUTES
============================== */

function setAttr(element, name, value) {

    if (!element) return;

    element.setAttribute(name, value);

}

function getAttr(element, name) {

    if (!element) return null;

    return element.getAttribute(name);

}

/* ==============================
   HTML
============================== */

function setHTML(element, html) {

    if (!element) return;

    element.innerHTML = html;

}

/* ==============================
   TEXT
============================== */

function setText(element, text) {

    if (!element) return;

    element.textContent = text;

}

/* ==============================
   FORMAT FILE SIZE
============================== */

function formatFileSize(bytes) {

    if (bytes < 1024)
        return bytes + " B";

    if (bytes < 1024 * 1024)
        return (bytes / 1024).toFixed(1) + " KB";

    if (bytes < 1024 * 1024 * 1024)
        return (bytes / 1024 / 1024).toFixed(1) + " MB";

    return (bytes / 1024 / 1024 / 1024).toFixed(1) + " GB";

}

/* ==============================
   FORMAT NUMBER
============================== */

function formatNumber(number) {

    return Number(number).toLocaleString();

}

/* ==============================
   DEBOUNCE
============================== */

function debounce(callback, delay = 300) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* ==============================
   THROTTLE
============================== */

function throttle(callback, delay = 200) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);

    };

}

/* ==============================
   RANDOM ID
============================== */

function randomID(length = 8) {

    return Math.random()
        .toString(36)
        .substring(2, 2 + length);

}

/* ==============================
   SCROLL TOP
============================== */

function scrollTopSmooth() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

/* ==============================
   LOCAL STORAGE
============================== */

const storage = {

    get(key) {

        return JSON.parse(

            localStorage.getItem(key)

        );

    },

    set(key, value) {

        localStorage.setItem(

            key,

            JSON.stringify(value)

        );

    },

    remove(key) {

        localStorage.removeItem(key);

    }

};

/* ==============================
   URL PARAMS
============================== */

function getParam(name) {

    const params = new URLSearchParams(

        window.location.search

    );

    return params.get(name);

}

/* ==============================
   COPY TEXT
============================== */

async function copyText(text) {

    try {

        await navigator.clipboard.writeText(text);

        return true;

    }

    catch {

        return false;

    }

}

/* ==============================
   READY
============================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        console.log("VanApps Ready");

    }

);