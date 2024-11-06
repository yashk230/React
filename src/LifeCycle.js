import React, { useEffect, useState } from 'react';

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Inside mount');

    return () => {
      console.log('Inside unmount');
    };
  },[]);

  useEffect(() => {
    if (count>=0){
      console.log('Inside update');
    }
  },[count]);

  return (
    <div>
              <h5>LifeCycle</h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifeCycle;
