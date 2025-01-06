// إضافة منتجات إلى السلة
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// عرض المنتجات في السلة
function displayCartItems() {
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        totalPrice += item.price;

        const cartItem = document.createElement('div');
        cartItem.className = 'col-md-4';
        cartItem.innerHTML = `
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price}</p>
                    <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// إزالة منتج من السلة
function removeItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
}

// استدعاء العرض عند التحميل
document.addEventListener('DOMContentLoaded', displayCartItems);

// معالجة تقديم الطلب
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order Submitted Successfully!');
    localStorage.removeItem('cart');
    displayCartItems();
});

// استدعاء الرسالة عند الضغط على "Cash Payment"
document.getElementById('cash-payment').addEventListener('click', () => {
    Swal.fire({
        title: 'Order Received!',
        text: 'We will contact you shortly to confirm your order.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00adb5', // لون الزر الأخضر
    });
});

// استدعاء الرسالة عند الضغط على "Visa Payment"
document.getElementById('visa-payment').addEventListener('click', () => {
    Swal.fire({
        title: 'Redirecting to Payment',
        text: 'You will be redirected to the payment gateway to complete your order.',
        icon: 'info',
        confirmButtonText: 'Proceed',
        confirmButtonColor: '#007bff', // لون الزر الأزرق
    });
});


