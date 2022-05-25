export function clickMap() {
    document.querySelector('.map-container').addEventListener('click', (event) => {
        event.target.classList.add('active')

        setTimeout(() => {
            document.getElementById('map').classList.add('active')
        }, 500)
    })
}