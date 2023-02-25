// ==UserScript==
// @name         Globse Autofocus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ru.glosbe.com/ru/pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("tampermonkey focus");

    document.getElementById("dictionary-search").select();

    var downloadLinks = document.getElementsByClassName("icon-arrow-down");

    console.log(downloadLinks);

    var attachListener = function() {
        document.getElementById("dictionary-search").select();
    };

    console.log(downloadLinks.length);

    for (var i = 0; i < downloadLinks.length; i++) {
        downloadLinks[i].addEventListener('click', attachListener, false);
    }
})();