/*
    Freeddev - Index script
    Version 2.1
    Copyright (c) 2022-2024 FreedTapstry21
*/

/*
    Responsive Element(s)
*/

if (window.innerWidth < 464) {
    document.getElementById("menu-name").remove();
    document.getElementById("menu-buttons").classList.remove("right");
    document.getElementById("menu-buttons").classList.add("center");
    console.log("Enabled menu modification for smaller screens.")
} else {console.log("No modifications have been made.")}