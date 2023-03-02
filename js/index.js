/*
    Freeddev - Index script
    Version 1.7.5
    Copyright (c) 2022-2023 FreedTapstry21
*/

/* 
    This script runs at every website.
*/

/* Hello world */
console.log("Hello world!");

/*
    Responsive Elements
*/

if (window.innerWidth < 500) {
    document.getElementById("menu-div").innerHTML = "<br><br>";
} 
if (window.innerHeight < 650) {
    document.getElementById("footer").remove();
} 

if (window.localStorage.getItem("horizontal-res-warn") == null) {window.localStorage.setItem("horizontal-res-warn", "0");}
if (window.localStorage.getItem("vertical-res-warn") == null) {window.localStorage.setItem("vertical-res-warn", "0");}

if (window.innerWidth < 450) {
    if (window.localStorage.getItem("horizontal-res-warn") == 0) {
        alert("Warning: Your horizontal resolution is below the recomended horizontal resolution. You might get a poor experience.");
        window.localStorage.setItem("horizontal-res-warn", "1");
    }
}
if (window.innerHeight < 550) {
    if (window.localStorage.getItem("vertical-res-warn") == 0) {
        alert("Warning: Your vertical resolution is below the recomended vertical resolution. You might get a poor experience.");
        window.localStorage.setItem("vertical-res-warn", "1");
    }
}

/*
    Add animations
*/

setTimeout(function () {
    document.body.classList.remove("preload");
}, 1000);
