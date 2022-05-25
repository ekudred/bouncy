export function parallax(selector, transition = '1') {
    const block = document.querySelector(selector)
    const heightBlock = block.clientHeight

    block.style.transition = `background-position ${transition}s ease`

    window.addEventListener('scroll', () => {
        let center = block.getBoundingClientRect().top + heightBlock / 2

        if ((block.getBoundingClientRect().top >= 0) && (block.getBoundingClientRect().bottom <= window.innerHeight)) {
            block.style.backgroundPositionY = `${center / 10}%`
        }
    })
}