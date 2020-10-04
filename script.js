"use strict"
import Container from "./classes/Container.js"

var app = document.querySelector("#app");
app.appendChild(new Container().element)
var content =  document.querySelector("#content");
