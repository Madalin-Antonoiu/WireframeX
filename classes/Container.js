import {bulma} from "../bulma-components.js"


export default class Container {
	constructor(){
		this.elm = document.createElement("BODY");
		this.elm.id = "content";
        
        this.elm.addEventListener("click", this.methods.click)
        this.elm.addEventListener("mouseover", this.methods.mouseover)
        this.elm.addEventListener("mouseout", this.methods.mouseout)
        this.elm.addEventListener("contextmenu", this.methods.contextmenu)
 
    }

    data = {
        prevElm: null,
        enableCall: true,
    }

    methods={
        click : (ev) => {
            console.log("Clicked!", ev.target.nodeName)
            document.querySelector("#myModal").classList.remove("is-active");
        },
        mouseover : (ev) => {


            this.data.prevElm ? this.data.prevElm.classList.remove("outline")  : ""
            this.data.prevElm = ev.target;
            ev.target.classList.add("outline");

            // Add badge
            let badge = document.createElement("span"); badge.classList.add("badge");
            badge.innerHTML = ev.target.nodeName


            if(!ev.target.querySelector(".badge") && ev.target.id !== "badge"){
                ev.target.appendChild(badge);
            }
           
            
        },
        mouseout :(ev) => {
            this.data.prevElm ? this.data.prevElm.classList.remove("outline")  : ""
            this.data.prevElm ? this.data.prevElm.querySelector(".badge").remove()  : ""
        },
        contextmenu :(ev) => {
            //here you draw your own menu
            ev.preventDefault();

            // let contextMenu = document.createElement("div"); contextMenu.id="contextMenu";
            // contextMenu.innerHTML = bulma.modal;


            let modal = document.querySelector("#myModal");

            if(modal.classList.contains('is-active')){
                modal.style.top      = ev.clientY + 'px';
                modal.style.left     = ev.clientX + 'px';
               
            } else {
                modal.classList.add("is-active")
                modal.style.top      = ev.clientY + 'px';
                modal.style.left     = ev.clientX + 'px';
            }


        }
			


    }
}



