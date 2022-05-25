export function slides() {
    const imagesContainer = document.querySelector('.featured-container__projects')
    const images = document.querySelectorAll('.featured-container__projects--image')

    const contains = (items) => {
        items.forEach(item => {
            if (item.classList.contains('active')) item.classList.remove('active')
        })
    }

    const clickHandler = (event) => {
        contains(images)

        event.target.classList.add('active')
    }

    imagesContainer.addEventListener('click', clickHandler)

    images[0].classList.add('active')
}