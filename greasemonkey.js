// ==UserScript==
// @name Underscores Removed Boxes
// @match https://ogu.gg/*
// @include https://ogu.gg/*
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


document.body.innerHTML = document.body.innerHTML.replace(/border: 1px solid #444;/g, '');
addGlobalStyle('.index_stats_item { border:none; !important }');
addGlobalStyle('.ilast { border:none; !important }');
addGlobalStyle('.wrapped { border:none; !important }');
addGlobalStyle('.statusblock { border:none; !important }');
addGlobalStyle('.user-service--member-profile { border:none; !important }');
