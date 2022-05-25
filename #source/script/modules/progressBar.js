export function progressBar() {
    const circles = document.querySelectorAll('.progress-bar__circle')

    circles.forEach(item => {
        let radius = item.r.baseVal.value
        let circumference = 2 * Math.PI * radius
    
        item.style.strokeDasharray = `${circumference} ${circumference}`
        item.style.strokeDashoffset = circumference

        let offset = circumference - item.parentNode.parentNode.querySelector('.services-container__content_right--circle-percent').textContent / 100 * circumference
        item.style.strokeDashoffset = offset
    })    
}