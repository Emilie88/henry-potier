import { useContext } from "react";
import { Context } from "./context/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const { default: Link } = require("next/link");

const Navbar = () => {
    const {items, setItems} = useContext(Context);

    
  const quantity = items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <nav className="navbar">
        <Link href="/" className="linkItem">
          Books
        </Link>
        <Link href="/cart" className="linkItem">
        <FontAwesomeIcon icon={faCartShopping} /> 
          <span style={{paddingLeft: '10px'}}>{quantity} items</span>
        </Link>
    </nav>
  );
};
export default Navbar;
