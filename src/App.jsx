import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import products from "./data/products";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    document.title = `Katalog - ${filteredProducts.length} produk ditemukan`;
  }, [filteredProducts]);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Header title="Aplikasi Katalog Sederhana" />
      <main>
        <SearchBar query={query} setQuery={setQuery} />
        <ProductList
          products={filteredProducts}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        ;
      </main>
    </>
  );
}

export default App;
