import React, { useContext } from 'react';
import Mother from './Mother';
import { MoneyContext } from './Grandpa';

const Father = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div className="border m-2">
      grandpa money: {money}
      <p>Father please money to grandpa</p>
      <button
        className="bg-emerald-700 text-white"
        onClick={() => setMoney(money + 1000)}
      >
        Send 10000
      </button>
      <Mother />
    </div>
  );
};

export default Father;
