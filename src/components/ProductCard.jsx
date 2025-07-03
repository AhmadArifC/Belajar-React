function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Kategori: {product.category}</p>
      <p>Rp {product.price.toLocaleString("id-ID")}</p>
      <p>Stok: {product.stock}</p>
    </div>
  );
}

export default ProductCard;
