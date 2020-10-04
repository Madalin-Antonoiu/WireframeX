export default class BulmaModal {
	constructor() {
        this.elem = document.createElement("DIV",);
        this.elem.id = "myModal"; this.elem.classList.add("modal")
        this.elem.innerHTML = `
            <div class="modal" id="myModal">
                <div class="modal-background"></div>
                <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" data-bulma-modal="close"></button>
                </header>
                <section class="modal-card-body">
                    <p>There is something here</p>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" data-bulma-modal="close">Cancel</button>
                </footer>
                </div>
             </div>
        `
		this.close_data()
	}
	
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	
	close_data() {
        
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				
				that.elem.classList.toggle('is-active')

				var event = new Event('modal:close')

				that.elem.dispatchEvent(event);
			})
		})
	}
	
	on_show() {
		var event = new Event('modal:show')
	
		this.elem.dispatchEvent(event);
	}
	
	on_close() {
		var event = new Event('modal:close')
	
		this.elem.dispatchEvent(event);
	}
	
	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}

// var btn = document.querySelector("#btn")
// var mdl = new BulmaModal("#myModal")

// btn.addEventListener("click", function () {
// 	mdl.show()
// })


