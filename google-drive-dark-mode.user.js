// ==UserScript==
// @name         Google Drive Dark Mode
// @namespace    http://tampermonkey.net/
// @version      2
// @description  A dark mode for the Google Drive website
// @author       Matty
// @match        https://drive.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=drive.google.com&sz=32
// @grant        none
// @updateURL    https://github.com/MathiasLui/google-drive-dark-mode/raw/main/google-drive-dark-mode.user.js
// @downloadURL  https://github.com/MathiasLui/google-drive-dark-mode/raw/main/google-drive-dark-mode.user.js
// ==/UserScript==

(function() {
    'use strict';

    const css = `
    * {
        --dt-on-background: #e3e3e3 !important; /* Big headers */
        --dt-background: #292929 !important; /* Big headers background/person icon color */
        --dt-on-surface: #cdcdcd !important; /* Medium headers */
        --dt-on-surface-secondary: #a3a3a3 !important; /* File info */
        --dt-on-surface-variant: #e3e3e3 !important; /* Few icons and text */
        --dt-surface: #292929 !important; /* Big middle background */
        --dt-surface-container-low: #292929 !important; /* Outside background */
        --dt-surface-container-high: #373737 !important; /* Search bar background */
        --dt-surface-bright: #373737 !important; /* New-button background */
        --dt-primary: #079914 !important; /* Storage used bar */
        --dt-on-secondary-container: #ffffff !important; /* Home (or selected?) icon and text */
        --dt-secondary-container: #434343 !important; /* Home (or selected?) background */
        --dt-primary-action: #ffffff !important; /* Link color (e.g. Get more storage) */
        --gm3-button-text-label-text-color: #878787 !important; /* Cancel Subscription text */
        --gm3-sys-color-primary: #bbbbbb !important; /* Get more storage text */
        --gm3-sys-color-outline: #9b9b9b !important; /* Get more storage outline */
        --gm3-sys-color-surface-container-high: #373737 !important; /* Top filters background */
        --gm3-sys-color-on-surface: #c9c9c9 !important; /* Top filters text */
        --gm3-sys-color-on-secondary-container: #e1e1e1 !important; /* Already selected button hover text */
        --gm3-segmented-button-outlined-selected-container-color: #3f3f3f !important; /* below filters background */
        --gm3-segmented-button-outlined-selected-with-icon-icon-color: #b5b5b5 !important; /* unfocused selected icon color */
        --gm3-segmented-button-outlined-unselected-with-icon-icon-color: #b5b5b5 !important; /* unfocused unselected icon color */
        --gm3-segmented-button-outlined-selected-label-text-color: #cdcdcd !important; /* Files text */
        --gm3-icon-button-standard-unselected-icon-color: #c7c7c7 !important; /* Search icon */
        --dt-primary-container: #3d3d3d !important; /* Selected location dropdown */
        --dt-surface-container: #333333 !important; /* My computer button background */
        --dt-on-primary-container: #dbdbdb !important; /* Changes will sync automatically main text */
        --dt-primary-container-icon: #73a8ff !important; /* Changes will sync info icon */
        --dt-primary-container-link: #73a8ff !important; /* Changes will sync learn more link */
        --gm-iconbutton-ink-color: #73a8ff !important; /* Changes will sync X button */
        --gm-colortextbutton-ink-color: #73a8ff !important; /* Change to my drive button text */
        --dt-light-info-banner-button: #81a6f1 !important; /* Change to my drive button hover text */
        --dt-neutral-container: #3d3d3d !important; /* Files are permanently removed after 30 days background */
        --dt-on-neutral-container: #cfcfcf !important; /* Files are permanently removed after 30 days text */
        --gm3-sys-color-on-surface-variant: #d2d2d2 !important; /* Entered search text */
    }

    button[aria-label*="Folder"] g > path:first-of-type {
        fill: #e3e3e3 !important;
    }

    li[role="menuitemcheckbox"][aria-checked=true] > span:hover {
        background-color: #3d3d3d !important;
    }

    li[role="menuitemcheckbox"] > span:hover {
        background-color: #4d4d4d !important;
    }

    table[role="presentation"][style*="width"] td {
        background-color: #292929
    }

    table[role="presentation"][style*="width"][dir="ltr"] td[style*="width"] {
        border-top-color: #676767 !important;
    }

    table[role="presentation"] #drive-search-overlay-footer {
        border-top-color: #676767 !important;
    }

    tr[role="option"] {
        color: #d2d2d2 !important;
        background-color: #cfcfcf !important;
    }

    form[role="search"]:focus-within {
        background: #292929 !important;
    }
    `;

    let style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();