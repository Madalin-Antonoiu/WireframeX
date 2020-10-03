"use strict"
// Make Handle class instead of querySelectorAll

//Thanks to https://gist.github.com/LeoAref/b6a14d96423a0b558b7de7635fb8f86e
class Dispatcher {
    constructor () {
        this.events = {};   
    }
    
    addListener (event, callback) {
        // Check if the callback is not a function
        if (typeof callback !== 'function') {
            console.error(`The listener callback must be a function, the given type is ${typeof callback}`);
            return false;
        }
        
        
        // Check if the event is not a string
        if (typeof event !== 'string') {
            console.error(`The event name must be a string, the given type is ${typeof event}`);
            return false;
        }
        
        // Check if this event not exists
        if (this.events[event] === undefined) {
            this.events[event] = {
                listeners: []
            }
        }
        
        this.events[event].listeners.push(callback);
    }
    
    removeListener (event, callback) {
        // Check if this event not exists
        if (this.events[event] === undefined) {
            console.error(`This event: ${event} does not exist`);
            return false;
        }
        
    	this.events[event].listeners = this.events[event].listeners.filter(listener => {
    	    return listener.toString() !== callback.toString(); 
    	});
    }
    
    dispatch (event, details) {
        // Check if this event not exists
        if (this.events[event] === undefined) {
            console.error(`This event: ${event} does not exist`);
            return false;
        }
        
        this.events[event].listeners.forEach((listener) => {
            listener(details);
        });
    }  
}

class MovableDiv {

	constructor(w, h, bg) {
		this.helpers.init(w,h,bg)

		this.element.addEventListener('mousedown', this.methods.mousedown);
		document.addEventListener('click', this.helpers.handles)

	}


	helpers = {
		init : (w,h,bg) =>{
			this.element = document.createElement('div');
			this.element.classList.add("movable-div");
			this.element.style.display = "inline-block";
			this.element.style.width = w + "px";
			this.element.style.height = h+ "px";
			this.element.style.background = bg;
			this.element.style.margin = "0 20px 0 20px";
			this.element.style.position="absolute";
		},
		handles : (event) => {
			event.preventDefault();
			event.stopPropagation();

			// dispatcher.dispatch('delete-handles');

			if(!this.element.querySelector(".resizable-handle")){
				console.log("ADD handles")
				this.vars.hasHandles = true;
				this.helpers.attachHandles();
			}

			if (!this.element.contains(event.target)) {
				console.log("REMOVE handles!")
				this.helpers.removeOtherHandles()
			  //the click was outside the specifiedElement, do something
			}
		},
		attachHandles : () =>{

			this.element.append(new Handle({bottom: "0px", left:"0px"}).element);
			this.element.append(new Handle({bottom: "0px", right:"0px"}).element);
			this.element.append(new Handle({top: "0px", left:"0px"}).element);
			this.element.append(new Handle({top: "0px", right:"0px"}).element);
			this.element.append(new Handle({top:"-2.5px", left:"50%"}).element);
			this.element.append(new Handle({bottom:"-2.5px", left:"50%"}).element);
			this.element.append(new Handle({top:"50%", left:"-2.5px"}).element);
			this.element.append(new Handle({top:"50%", right:"-2.5px"}).element);
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

			// dispatcher.dispatch('delete-handles');
			let handles = this.element.querySelectorAll(".resizable-handle");
			for(let i=0, len = handles.length;i < len; i++){
				handles[i].remove()
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
			this.helpers.moveElem(ev)
			// subhelpers.throttle()

		},
		mousedown : (ev) =>{
			dispatcher.dispatch('hide-handles');
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
			ev.preventDefault();
			ev.stopPropagation();

			this.vars.isDown = false;
			console.log("isDown", this.vars.isDown)
			this.helpers.terminate()

			dispatcher.dispatch('show-handles');
		

		},
		mouseleave: (ev) => {
			// this.helpers.terminate()
		},
		mouseout: (ev) => {
			// this.helpers.terminate()
		}

	}

}

class Handle {
	constructor({left, top, bottom, right}){
		this.element = document.createElement('span');
		this.element.classList.add("resizable-handle");

		this.element.style.left = left 
		this.element.style.top = top
		this.element.style.right = right 
		this.element.style.bottom = bottom 

		dispatcher.addListener('hide-handles', () => {
			this.element.classList.add("hide")
		});
		dispatcher.addListener('show-handles', () => {
			this.element.classList.remove("hide")
		});

		// dispatcher.addListener('delete-handles', () => {
		// 	console.log("I should DELETE the handles") 
		// 	this.element.remove()
		// });
	
	}



	//when moving, hide them!
}

const dispatcher = new Dispatcher();

var app = document.querySelector("#app");
var content =  document.querySelector("#content");
content.appendChild(new MovableDiv(200, 100, "#676867").element)
content.appendChild(new MovableDiv(200, 100, "#A5A5A5").element)


