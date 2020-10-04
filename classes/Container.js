export default class Container {
	constructor(){
		this.elm = document.createElement("BODY");
		this.elm.id = "content";
        
        this.elm.addEventListener("click", this.methods.click)
        this.elm.addEventListener("mouseover", this.methods.mouseover)
        this.elm.addEventListener("mouseout", this.methods.mouseout)
    }

    data = {
        prevElm: null,
        enableCall: true
    }

    methods={
        click : (ev) => {
            console.log("Clicked!", ev.target.nodeName)

            
           
           
        },
        mouseover : (ev) => {
            this.data.prevElm ? this.data.prevElm.classList.remove("outline")  : ""
            this.data.prevElm = ev.target;
            ev.target.classList.add("outline");
            
        },
        mouseout :(ev) => {
            this.data.prevElm ? this.data.prevElm.classList.remove("outline")  : ""
        }


			


    }
}