"use strict"
class MovableDiv {

	constructor(width, height, background) {
		this.element = document.createElement('div');
		this.element.classList.add("movable-div");

		this.element.style.display = "inline-block";
		this.element.style.width = width + "px";
		this.element.style.height = height+ "px";
		this.element.style.background = background;
		this.element.style.margin = "0 20px 0 20px";
		this.element.style.position="absolute";

		this.element.addEventListener('mousedown', this.methods.mousedown);
	}


	helpers = {
		// log: () => {
		// 	console.log(
		// 		{
		// 			message: "Clicked!",
		// 			distanceTop: this.element.offsetTop + "px",
		// 			distanceLeft: this.element.offsetLeft + "px",
		// 			outline: this.element.style.outline
		// 		}
		// 	)
		// } ,
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

				console.log(this.vars.mousePosition);
				this.element.style.left = (this.vars.mousePosition.x + this.vars.offset[0]) + 'px';
				this.element.style.top  = (this.vars.mousePosition.y + this.vars.offset[1]) + 'px';
		
			}
		}
	}

	vars = {
		timesPerSecond :2 ,
		wait : false,
		enableCall: true,

		mousePosition: "",
		offset: [0,0],
		isDown: false
	}

	methods = {

		mousemove : (ev) => {
			
			const subhelpers = {
				throttle : () => {
					if (!this.vars.enableCall) return;
					this.vars.enableCall = false;
					// console.log("Mousemoving!")
					
					this.helpers.moveElem(ev)

					setTimeout(() => this.vars.enableCall = true, 100);
				},

			}
			
			// subhelpers.throttle()
			subhelpers.throttle()

		},
		mousedown : (ev) =>{

			this.vars.isDown = true;
	
			this.vars.offset = [
				this.element.offsetLeft - ev.clientX,
				this.element.offsetTop - ev.clientY
			];

			console.log(this.vars.offset)
			console.log("isDown", this.vars.isDown)

			this.helpers.removeOutlineOnOthers()
			this.helpers.outline()

			this.element.addEventListener('mouseup', this.methods.mouseup);
			this.element.addEventListener('mousemove', this.methods.mousemove);
			this.element.addEventListener('mouseleave', this.methods.mouseleave);
			this.element.addEventListener('mouseout', this.methods.mouseout);

			this.element.style.opacity= .5
			// this.element.style.marginLeft = ev.pageX - this.offsetWidth / 2 + 'px  !important;';
			// this.element.style.marginTop = ev.pageY - this.offsetHeight / 2 + 'px  !important;';
			
		},
		mouseup: (ev) => {
			this.vars.isDown = false;
			console.log("isDown", this.vars.isDown)
			this.helpers.terminate()

		},
		mouseleave: (ev) => {
			// this.helpers.terminate()
		},
		mouseout: (ev) => {
			// this.helpers.terminate()
		}

	}

}

var app = document.querySelector("#app");
var content =  document.querySelector("#content");
content.appendChild(new MovableDiv(200, 100, "#676867").element)
content.appendChild(new MovableDiv(200, 100, "#A5A5A5").element)


