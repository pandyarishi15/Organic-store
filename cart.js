// Initialize an empty cart
let cart = [];

// Function to add items to the cart
function addToCart(product, price) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === product);
    if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        existingProduct.quantity++;
    } else {
        // If the product is not in the cart, add it
        cart.push({ name: product, price: price, quantity: 1 });
    }
    
    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear current cart display

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `${item.name} - Rs. ${item.price} x ${item.quantity}`;
            cartItemsDiv.appendChild(itemDiv);
        });

        // Update total price
        updateTotalPrice();
    }
}

// Function to update the total price
function updateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('total-price').innerText = `Total Price: Rs. ${totalPrice}`;
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some products before checking out.');
        return;
    }

    alert('Checkout successful! Thank you for shopping with us.');
    cart = []; // Empty the cart
    updateCart(); // Update the cart display after checkout
}
