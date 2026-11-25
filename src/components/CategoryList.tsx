import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = [...new Set(items.map((p) => p.category))];

  return (
    <section className="container category-section">
      <div className="category-list">
        <span className="category-label">Danh mục:</span>
        {categories.map((category) => (
          <button key={category} className="category-pill">
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}