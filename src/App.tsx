import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const cheapProducts = filterProducts(products, { maxPrice: 300000, sort: "asc" });
  const over500kProducts = filterProducts(products, { minPrice: 500000, sort: "asc" });
  const gameProducts = filterProducts(products, { category: "Game" });
  const deviceProducts = filterProducts(products, { category: "Thiết bị chơi game" });
  const lowStockProducts = products.filter((p) => p.stock >= 1 && p.stock <= 5);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList items={products} />
        <ProductList title="Sản phẩm nổi bật" items={products} />
        <ProductList title="Giá dưới 300.000 đ" items={cheapProducts} />
        <ProductList title="Sản phẩm trên 500.000 đ" items={over500kProducts} />
        <ProductList title="Danh mục Game" items={gameProducts} />
        <ProductList title="Danh mục Thiết bị chơi game" items={deviceProducts} />
        <ProductList title="Sản phẩm sắp hết hàng" items={lowStockProducts} />
      </main>
      <Footer />
    </>
  );
}

export default App;