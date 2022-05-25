export class Nav {
    constructor() {
        this.button = document.querySelector('.menu-burger')
        this.menu = document.querySelector('.header-nav-container__navigations')

        this.header = document.querySelector('.header-nav')

        this.button.addEventListener('click', () => {
            if (this.menu.classList.contains('open')) {
                this.close()
                return
            }
            
            this.open()
        })
    
        this.smooth()
        this.color()
    }

    close() {
        document.body.classList.remove('hidden')
        this.menu.classList.remove('active')
        this.header.children[0].classList.remove('active')
        this.button.classList.remove('active')

        setTimeout(() => {
            this.header.classList.remove('active')
            this.menu.classList.remove('open')
        }, 200)
    }

    open() {
        document.body.classList.add('hidden')
        this.button.classList.add('active')
        this.menu.classList.add('open')
        this.header.children[0].classList.add('active')
        this.header.classList.add('active')

        setTimeout(() => {
            this.menu.classList.add('active')
        }, 20)
    }

    smooth() {
        this.anchors = document.querySelectorAll('a.anchor')

        for (let anchor of this.anchors) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault()
    
                const blockID = anchor.getAttribute('href')
    
                this.close()
    
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }

    color() {
        window.addEventListener('scroll', () => {
            document.querySelector('.header-nav').classList.toggle(
                'background-color',
                document.querySelector('.about').offsetTop <= document.documentElement.scrollTop + document.querySelector('.header-nav').offsetHeight
            )
        })
    }
}