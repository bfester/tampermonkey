// ==UserScript==
// @name         Oznacz produkt zawierający ksylitol
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Skrypt oznacza produkty zawierające słowo 'ksylitol' czerwoną ramką
// @author       Your Name
// @match        https://panel.fitapetit.com.pl/my-account/my-orders/details/*
// @match        https://panel.rukolacatering.pl/my-account/my-orders/details/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const sweetenersKeywords = ['ksylitol', 'xylitol', 'xsylitol', 'erytrotol', 'erytrol', 'erytrytol'];
    const preservativesKeywords = ['substancja konserwująca', 'pirosiarczyn'];
    const vegOilsKeywords = ['olej rzepakowy', 'wegańska śmietana', 'wegański majonez', 'masło roślinne'];

    const sweetenersBorderStyle = '2px solid red';
    const preservativesBorderStyle = '2px dotted #FFA500';
    const vegOilsBorderStyle = '2px solid yellow';


    // Funkcja, która sprawdza i oznacza elementy zawierające określone słowa
    function markProducts(keywords, borderStyle) {
        const productTiles = document.querySelectorAll('.product-tile');

        productTiles.forEach(function(tile) {
            const text = tile.textContent.toLowerCase();
            if (keywords.some(keyword => text.includes(keyword))) {
                tile.style.border = borderStyle;
            }
        });
    }

    // Uruchom na początku
    markProducts(vegOilsKeywords, vegOilsBorderStyle);
    markProducts(preservativesKeywords, preservativesBorderStyle);
    markProducts(sweetenersKeywords, sweetenersBorderStyle);


    // Obserwuj zmiany w DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                markProducts(vegOilsKeywords, vegOilsBorderStyle);
                markProducts(preservativesKeywords, preservativesBorderStyle);
                markProducts(sweetenersKeywords, sweetenersBorderStyle);
                modifyStyles();
                removeStickyHeader();
                removeStickyRight();
            }
        });
    });

    function modifyStyles() {
        const elements = document.getElementsByClassName('css-vtn51n');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.position = 'fixed';
            elements[i].style.top = '0';
            elements[i].style.right = '0';
            elements[i].style.width = '225px';
            elements[i].style.zIndex = '9999';
        }
    }

    function removeStickyHeader() {
        // Znajdź element z klasą 'css-gxj9qz'
        const element = document.querySelector('.css-gxj9qz');

        // Sprawdź, czy element istnieje
        if (element) {
            // Zmień właściwość position na 'static'
            element.style.position = 'static';
        }

    }

    function removeStickyRight() {
        const element = document.querySelector('.css-1vbvrch');

        // Sprawdź, czy element istnieje
        if (element) {
            // Zmień właściwość position na 'static'
            element.style.position = 'static';
        }

    }



    // Konfiguracja obserwatora
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });


})();