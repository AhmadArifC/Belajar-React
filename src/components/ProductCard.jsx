import Card from "./Card";

function ProductCard({ product, isFavorite, toggleFavorite }) {
  return (
    <Card>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      />

      <h3>{product.name}</h3>
      <p>Kategori: {product.category}</p>
      <p>Rp {product.price.toLocaleString("id-ID")}</p>
      <p>Stok: {product.stock}</p>

      <div className="card-buttons">
        <button className="detail-btn">Detail</button>
        <button
          className={`fav-btn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleFavorite(product.id)}>
          {isFavorite ? "❤️ Favorit" : "🤍 Tambah ke Favorit"}
        </button>
      </div>
    </Card>
  );
}

export default ProductCard;
// This component displays a product card with an image, name, category, price, and stock information.
