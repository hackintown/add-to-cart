import { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  // State to manage items in the cart
  const [cart, setCart] = useState([]);
  // State to manage the visibility of the warning message
  const [warning, setWarning] = useState(false);
  // State to toggle between Shop and Cart view
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);

    // If item is already in the cart, show warning
    if (isPresent) {
      setWarning(true);
      // Hide warning after 2 seconds
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    // Add item to the cart
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    // Find the index of the item in the cart
    const updatedCart = cart.map((data) =>
      data.id === item.id
        ? { ...data, amount: Math.max(1, data.amount + d) }
        : data
    );
    // Update the cart state with the new quantity
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar cart={cart.length} setShow={setShow} />
      {/* Toggle between Shop and Cart views */}
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
}

export default App;
