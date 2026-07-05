import { useEffect, useState } from "react";

const Task_fivteen= () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  // Fetch API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  // Unique Categories
  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  // Search + Category + Sorting
  const filteredProducts = products
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "All" ? true : item.category === category
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, index) => (
          <option key={index}>{cat}</option>
        ))}
      </select>

      <br />
      <br />

      {/* Sorting */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low">Price Low to High</option>
        <option value="high">Price High to Low</option>
      </select>

      <hr />

      {filteredProducts.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
          <img
            src={item.thumbnail}
            alt={item.title}
            width="120"
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Task_fivteen;