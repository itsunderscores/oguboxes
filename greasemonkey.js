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

$(".post_body").css("font-size", "14px"); //Text was made bigger, reduced down to normal size
$(".smalltext").css("font-size", "10px"); //Replaces Small Text
$(".mycode_size").css("font-size", "14px"); //Replaced overriden medium/large text
$(".footer-nav h3").css("font-size", "14px"); //Replaced footer text size
$(".post_body").css("padding", "10px 0"); //Fixed spacing on threads

addGlobalStyle('.index_stats_item { border:none; !important }');
addGlobalStyle('.ilast { border:none; !important }');
addGlobalStyle('.wrapped { border:none; !important }');
addGlobalStyle('.statusblock { border:none; !important }');
addGlobalStyle('.user-service--member-profile { border:none; !important }');

//document.body.innerHTML = document.body.innerHTML.replace(/border: 1px solid #444;/g, ''); //If you have other boxes shown, unquote this
