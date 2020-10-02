"use strict"

var app = document.querySelector("#app");
var content =  document.querySelector("#content");

// Show grid
var ruler = document.querySelector("#ruler");
function toggleBodyAttrib(a) { if (ruler.getAttribute(a)=='1') ruler.setAttribute(a,'0'); else ruler.setAttribute(a,'1'); }


class MovableDiv {

	constructor(width, height, background,  marginLeft="inherit") {
		this.element = document.createElement('div');
		this.element.classList.add("movable-div")
		this.element.style.width = width + "px";
		this.element.style.height = height+ "px";;
		this.element.style.background = background
		this.element.style.display = "inline-block"
		this.element.style.position = "absolute"
		this.element.style.margin = "20px"
		this.element.style.marginLeft = marginLeft

		this.element.addEventListener('click', this.action);
	}



	action(){

		const methods = {
			log: () => {
				console.log(
					{
						message: "Clicked!",
						distanceTop: this.offsetTop + "px",
						distanceLeft: this.offsetLeft + "px",
						outline: this.style.outline
					}
				)
		} ,
			remove_outline_others: () => {
				let elements = app.querySelectorAll("*");

				for (let i=0, len = elements.length; i< len; i++){
					if(elements[i].classList.contains("outline")){
						elements[i].classList.remove("outline")
					}
				}
			},
			outline: () => {
		
				// this.style.outline = "2px solid #c3a9ff" ? "" : "2px solid #c3a9ff"

				this.classList.toggle("outline")
				// (this.style.outline) ? this.style.outline = "" : this.style.outline = "2px solid #c3a9ff" 
				
			},
		}

		methods.log()
		methods.remove_outline_others()
		methods.outline()
	
	}

	width() {
    return this.element.width
	}
	
}



const div1 = new MovableDiv(100, 50, "#7E7E7E");
const div2 = new MovableDiv(200, 100, "#A5A5A5", "150px");


content.appendChild(div1.element)
content.appendChild(div2.element)




