import { useState } from "react";
import { produce } from "immer";

const App = () => {
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        return item.id === 1 ? { ...item, quantity: 2 } : item;
      }),
    });
  };

  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <li>
            {item.title} {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
