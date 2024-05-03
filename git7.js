import {renderOrderSummary} from 'orderSummary.js';
import {renderPaymentSummary} from 'paymentSummary.js';
import {loadProducts, loadProductsFetch} from 'products.js';
import {loadCart, loadCartFetch} from 'cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch();
    await loadCartFetch();
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
