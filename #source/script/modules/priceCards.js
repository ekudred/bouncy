export function priceCards() {
     const cards = document.querySelectorAll('.price-container__cards--item')

     cards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target == card.querySelector('.price-container__cards--item_header')) {
                card.querySelector('.price-container__cards--item_header').classList.add('active')
                card.querySelector('.price-container__cards--item_conditions').classList.add('active')
            }

            if (event.target === card.querySelector('.price-container__cards--item_conditions' || card.querySelector('.price-container__cards--item_conditions').classList.contains('active'))) {
                card.querySelector('.price-container__cards--item_header').classList.remove('active')
                card.querySelector('.price-container__cards--item_conditions').classList.remove('active')
            }
        })
     })
}