import React from 'react';

const TShirt = (props) => {
  const { _id, name, price, picture } = props.tshirt;
  const { handleAddToCart, tshirt } = props;
  return (
    <div className="border rounded-lg grid grid-cols-1 justify-items-center p-5">
      <img src={picture} alt={name} className="h-64 rounded-lg" />
      <h4 className="font-medium">{name}</h4>
      <h4>Price: ${price}</h4>
      <button
        className="bg-yellow-500 text-white px-5 py-2 mt-2 "
        onClick={() => handleAddToCart(tshirt)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default TShirt;
