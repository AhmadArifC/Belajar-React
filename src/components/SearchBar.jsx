import { useState, useEffect } from "react";

function SearchBar({ setQuery }) {
  const [inputValue, setInputValue] = useState("");

  // Simpan ke localStorage saat user berhenti mengetik
  useEffect(() => {
    const delay = setTimeout(() => {
      localStorage.setItem("lastSearch", inputValue);
      setQuery(inputValue);
    }, 500);

    return () => clearTimeout(delay);
  }, [inputValue, setQuery]);

  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default SearchBar;
