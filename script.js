"use strict"
import Container from "./classes/Container.js"

var mdl = document.createElement("DIV");mdl.id="myModal"; mdl.classList.add("modal");
mdl.innerHTML= `
	
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Opts</p>
			<button class="delete" aria-label="close" data-bulma-modal="close"></button>
		</header>
		<section class="modal-card-body">
			<p>There is something here</p>
		</section>
		<footer class="modal-card-foot">
			<button class="button is-success">Save changes</button>
			<button class="button" data-bulma-modal="close">Cancel</button>
		</footer>
	</div>
`


mdl.querySelector("[data-bulma-modal='close']").addEventListener("click", function(){
	mdl.classList.toggle('is-active')
})


var app = document.querySelector("#app");
app.appendChild(new Container().elm);
var content =  document.querySelector("#content");

console.log(mdl)
app.appendChild(mdl) 




let jafa = document.createElement("DIV"); jafa.style.height="100px"; jafa.style.width="100px"; jafa.style.background = "#888888"; jafa.style.position = "relative";
content.appendChild(jafa)



