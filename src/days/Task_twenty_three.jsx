import { useState, useEffect, useMemo, useCallback } from "react";

const Task_twenty_three = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(false);

  // Fetch API
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // useCallback
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  // useMemo
  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div
      className={`min-h-screen p-8 transition-all duration-300 ${
        theme ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">
          useMemo & useCallback Example
        </h1>

        <button
          onClick={() => setTheme(!theme)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {theme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={handleSearch}
          className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`rounded-xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105 ${
              theme ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
            />

            <h2 className="font-semibold text-center line-clamp-2 h-12">
              {product.title}
            </h2>

            <p className="text-xl font-bold text-green-600 mt-3">
              ₹ {product.price}
            </p>

            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task_twenty_three;