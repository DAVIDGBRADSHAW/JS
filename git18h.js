import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage, cart} from '../../data/cart.js';
import {loadProducts, loadProductsFetch} from '../../data/products.js';
describe('test suite: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeAll((done) => {
    loadProductsFetch().then(() => {
      done();
    });
  beforeAll(async () => {
    await loadProductsFetch();
  });

  beforeEach(() => {
