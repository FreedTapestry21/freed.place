/*
    Freeddev - Index script
    Version 2.0
    Copyright (c) 2022-2024 FreedTapstry21
*/

/* 
    This script runs at every website.
*/

/* Hello world */
console.log("Hello world!");

/*
    Responsive Elements
*/

if (window.innerWidth < 464) {
    console.log("Making modificatons for smaller screens...")
    document.getElementById("menu-name").remove();
    document.getElementById("menu-buttons").classList.remove("right");
    document.getElementById("menu-buttons").classList.add("center");
} else {console.log("Seems like no modifications are needed!")}