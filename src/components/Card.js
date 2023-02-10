const { default: Image } = require("next/image");
import { Context } from "./context/context";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

const Card = ({ title, price, cover, synopsis, isbn,cart }) => {
  const { items, setItems } = useContext(Context);

  const addToCart = () => {
    setItems((items) => {
      const isItemsFound = !!items.length && items.find((item) => item.isbn === isbn);
      if (isItemsFound) {
        return items.map((item) => {
          if (item.isbn === isbn) {
            return { ...item, quantity: item.quantity + 1,price,title,cover };
          } else {
            return item;
          }
        });
      } else {
        return [...items, { isbn, quantity: 1, price ,title,cover}];
      }
    });
  };
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
    <div className="cardContainer">
      <img style={{width: "100%",height: "100%"}} src={cover} alt="book" />
      <h3 className="titleCard">{title}</h3>
      <div className="addToCartContent">
        <h4>{price} €</h4>
        <button className="addToCartBtn" onClick={() => cart ? addToCart() : removeItem(isbn)}><FontAwesomeIcon icon={cart ? faCartPlus : faTrash} /></button>
      </div>
    </div>
  );
};

export default Card;
