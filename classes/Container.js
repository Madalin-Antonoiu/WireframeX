export default class Container {
	constructor(){
		this.element = document.createElement("DIV");
		this.element.id = "content";

        this.element.addEventListener("click", this.methods.click);
        // this.element.addEventListener("mousedown", this.methods.mousedown)
        // this.element.addEventListener("mouseout", this.methods.mouseout)
    }
    
    // data={
    //     container_width: null,
    //     minimum_size: 10,
    //     original_width:0,
    //     original_height:0,
    //     original_x:0,
    //     original_y:0,
    //     original_mouse_x:0,
    //     original_mouse_y:0,
    //     parent: null,
    //     trigger: null
    // }

	// methods = {
	// 	click: (evt) =>{
	// 		if(evt.target.querySelector(".resizable-handle") && !evt.target.classList.contains(".movable-div")){
	// 			console.log("Clicked away, removing handles")
	// 			let elems = evt.target.querySelectorAll(".resizable-handle");
		
	// 			for (let i=0, len = elems.length; i< len; i++){
	// 				elems[i].remove()
	// 			}
	// 		}
    //     },
    //     mousedown: (ev) => {
	// 		ev.preventDefault()

    //         if(ev.target.classList.contains('resizable-handle')){
    //             this.data.container_width = parseInt(this.element.style.width);
    //             this.data.original_width = parseFloat(getComputedStyle(ev.target.parentElement, null).getPropertyValue('width').replace('px', ''));
    //             this.data.original_height = parseFloat(getComputedStyle(ev.target.parentElement, null).getPropertyValue('height').replace('px', ''));
    //             this.data.original_x = ev.target.parentElement.getBoundingClientRect().left;
    //             this.data.original_y = ev.target.parentElement.getBoundingClientRect().top;
    //             this.data.original_mouse_x = ev.pageX;
    //             this.data.original_mouse_y = ev.pageY;
    //             this.data.original_margin_left = parseInt(ev.target.parentElement.style.marginLeft);
    //             this.data.original_margin_top = parseInt(ev.target.parentElement.style.marginTop);
    //             this.data.original_margin_right = parseInt(ev.target.parentElement.style.marginRight);
    //             this.data.original_margin_bottom = parseInt(ev.target.parentElement.style.marginBottom);
    //             this.data.trigger = ev.target;
    //             this.data.parent = ev.target.parentElement;
                
    //             console.log ({// Debug
    //                 " Trigger:" : this.data.trigger.classList[1], 
    //                 " Original width:" : this.data.original_width, 
    //                 " Original height: " : this.data.original_height, 
    //                 " Original x: " : this.data.original_x, 
    //                 " Original y: " : this.data.original_y,
    //                 " Original mouse_x: " : this.data.original_mouse_x,
    //                 " Original mouse_y: " : this.data.original_mouse_y,
    //                 " Original margin_left: " : this.data.original_margin_left
    //             })
                
    //             this.element.addEventListener("mousemove", this.methods.mousemove)
               
    //             this.element.addEventListener("mouseup", this.methods.mouseup)
    //         }


    //         // this.element.style.width= "200px"
    //         // this.element.style.height= "200px"
    //         // this.element.style.position = "";

    //     },
    //     mousemove: (ev) => {
            
    //         if (this.data.trigger.classList.contains('BR')){
    //             const width = this.data.original_width + (ev.pageX - this.data.original_mouse_x);
    //             const height = this.data.original_height + (ev.pageY - this.data.original_mouse_y)

    //             console.log ({// Debug
    //                 "New width:" : width, 
    //                 "New height: ": height, 
    //             })

    //             if (width > this.data.minimum_size) {
    //                 this.data.parent.style.width = (width/16) + 'rem';  // 16 pixels = 1 rem
    //             }
    //             if (height > this.data.minimum_size) {
    //                 this.data.parent.style.height = (height/16)  + 'rem';
    //             }
    //         }
    //         else if (this.data.trigger.classList.contains('BL')) {
    //             const width = this.data.original_width + (ev.pageX - this.data.original_mouse_x);
    //             const height = this.data.original_height + (ev.pageY - this.data.original_mouse_y)

    //             console.log ({// Debug
    //                 "New width:" : width, 
    //                 "New height: ": height, 
    //             })

    //             if (width > this.data.minimum_size) {
    //                 // this.data.parent.style.width = width + 'px'
    //                 this.data.parent.style.marginLeft = (Math.abs(this.data.original_margin_left + (ev.pageX - this.data.original_mouse_x)))/16 + 'rem'
                   
    //               }
    //             if (height > this.data.minimum_size) {
    //                 this.data.parent.style.height = (height/16) + 'rem'
    //                 // this.data.parent.style.marginTop = Math.abs(this.data.original_margin_top + (ev.pageY - this.data.original_mouse_y)) + 'px'
    //             }
    //         }else if (this.data.trigger.classList.contains('MM')){
    //             const width = this.data.original_width + (ev.pageX - this.data.original_mouse_x);
    //             const height = this.data.original_height + (ev.pageY - this.data.original_mouse_y);
    //             const marginLeft = this.data.original_margin_left + (ev.pageX - this.data.original_mouse_x);

    //             if (marginLeft > this.data.minimum_size) {
    //                this.data.parent.style.marginLeft = (Math.abs(this.data.original_margin_left + (ev.pageX - this.data.original_mouse_x)))/ 16 + "rem" 
    //             }   
    //         }
                
    //         // else if (ev.target.classList.contains('BL')) {
    //         //     const width = this.data.original_width - (ev.pageX - this.data.original_mouse_x);
    //         //     const height = this.data.original_height + (ev.pageY - this.data.original_mouse_y)

    //         //     if (width > this.data.minimum_size) {
    //         //         this.element.parentElement.style.width = width + 'px'
    //         //         this.element.parentElement.style.marginLeft = Math.abs(this.data.original_margin_left + (ev.pageX - this.data.original_mouse_x)) + 'px'
    //         //         this.element.parentElement.style.marginTop = Math.abs(this.data.original_margin_top + (ev.pageY - this.data.original_mouse_y)) + 'px'
    //         //       }

    //         //     if (height > this.data.minimum_size) {
    //         //         this.element.parentElement.style.height = height + 'px'
    //         //     }

    //         // }
    //     },
    //     mouseup: (ev) => {
    //         console.log("MOUSEMOVE removed")
    //         this.element.removeEventListener("mousemove", this.methods.mousemove)
    //     },
    //     // mouseout: (ev) => {
    //     //     console.log("MOUSEMOVE removed")
    //     //     this.element.removeEventListener("mousemove", this.methods.mousemove)
    //     // },
	// }
}
