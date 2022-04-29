// ==UserScript==
// @name       remove boxes by underscores
// @match      https://ogu.gg/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

$(document).ready(function() {
    document.body.innerHTML = document.body.innerHTML.replace(/border: 1px solid #444;/g, '');
    GM_addStyle('.index_stats_item { border:none; !important }');
    GM_addStyle('.ilast { border:none; !important }');
    GM_addStyle('.wrapped { border:none; !important }');
    GM_addStyle('.statusblock { border:none; !important }');
    GM_addStyle('.user-service--member-profile { border:none; !important }');
});
