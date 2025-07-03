import { useState } from "react";
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

  return (
    <>
      <Header title="Aplikasi Katalog Sederhana" />
      <main>
        <SearchBar query={query} setQuery={setQuery} />
        <ProductList products={filteredProducts} />
      </main>
    </>
  );
}

export default App;
