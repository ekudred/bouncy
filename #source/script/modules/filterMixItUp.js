import mixitup from 'mixitup'

export function filterMixItUp() {
    const Mixer = mixitup(document.querySelector('#Categories'), {
        selectors: {
            target: '.mix'
        }
    })
}