// ==UserScript==
// @name         Ignore known memrise words
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.memrise.com/course/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=memrise.com
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

let draw = () => {
  let html = `
  <div>
<button id="words-ignore-start">Ignoruj słowa z liczbą dni &gt; 100</button>
</div>
`
  $('body .things-header').append($(html));
}

(function() {
    'use strict';

    draw();

    $('#words-ignore-start').click((e) => {
        e.preventDefault();

        ignoreKnownThings();
    });

    function ignoreKnownThings() {
        document.querySelectorAll(".ignore-show")[0].click();

        var selectedWordsCount = 0;
        var selectedWords = [];
        document.querySelectorAll(".thing:not(.ignored)").forEach(function(thing) {
            var status = thing.querySelectorAll(".status")[0].innerText;
            var word = thing.querySelectorAll(".col_a > .text")[0].innerText;
            var days = status.split(/(\s+)/)[2];
            if(isNaN(days)) {
                days = 0;
            }
            if(days > 100) {
                console.log(word + " " + status + " " + days);
                thing.querySelectorAll(".ignore-ui input")[0].checked = true;
                selectedWordsCount++;
                selectedWords.push(word + " " + status + "\n");
            }
        });

        if(selectedWordsCount > 0) {
            if(confirm("Zaznaczyłem " + selectedWordsCount + " słów: " + selectedWords + "\nIGNOROWAĆ?")) {
                document.querySelectorAll(".ignore-save")[0].click();
            };
        }
        else {
            alert("Brak słów do ignorowania w tym poziomie");
        }
    }

})();