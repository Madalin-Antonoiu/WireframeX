export default class Handle {
	constructor({left, top, bottom, right, cls}){
		this.elm = document.createElement('span');
		this.elm.classList.add("resizable-handle");//do with :css
		this.elm.classList.add(cls)

		this.elm.style.left = left 
		this.elm.style.top = top
		this.elm.style.right = right 
		this.elm.style.bottom = bottom 

    }
    

	methods={

	}
}