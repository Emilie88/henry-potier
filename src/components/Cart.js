import { useContext, useState, useEffect } from "react";
import { Context } from "./context/context";
import axios from "axios";
const { default: Image } = require("next/image");

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
        `http://henri-potier.xebia.fr/books/${isbn}/commercialOffers`
      );
      setTotalWithOffers(response.data);
    };
    getCommercialOffers();
  });

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

  const removeItem = (isbn) => {
    setItems((items) => {
      if (items.find((item) => item.isbn === isbn)?.quantity === 1) {
        return items.filter((item) => item.isbn !== isbn);
      } else {
        return items.map((item) => {
          if (item.isbn === isbn) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <div className="cart-container">
        {totalPrice === 0 &&<h4>No products in your cart </h4>}
      {!!items &&
        !!items.length &&
        items.map((item) => (
            <div key={item.isbn}>
                <h4>Original price : {item.price} € , Price after commercial: {item.price - totalWithOffers?.offers[0].value} €</h4>
          <div className="cartItem">
            <Image width={80} height={80} src={item.cover} alt="book" />
            <div className="cartitemTitle">{item.title}</div>
            <button onClick={() => removeItem(item.isbn)} className="addToCartBtn">Remove item</button>
          </div>
          </div>
        ))}

      <h4 className="total">Total: {totalPrice} €</h4>
    </div>
  );
};

export default Cart;
