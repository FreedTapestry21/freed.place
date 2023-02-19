/*
    Freeddev - Index script
    Version 1.7.4
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
if (window.innerWidth < 450) {
    alert("Warning: Your horizontal resolution is below the recomended horizontal resolution. You might get a poor experience.");
}
if (window.innerHeight < 550) {
    alert("Warning: Your vertical resolution is below the recomended vertical resolution. You might get a poor experience.");
}

/*
    Add animations
*/

setTimeout(function () {
    document.body.classList.remove("preload");
}, 1000);
