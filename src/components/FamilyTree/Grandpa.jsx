import React, { createContext, useState } from 'react';
import Father from './Father';

export const RingContext = createContext('Platinum');
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = 'diamond';
  const [money, setMoney] = useState(3000);

  return (
    <div className="border">
      Grandpa has money: {money}
      {/* <RingContext.Provider value="Precious Platinum Ring">
        <Father />
      </RingContext.Provider> */}
      <MoneyContext.Provider value={[money, setMoney]}>
        <Father />
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export
 * 2. Create a provider and pass a value
 * 3. Use useContext to receive the value
 */
