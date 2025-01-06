// تحديد العناصر
const productImages = document.querySelectorAll('.product-img');
const hoverPreview = document.getElementById('hover-preview');
const hoverImg = document.getElementById('hover-img');

// إضافة حدث hover على الصور
productImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
        hoverImg.src = img.src; // تعيين الصورة للمربع
        hoverPreview.style.display = 'block'; // إظهار المربع
    });

    img.addEventListener('mouseleave', () => {
        hoverPreview.style.display = 'none'; // إخفاء المربع
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productName = this.parentElement.querySelector(".card-title").innerText;
            alert(`${productName} has been added to your cart!`);
        });
    });
});



// تعريف قائمة المنتجات
const products = [
    { id: 1, name: "Luxury Watch", price: 150, img: "images/w1.webp" },
    { id: 2, name: "Casual Watch", price: 120, img: "images/w2.webp" },
    { id: 3, name: "Leather Bracelet", price: 80, img: "images/w3.jpg" },
    { id: 4, name: "Elegant Watch", price: 200, img: "images/w4.jpeg" },
    { id: 5, name: "Stylish Sunglasses", price: 100, img: "images/w5.jpg" },
    { id: 6, name: "Leather Wallet", price: 60, img: "images/w6.webp" },
    { id: 7, name: "Classic Tie", price: 40, img: "images/w7.jpg" },
    { id: 8, name: "Designer Belt", price: 70, img: "images/w8.jpeg" },
    { id: 9, name: "Gold Cufflinks", price: 120, img: "images/w9.jpg" }
];

// عرض المنتجات في صفحة الرجال
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.row.g-4');
    productsContainer.innerHTML = products
        .map(product => `
            <div class="col-md-4">
                <div class="card p-4 shadow-sm text-center">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price}</p>
                        <button class="btn btn-dark add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `)
        .join('');
});


// إضافة المنتج إلى السلة وعرض رسالة للزبون
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    // قراءة السلة الحالية من localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // إضافة المنتج إلى السلة
    cart.push(selectedProduct);
    
    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // عرض رسالة باستخدام SweetAlert2
    Swal.fire({
        title: 'تم إضافة المنتج إلى السلة!',
        text: `هل ترغب بالانتقال إلى صفحة السلة أو متابعة التسوق؟`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'الذهاب إلى السلة',
        cancelButtonText: 'إضافة المزيد',
        reverseButtons: true,
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-secondary'
        },
        buttonsStyling: false
    }).then((result) => {
        if (result.isConfirmed) {
            // الانتقال إلى صفحة السلة
            window.location.href = 'cart.html';
        } else {
            // يبقى المستخدم في صفحة المنتجات
            Swal.fire(
                'تابع التسوق!',
                'يمكنك إضافة المزيد من المنتجات إلى السلة.',
                'info'
            );
        }
    });
}
