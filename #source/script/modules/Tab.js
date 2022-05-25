export class Tab {
    constructor(buttonsContainer, buttons, contents) {
        this.container = document.querySelector(buttonsContainer)
        this.buttons = document.querySelectorAll(buttons)
        this.contents = document.querySelectorAll(contents)

        this.addIndex(this.buttons)
        this.addIndex(this.contents)

        this.hook()
        this.listener()
    }

    addIndex(items) {
        items.forEach((item, index) => {
            item.dataset.index = index
        })
    }

    listener() {
        const contains = (items) => {
            items.forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active')

                    // item.parentNode.style.height = "auto"
                }
            })
        }

        const clickHandler = (event) => {
            let target = event.target
    
            if (target == this.container) return
    
            contains(this.buttons)
            contains(this.contents)
    
            target.classList.add('active')
            this.contents[target.dataset.index].classList.add('active')
            this.contents[target.dataset.index].parentNode.style.height = this.contents[target.dataset.index].offsetHeight + "px"
        }
    
        this.container.addEventListener('click', clickHandler)
    }

    hook() {
        this.buttons[0].classList.add('active')
        this.contents[0].classList.add('active')
        this.contents[0].parentNode.style.height = this.contents[0].offsetHeight + "px"
    }
}