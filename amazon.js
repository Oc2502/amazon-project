const buyBtns = document.querySelectorAll('button.buy');
const cart = document.querySelector('.cartItems')
let items = 0


function addToCart() {
    items += 1
    cart.textContent = `${items}`;
}


buyBtns.forEach( function(buyButton) {
    console.log(buyButton)
    buyButton.addEventListener('click', addToCart);
})
