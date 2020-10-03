export default class Handle {
	constructor({left, top, bottom, right, cls}){
		this.element = document.createElement('span');
		this.element.classList.add("resizable-handle");//do with :css
		this.element.classList.add(cls)

		this.element.style.left = left 
		this.element.style.top = top
		this.element.style.right = right 
		this.element.style.bottom = bottom 

		this.element.addEventListener("mouseover", this.methods.mouseover)
		this.element.addEventListener("mousedown", this.methods.mousedown)
    }
    
    data={
        minimum_size: 20,
        original_width:0,
        original_height:0,
        original_x:0,
        original_y:0,
        original_mouse_x:0,
        original_mouse_y:0,
    }

	methods={
		mouseover: (ev) => {
			ev.target.style.background = "orange"; // console.log(parseInt(this.element.parentElement.style.width)) !OK

		},
		mousedown: (ev) => {
			ev.preventDefault()

            this.data.original_width = parseFloat(getComputedStyle(this.element.parentElement, null).getPropertyValue('width').replace('px', ''));
            this.data.original_height = parseFloat(getComputedStyle(this.element.parentElement, null).getPropertyValue('height').replace('px', ''));
            this.data.original_x = this.element.parentElement.getBoundingClientRect().left;
            this.data.original_y = this.element.parentElement.getBoundingClientRect().top;
            this.data.original_mouse_x = ev.pageX;
            this.data.original_mouse_y = ev.pageY;
            
            console.log ({// Debug
                "S width:" : this.data.original_width, 
                " S height: " : this.data.original_height, 
                " S x: " : this.data.original_x, 
                " S y: " : this.data.original_y,
                " S mouse_x: " : this.data.original_mouse_x,
                " S mouse_y: " : this.data.original_mouse_y
            })
            
            this.element.addEventListener("mousemove", this.methods.mousemove)
            this.element.addEventListener("mouseup", this.methods.mouseup)

        },
        mousemove: (ev) => {
			if(ev.target.classList.contains("BR")){
                const width = this.data.original_width + (ev.pageX - this.data.original_mouse_x);
                const height = this.data.original_height + (ev.pageY - this.data.original_mouse_y)

                console.log ({// Debug
                    "New width:" : width, 
                    "New height: ": height, 
                })

                if (width > this.data.minimum_size) {
                    this.element.parentElement.style.width = width + 'px'
                  }
                  if (height > this.data.minimum_size) {
                    this.element.parentElement.style.height = height + 'px'
                  }
                

            }
        },
        mouseup: (ev) => {},
	}
}