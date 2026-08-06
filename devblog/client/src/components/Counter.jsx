import { useEffect } from 'react';

const Counter = ({ count, setCount }) => {
  useEffect(() => {
    console.log(` Counter value changed to: ${count}`);
  }, [count]);

  return (
    <div className="counter-box">
      <h3>Interactive Counter: {count}</h3>
      <button className="btn" onClick={() => setCount(count + 1)}>
         Increment
      </button>
      <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;