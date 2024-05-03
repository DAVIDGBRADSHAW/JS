export let cart;
loadFromStorage();
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  }
}
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }
  saveToStorage();
}
export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}
export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
export function loadCart(fun) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    fun();
  });
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}
export async function loadCartFetch() {
  const response = await fetch('https://supersimplebackend.dev/cart');
  const text = await response.text();
  console.log(text);
  return text;
}
}

// Extra feature: make the cart empty after creating an order.
export function resetCart() {
  cart = [];
  saveToStorage();
}
  9 changes: 9 additions & 0 deletions9  
2-copy-of-code/lesson-18/scripts/amazon.js
Viewed
@@ -112,4 +112,13 @@ function renderProductsGrid() {
      const search = document.querySelector('.js-search-bar').value;
      window.location.href = `amazon.html?search=${search}`;
    });

  // Extra feature: searching by pressing "Enter" on the keyboard.
  document.querySelector('.js-search-bar')
    .addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const searchTerm = document.querySelector('.js-search-bar').value;
        window.location.href = `amazon.html?search=${searchTerm}`;
      }
    });
}
  4 changes: 3 additions & 1 deletion4  
2-copy-of-code/lesson-18/scripts/checkout/paymentSummary.js
Viewed
@@ -1,4 +1,4 @@
import {cart} from '../../data/cart.js';
import {cart, resetCart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';
@@ -89,6 +89,8 @@ export function renderPaymentSummary() {
        console.log('Unexpected error. Try again later.');
      }

      // Extra feature: make the cart empty after creating an order.
      resetCart();
      window.location.href = 'orders.html';
    });
}
  6 changes: 5 additions & 1 deletion6  
2-copy-of-code/lesson-18/scripts/tracking.js
Viewed
@@ -26,13 +26,17 @@ async function loadPage() {
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
  const percentProgress = ((today - orderTime) / (deliveryTime - orderTime)) * 100;

  // Extra feature: display "delivered" on the tracking page
  // if today's date is past the delivery date.
  const deliveredMessage = today < deliveryTime ? 'Arriving on' : 'Delivered on';

  const trackingHTML = `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>
    <div class="delivery-date">
      Arriving on ${
      ${deliveredMessage} ${
        dayjs(productDetails.estimatedDeliveryTime).format('dddd, MMMM D')
      }
    </div>