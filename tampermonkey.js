// ==UserScript==
// @name       remove boxes by underscores
// @match      https://ogu.gg/
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

$(document).ready(function() {
    document.body.innerHTML = document.body.innerHTML.replace(/border: 1px solid #444;/g, '');
    addGlobalStyle('.index_stats_item { border:none; !important }');
    addGlobalStyle('.ilast { border:none; !important }');
    addGlobalStyle('.wrapped { border:none; !important }');
    addGlobalStyle('.statusblock { border:none; !important }');
    addGlobalStyle('.user-service--member-profile { border:none; !important }');
});
