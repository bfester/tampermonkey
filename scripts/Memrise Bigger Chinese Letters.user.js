// ==UserScript==
// @name         Memrise Bigger Chinese Letters
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.memrise.com/aprender/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("odpalam tampermonkey");

    function addGlobalStyle(css) {
        console.log("wewnątrz addGlobalStyle");
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('h4.bhbPKg {font-size: 2rem;}');
    //addGlobalStyle('.SSlRY {display:none !important;}');
    addGlobalStyle('.hFpfJJ {padding:0.2rem 1rem;}');
    addGlobalStyle('.gJZuEI {padding:0.5rem 1rem;}');
    addGlobalStyle('.dAiNIC {gap:0.5rem 1.5rem;}');

})();