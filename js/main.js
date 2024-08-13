let allProducts = document.querySelectorAll('.card-body .card-title');
let productParent = document.querySelector('.product-parent');
let priceButton = document.querySelector('.price-button');
let priceParent = document.querySelector('.price-parent');
let resetButton = document.querySelector('.resetBtn');
let totalPrice = 0;





allProducts.forEach(function (item) {
    item.onclick = function () {
        productParent.innerHTML += item.textContent + ' ';
        totalPrice += +item.getAttribute('price');
    }
});



function showPrice() {
    priceParent.innerHTML = totalPrice + '$'
}

priceButton.onclick = function () {
    if (productParent.innerHTML === '') {
        alert('Please select a product to view the price')
    } else {
        showPrice()
    }
}


function reset() {
    priceParent.innerHTML = '';
    productParent.innerHTML = ''
}

resetButton.onclick = function () {
    if (priceParent.innerHTML === '') {
        alert('No price to reset. Please select a product first.');
    } else {
        reset();
    }
};
