export function preload() {
    const images = document.images
    const imagesTotalCount = images.length
    let imagesLoaderCount = 0
    const preloader = document.getElementById('page-preloader')

    const video = document.querySelector('.header-container__background-video video')

    const onload = () => {
        window.onload = function () {
            setTimeout(() => {
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done')
                }
            }, 1000)
        }
    }

    const imageLoader = () => {
        imagesLoaderCount++

        if (imagesLoaderCount >= imagesTotalCount) onload()
    }

    if (!sessionStorage.getItem('preload')) {
        for (let i = 0; i < imagesTotalCount; i++) {
            let imageClone = new Image()
            imageClone.onload = imageLoader
            imageClone.onerror = imageLoader
            imageClone.src = images[i].src
        }

        video.addEventListener('loadeddata', () => {
            if (video.readyState === 4) onload()
        })

        sessionStorage.setItem('preload', true)
    } else {
        preloader.style.display = 'none'
    }
}