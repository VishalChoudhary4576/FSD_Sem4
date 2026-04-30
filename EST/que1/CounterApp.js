import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default CounterApp;