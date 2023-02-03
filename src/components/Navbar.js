import { useContext } from "react";
import { Context } from "./context/context";

const { default: Link } = require("next/link");

const Navbar = () => {
    const {items, setItems} = useContext(Context);

    
  const quantity = items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    
    <nav className="navbar">
      <div className="linkItem">
     
        <Link href="/" className="linkItem">
          Henri Potier
        </Link>
      </div>
      <div className="navBarItems">
        <Link href="/" className="linkItem">
          Books
        </Link>
        <Link href="/cart" className="linkItem">
          Cart 
          <span style={{paddingLeft: '10px'}}>{quantity} products</span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
