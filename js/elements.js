/*
    Freeddev - Custom elements
    Version 2.0-dev
    Copyright (c) 2022-2023 FreedTapstry21
*/

/* Custom element class */
class FreeddevElements extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<br><br><br>";
        this.style.position = "static";
    }
}

/* Defines custom element */
customElements.define('ln-br', FreeddevElements);
