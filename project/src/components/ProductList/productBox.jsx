import axios from "axios";
import { useState, useEffect } from "react";

function ProductBox({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/products/${productId}`);
      setProduct(response.data);
    }

    fetchData();
  }, [productId]);

  if (product) {
    return (
      <div className="product-box">
        <img src={product.imageUrl} alt={product.productName} />
        <div className="note">
          <h2>{product.productName}</h2>
          <h3>{product.productDescription}</h3>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
