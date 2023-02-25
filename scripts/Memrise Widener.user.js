// ==UserScript==
// @name         Memrise Widener
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.memrise.com/course/*
// @match        https://www.memrise.com/garden/*
// @match        https://app.memrise.com/course/*
// @match        https://app.memrise.com/garden/*
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

    addGlobalStyle('#central-area {width: 735px;}');
    addGlobalStyle('.garden-box.multiple_choice ol.choices li .val {max-width: 570px;}');
    addGlobalStyle('body.bigger-videos #prompt-area { display: flex; justify-content: left; padding-left: 12px; }');

})();