const product = [
    {
        id: 0,
        image: 'images/download.jpeg',
        title: 'Ramayana',
        price: 10.00,
    },
    {
        id: 1,
        image: 'images/harrypotter.jpeg',
        title: 'Harry Potter',
        price: 7.00,
    },
    {
        id: 2,
        image: 'images/twostates.jpeg',
        title: 'Two States',
        price: 18.00,
    },
    {
        id: 3,
        image: 'images/think.jpg',
        title: 'Think and Grow Rich',
        price: 40.00,
    },
    {
        id: 4,
        image: 'images/ikigai.jpg',
        title: 'Ikigai',
        price: 50.00,
    },
    {
        id: 5,
        image: 'images/time.jpg',
        title: 'Your Time Will Come',
        price: 60.00,
    },
    {
        id: 6,
        image: 'images/rich.jpg',
        title: 'Pant',
        price: 20.00,
    },
    {
        id: 7,
        image: 'images/pride.jpeg',
        title: 'Pride and Prejudice',
        price: 10.00,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="items-1">
            <div class="product">
                <img class='images' src=${image} alt=""></img>
                <h2 class="product-name">${title}</h2>
                <h3 class="product-price">$ ${price}.00</h3>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to Cart</button>" +
        `</div>
        </div>`
    )
}).join('');

var cart = [];
function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById('total').innerHTML = "$" + 0 + ".00";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById('total').innerHTML = "$" + total + ".00";

            return (
                `<div class=cart-item>
                    <div class=prod-img>
                        <img class=image src=${image} alt=""></img>
                    </div>
                    <div class=prod-details>
                    <p style='font-size:18px;'>${title}</p>
                    <h2 style='font-size:20px;'> $ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div></div>"
            );
        }).join('');
    }
}

let cartSec = document.querySelector('.sidebar');
let prodSec = document.querySelector('.container');
let cartIcon = document.querySelector('.cart-Icon');
let closeCart = document.querySelector('.close-cart');


cartIcon.onclick = () => {
    cartSec.classList.add("active");
    prodSec.classList.add("cart-product");
};
closeCart.onclick = () => {
    cartSec.classList.remove("active");
    prodSec.classList.remove("cart-product");

};


