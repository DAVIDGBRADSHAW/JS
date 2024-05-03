@@ -1,30 +1,32 @@
import {formatCurrency} from '../scripts/utils/money.js';
export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}
class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
    this.keywords = productDetails.keywords;
  }

  getStarsUrl() {
  11 changes: 10 additions & 1 deletion11  
2-copy-of-code/lesson-18/scripts/amazon.js
Viewed
@@ -16,7 +16,16 @@ function renderProductsGrid() {
  // filter the products that match the search.
  if (search) {
    filteredProducts = products.filter((product) => {
      return product.name.includes(search);
      let matchingKeyword = false;

      product.keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(search.toLowerCase())) {
          matchingKeyword = true;
        }
      });

      return matchingKeyword ||
        product.name.toLowerCase().includes(search.toLowerCase());
    });
  }