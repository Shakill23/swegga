function calculateTotal() {
    const femalePrice = 150.95;
    const malePrice = 180.95;

    const femaleQuantity = parseInt(document.getElementById('female-quantity').value);
    const maleQuantity = parseInt(document.getElementById('male-quantity').value);

    const femaleTotal = femalePrice * femaleQuantity;
    const maleTotal = malePrice * maleQuantity;

    document.getElementById('female-total').innerText = 'R ' + femaleTotal.toFixed(2);
    document.getElementById('male-total').innerText = 'R ' + maleTotal.toFixed(2);

    const orderTotal = femaleTotal + maleTotal;
    document.getElementById('order-total').innerText = 'R ' + orderTotal.toFixed(2);
}

window.onload = calculateTotal;