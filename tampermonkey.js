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
    //document.body.innerHTML = document.body.innerHTML.replace(/border-radius: 4px;/g, 'border-radius: 50%;'); //Fixes Profile Pictures

    $("#cat_1 > table").css("border", "none");
    $("#cat_11 > table").css("border", "none");
    $("#cat_18 > table").css("border", "none");
    $("#cat_33 > table").css("border", "none");
    $("#cat_34 > table").css("border", "none");
    $("#cat_145 > table").css("border", "none");
    $("#cat_40 > table").css("border", "none");
    $(".sidebarstats").css("border", "none");
    $(".table-rounded").css("border", "none");

    //Profile
    $(".index_stats_item").css("border", "none");
    $(".ifirst").css("border", "none");
    $(".ilast").css("border", "none");
    $(".wrapped").css("border", "none");
    $(".statusblock").css("border", "none");
    $(".user-service--member-profile").css("border", "none");

    //Threads/Posts
    $(".post_body").css("font-size", "14px"); //Text was made bigger, reduced down to normal size
    $(".smalltext").css("font-size", "12px"); //Replaces Small Text
    $(".mycode_size").css("font-size", "14px"); //Replaced overriden medium/large text
    $(".footer-nav h3").css("font-size", "14px"); //Replaced footer text size
    $(".post_body").css("padding", "10px 0"); //Fixed spacing on threads
});
