export function bannerSlides() {
    const slides = document.querySelectorAll('.banner-container__image--text')
    const delay = 5000

    slides[0].classList.add('active')

    function contains(items) {
        items.forEach(item => {
            if (item.classList.contains('active')) item.classList.remove('active')
        })
    }

    function change() {
        return new Promise(resolve => {
            setTimeout(resolve, delay)
        })
    }

    async function showSlides() {
        for (let slide of slides) {
            contains(slides)

            slide.classList.add('active')

            await change()
        }
    }
    
    setInterval(showSlides, 2*delay)
}