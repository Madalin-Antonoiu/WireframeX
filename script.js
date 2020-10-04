"use strict"
import Container from "./classes/Container.js"

var app = document.querySelector("#app");
app.appendChild(new Container().elm);
var content =  document.querySelector("#content");



let jafa = document.createElement("DIV"); jafa.style.height="100px"; jafa.style.width="100px"; jafa.style.background = "orange";
content.appendChild(jafa)