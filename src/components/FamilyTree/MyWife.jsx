import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const MyWife = () => {
  const ring = useContext(RingContext);
  return <div>MyWife Status: Alhamdulillah!! Got the {ring} </div>;
};

export default MyWife;
