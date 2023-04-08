import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  }
  return (
    <div>
      <h2 className={cart.length > 2 ? 'bg-emerald-600' : 'bg-red-500'}>
        Order Summary: {cart.length}
      </h2>
      {message}
      {cart.length > 2 ? 'aro kino' : 'shala fokir'}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{' '}
          <button
            className="font-medium text-sm rounded-full h-auto ml-2 bg-red-600 text-white"
            onClick={() => handleRemoveFromCart(tshirt._id)}
          >
            x
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
