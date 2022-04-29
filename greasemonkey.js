// ==UserScript==
// @name Underscores Removed Boxes
// @match https://ogu.gg/*
// @include https://ogu.gg/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
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

$("#cat_1 > table").css("border", "none");
$("#cat_11 > table").css("border", "none");
$("#cat_18 > table").css("border", "none");
$("#cat_33 > table").css("border", "none");
$("#cat_34 > table").css("border", "none");
$("#cat_145 > table").css("border", "none");
$("#cat_40 > table").css("border", "none");
$(".sidebarstats").css("border", "none");
$(".table-rounded").css("border", "none");

//If you have other boxes shown, use this
//document.body.innerHTML = document.body.innerHTML.replace(/border: 1px solid #444;/g, '');

addGlobalStyle('.index_stats_item { border:none; !important }');
addGlobalStyle('.ilast { border:none; !important }');
addGlobalStyle('.wrapped { border:none; !important }');
addGlobalStyle('.statusblock { border:none; !important }');
addGlobalStyle('.user-service--member-profile { border:none; !important }');
