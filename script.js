"use strict"
// import Handle from "./classes/Handle"
import Container from "./classes/Container.js"


class MovableDiv {

	constructor(w, h, bg) {
		this.helpers.init(w,h,bg)
		// Something like this will listen on the event on all instances of the class, not just the event that triggered it
		// content.addEventListener('click', this.helpers.handles)
		// this.element.addEventListener('mousedown', this.methods.mousedown);
		this.element.addEventListener('click', evt => this.helpers.handles(evt));

	}

	helpers = {
		init : (w,h,bg) =>{
			this.element = document.createElement('div');
			this.element.style.position = "relative";
	
			this.element.classList.add("movable-div");
			this.element.style.display = "inline-block";
			this.element.style.width = w + "px";
			this.element.style.height = h+ "px";
			this.element.style.background = bg;
			this.element.style.margin = "0 20px 0 20px";
			// this.element.style.position="absolute";
			this.element.style.zIndex="1";
		},
		attachHandles : () =>{

			this.element.append(new Handle({bottom: "0px", left:"0px", cls:"BL"}).element);
			this.element.append(new Handle({bottom: "0px", right:"0px", cls:"BR"}).element);
			this.element.append(new Handle({top: "0px", left:"0px", cls:"TL"}).element);
			this.element.append(new Handle({top: "0px", right:"0px", cls:"TR"}).element);
			this.element.append(new Handle({top:"-2.5px", left:"50%", cls:"TM"}).element);
			this.element.append(new Handle({bottom:"-2.5px", left:"50%", cls:"BM"}).element);
			this.element.append(new Handle({top:"50%", left:"-2.5px", cls:"LM"}).element);
			this.element.append(new Handle({top:"50%", right:"-2.5px", cls:"RM"}).element);
			this.element.append(new Handle({bottom:"49%", right:"50%", cls:"MM"}).element);
		},
		removeHandlesFromDom: () => {
			let elems = content.querySelectorAll(".resizable-handle");
			for (let i=0, len = elems.length; i< len; i++){
				elems[i].remove()
			}
		},
		handles : (event) => {
			event.stopPropagation();

			// dispatcher.dispatch('delete-handles');
			// console.log(event.target);
			this.helpers.removeOtherHandles()
			
			if(event.target.classList.contains("movable-div") && !this.element.querySelector(".resizable-handle")){
				console.log("ADD handles", this.element)
				this.helpers.attachHandles();
			}


		},
		removeOutlineOnOthers: () => {
			let elements = app.querySelectorAll("*");

			for (let i=0, len = elements.length; i< len; i++){
				if(elements[i].classList.contains("outline")){
					elements[i].classList.remove("outline")
				}
			}
		},
		outline: () => {
	
			if(this.element.classList.contains("outline")){
				this.element.classList.remove("outline")
			} else {
				this.element.classList.add("outline")
			}
			
			
		},
		terminate: () =>{
			this.element.classList.remove("outline") // sau la toti
			this.element.removeEventListener("mousemove", this.methods.mousemove); // works now!
			this.element.style.opacity= 1
		},
		moveElem: (ev) =>{

			if (this.vars.isDown == true) {

				this.vars.mousePosition = {
		
					x : ev.clientX,
					y : ev.clientY
			
				};

				// dispatcher.dispatch('hide-handles');

				this.element.style.left = (this.vars.mousePosition.x + this.vars.offset[0]) + 'px';
				this.element.style.top  = (this.vars.mousePosition.y + this.vars.offset[1]) + 'px';
		
			}
		},
		removeOtherHandles: () => {
			let prevhandles = content.querySelectorAll(".resizable-handle");
			for (let i=0, len = prevhandles.length; i< len; i++){
				prevhandles[i].remove()
			}
		}

	}

	vars = {
		timesPerSecond :2 ,
		wait : false,
		enableCall: true,

		mousePosition: "",
		offset: [0,0],
		isDown: false,
	}

	methods = {

		// mousemove : (ev) => {
			
		// 	const subhelpers = {
		// 		throttle : () => {
		// 			if (!this.vars.enableCall) return;
		// 			this.vars.enableCall = false;
		// 			// console.log("Mousemoving!")
					
		// 			this.helpers.moveElem(ev)

		// 			setTimeout(() => this.vars.enableCall = true, 100);
		// 		},

		// 	}
			
		// 	// subhelpers.throttle()
		// 	this.helpers.moveElem(ev)
		// 	// subhelpers.throttle()

		// },
		// mousedown : (ev) =>{
		// 	this.element.style.zIndex = "5";
		// 	console.log("Mousedown", this.element)
		// 	this.helpers.removeHandlesFromDom();
			
		// 	this.vars.isDown = true;
	
		// 	this.vars.offset = [
		// 		this.element.offsetLeft - ev.clientX,
		// 		this.element.offsetTop - ev.clientY
		// 	];

		// 	// console.log("isDown", this.vars.isDown)

		// 	this.helpers.removeOutlineOnOthers()
		// 	this.helpers.outline()

		// 	this.element.addEventListener('mouseup', this.methods.mouseup);
		// 	this.element.addEventListener('mousemove', this.methods.mousemove);
		// 	this.element.addEventListener('mouseleave', this.methods.mouseleave);
		// 	this.element.addEventListener('mouseout', this.methods.mouseout);

		// 	this.element.style.opacity= .5
		// 	// this.element.style.marginLeft = ev.pageX - this.offsetWidth / 2 + 'px  !important;';
		// 	// this.element.style.marginTop = ev.pageY - this.offsetHeight / 2 + 'px  !important;';
			
		// },
		// mouseup: (ev) => {
		// 	ev.preventDefault();
		// 	ev.stopPropagation();

		// 	this.vars.isDown = false;
		// 	// console.log("isDown", this.vars.isDown)
		// 	this.helpers.terminate()

		// 	this.element.style.zIndex = "0";

		// },
		// mouseleave: (ev) => {
		// 	// this.helpers.terminate()
		// },
		// mouseout: (ev) => {
		// 	// this.helpers.terminate()
		// }

	}

}



var app = document.querySelector("#app");
app.appendChild(new Container().element)
var content =  document.querySelector("#content");
