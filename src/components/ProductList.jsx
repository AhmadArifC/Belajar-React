import ProductCard from "./ProductCard";

function ProductList({ products, favorites, toggleFavorite }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default ProductList;
