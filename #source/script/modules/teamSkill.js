export function teamSkill() {
    const progressSKILL = () => {
        const bars = document.querySelectorAll('.card-skills__section .card-progressbar')

        bars.forEach(bar => {
            bar.style.width = bar.parentElement.parentElement.querySelector('.card-skill-progress').textContent + "%"
        })
    }

    progressSKILL()
}