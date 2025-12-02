import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="cerca prodotto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default App;
