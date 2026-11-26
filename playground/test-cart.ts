// Chạy: node playground/test-cart.ts
import { products } from "../src/data/products.ts";
import { addToCart, updateQuantity, removeFromCart, countItems, calcTotal } from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import { filterProducts, getCategories, searchByPriceRange, groupByCategory } from "../src/utils/product.ts";

let cart: CartItem[] = [];
cart = addToCart(cart, products[0]);      // Thêm sản phẩm 1 (x1)
cart = addToCart(cart, products[0], 2);   // Cộng thêm 2 -> thành x3
cart = addToCart(cart, products[3]);      // Thêm sản phẩm 4 (x1)

console.log("Số sản phẩm:", countItems(cart));
console.log("Tổng tiền:", formatPrice(calcTotal(cart)));

cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[3].id);
console.log(cart.map((i) => `${i.product.name} x${i.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "Danh mục Game, giá tăng dần:",
  filterProducts(products, { category: "Game", sort: "asc" }).map((p) => p.name)
);
console.log(
  "Tìm 'gta', tối đa 500k:",
  filterProducts(products, { keyword: "gta", maxPrice: 500000 }).map((p) => p.name)
);
console.log(
  "Khoảng giá 300k - 2tr:",
  searchByPriceRange(products, 300000, 2000000).map((p) => p.name)
);
console.log("Số sản phẩm theo danh mục:", groupByCategory(products));