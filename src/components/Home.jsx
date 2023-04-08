import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import Cart from './Cart';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tshirt) => {
    // check if there are any duplicate
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      alert('You have already added this tshirt');
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
      console.log(id);
    }
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((tshirt) => tshirt._id !== id);
    setCart(remaining);
  };
  return (
    <div className="grid grid-cols-4">
      <div className="grid grid-cols-3 gap-3 col-span-3">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="grid col-span-1">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
