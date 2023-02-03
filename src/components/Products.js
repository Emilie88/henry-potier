import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";



const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://henri-potier.xebia.fr/books");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  
  

  return (
    <div className="bookList">
      {!!products.length &&
        products.map((product) => (
            <>
          <Card
            key={product.isbn}
            title={product.title}
            price={product.price}
            cover={product.cover}
            synopsis={product.synopsis}
            isbn={product.isbn}
            
          />
         
          </>
        ))}
    </div>
  );
};
export default Products;
