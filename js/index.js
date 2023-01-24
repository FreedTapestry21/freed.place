/*
    Freeddev - Index script
    Version 1.7.3
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
} else if (window.innerHeight < 500) {
    document.getElementById("footer").remove();
}

/*
    Add animations
*/

setTimeout(function () {
    document.body.classList.remove("preload");
}, 1000);
