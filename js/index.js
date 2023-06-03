/*
    Freeddev - Index script
    Version 2.0-dev
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

/*
    Disable animations for the first second after site is loaded
*/

setTimeout(function () {
    document.body.classList.remove("preload");
}, 1000);
