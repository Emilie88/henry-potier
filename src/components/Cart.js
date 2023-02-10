import { useContext, useState, useEffect } from "react";
import { Context } from "./context/context";
import axios from "axios";
const { default: Image } = require("next/image");
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

const Cart = () => {
  const { items, setItems } = useContext(Context);
  const [isbn, setIsbn] = useState(0);

  const [totalWithOffers, setTotalWithOffers] = useState();
  useEffect(() => {
    !!items.length && items.map((item) => setIsbn(item.isbn));
  }, [items]);

  useEffect(() => {
    const getCommercialOffers = async () => {
      const response = await axios.get(
        `http://henri-potier.xebia.fr/books/
        ${isbn}/commercialOffers`
      );
      setTotalWithOffers(response.data);
    };
    getCommercialOffers();
  }, [isbn]);

  //   const quantity = items.reduce((acc, curr) => {
  //     return acc + curr.quantity;
  //   }, 0);

  const totalPrice = items.reduce((acc, curr) => {
    let total = null;
    if (totalWithOffers?.offers[0].value) {
      total =
        acc + curr.quantity * (curr.price - totalWithOffers?.offers[0].value);
    } else {
      total = acc + curr.quantity * curr.price;
    }
    return total;
  }, 0);

  

  return (
    <><div className="bookList" style={{ height: '100%' }}>
      {totalPrice === 0 && <h4>No products in your cart </h4>}
      {!!items &&
        !!items.length &&
        items.map((item) => (
          <Card
            key={item.isbn}
            title={item.title}
            price={item.price}
            cover={item.cover}
            synopsis={item.synopsis}
            isbn={item.isbn} />
          // <div key={item.isbn}>
          //   <h4>
          //     Original price : {item.price} € , Price after commercial:{" "}
          //     {item.price - totalWithOffers?.offers[0].value} €
          //   </h4>
          //   <div className="cartItem">
          //     <Image width={80} height={80} src={item.cover} alt="book" />
          //     <div className="cartitemTitle">{item.title}</div>
          //     <button
          //       onClick={() => removeItem(item.isbn)}
          //       className="addToCartBtn"
          //     >
          //       <FontAwesomeIcon icon={faTrash} />
          //     </button>
          //   </div>
          // </div>
        ))}


    </div><h4 className="total">Total with all commercialOffers : {totalPrice} €</h4></>
  );
};

export default Cart;
