// ==UserScript==
// @name         ImmersiveChinese Wieksze Literki
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://console.immersivechinese.com/*
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

    addGlobalStyle('.show_simplified_characters_text  {font-size: 3rem !important;}');

})();