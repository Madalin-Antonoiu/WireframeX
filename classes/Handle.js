export default class Handle {
	constructor({left, top, bottom, right, cls}){
		this.element = document.createElement('span');
		this.element.classList.add("resizable-handle");//do with :css
		this.element.classList.add(cls)

		this.element.style.left = left 
		this.element.style.top = top
		this.element.style.right = right 
		this.element.style.bottom = bottom 

    }
    

	methods={

	}
}