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

		this.element.addEventListener('click', this.log);
		this.element.addEventListener('click', this.action);
	}

	log(){
		console.log(
			{
				message: "Clicked!",
				distanceTop: this.offsetTop + "px",
				distanceLeft: this.offsetLeft + "px"
			}
		)
	}

	action(){
		// Remove on all others
		let elements = app.querySelectorAll("*");

		if(this.style.outline){
			this.style.outline = ""
		}

		for (let i=0, len = elements.length; i< len; i++){
			if(elements[i].style.outline){
				elements[i].style.outline = ""
			}
		}



		this.style.outline = "2px solid green"
	}

	width() {
    return this.element.width
  }

}

const div1 = new MovableDiv(100, 50, "#7E7E7E");
const div2 = new MovableDiv(200, 100, "#A5A5A5", marginLeft="150px");

content.appendChild(div1.element)
content.appendChild(div2.element)

