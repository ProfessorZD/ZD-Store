// إخفاء قسم المقدمة بعد 3 ثوانٍ
window.addEventListener('load', function () {
    const intro = document.getElementById('intro');
    setTimeout(() => {
        intro.classList.add('hide-intro');
    }, 3000); // الوقت بالميلي ثانية (3 ثوانٍ)
});

// خاصية التمرير السلس عند النقر على الروابط
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productName = this.parentElement.querySelector(".card-title").innerText;
            const productPrice = this.parentElement.querySelector(".card-text").innerText.replace("$", "");
            const productImage = this.parentElement.parentElement.querySelector(".card-img-top").src;

            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push({ name: productName, price: productPrice, image: productImage });
            localStorage.setItem("cart", JSON.stringify(cartItems));

            alert(`${productName} has been added to your cart!`);
        });
    });
});


