import React, { useState, useEffect } from "react";
import Data from "../../Data.json";
import Product from "../Components/Product";

const Products = ({ onSearch }) => {
  const [products, setProducts] = useState(Data.products);
  const [filteredProducts, setFilteredProducts] = useState(Data.products);

  useEffect(() => {
    if (onSearch) {
      // Listen for search updates and apply filtering
      const handleSearch = (query) => {
        if (query === "") {
          setFilteredProducts(products);
        } else {
          const lowercasedQuery = query.toLowerCase();
          const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(lowercasedQuery)
          );
          setFilteredProducts(filtered);
        }
      };
      onSearch(handleSearch); // Set the search handler
    }
  }, [onSearch, products]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredProducts.map((p) => (
            <Product product={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
