export default class Container {
	constructor(){
		this.elm = document.createElement("BODY");
		this.elm.id = "content";
        
        this.elm.addEventListener("click", this.methods.click)
        this.elm.addEventListener("mousemove", this.methods.mousemove)
    }

    data = {
        prevElm: null
    }

    methods={
        click : (ev) => {
            console.log("Clicked!", ev.target.nodeName)
            this.data.prevElm ? this.data.prevElm.classList.remove("outline")  : ""
            this.data.prevElm = ev.target;
            
           
            ev.target.classList.add("outline");
        },
        mousemove : (ev) => {
            console.log(ev.target.nodeName)
            
        }
    }
}