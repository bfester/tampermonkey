// ==UserScript==
// @name         Forvo search autofocus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pl.forvo.com/word/*
// @match        https://pl.forvo.com/search/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("tampermonkey focus");

    document.getElementById("word_search_header").select();

    var downloadLinks = document.getElementsByClassName("ofLink");

    console.log(downloadLinks);

    var attachListener = function() {
        //alert("bla");
        //document.getElementById("word_search_header").focus();
        document.getElementById("word_search_header").select();
    };

    console.log(downloadLinks.length);

    for (var i = 0; i < downloadLinks.length; i++) {
        downloadLinks[i].addEventListener('click', attachListener, false);
    }
})();