const { default: Image } = require("next/image");
import { Context } from "./context/context";
import { useContext } from "react";

const Card = ({ title, price, cover, synopsis, isbn }) => {
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
  return (
    <div className="cardContainer">
      <Image width={500} height={450} src={cover} alt="book" />
      <h3 className="titleCard">{title}</h3>
      <div className="addToCartContent">
        <h4>{price} €</h4>
        <button className= "addToCartBtn" onClick={() => addToCart()}>Add to Cart</button>
      </div>

      <div className="cardDescription">{synopsis}</div>
    </div>
  );
};

export default Card;
