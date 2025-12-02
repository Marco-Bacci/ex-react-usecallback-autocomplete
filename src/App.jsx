import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    if (search.trim() === "") {
      setResults([]);
      return;
    }
    fetch(`http://localhost:3333/products?search=${search}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="cerca prodotto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="suggerimenti">
        {results.map((product) => {
          return <p key={product.id}>{product.name}</p>;
        })}
      </div>
      
    </>
  );
}

export default App;
