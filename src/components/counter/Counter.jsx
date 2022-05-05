import React, { useEffect, useState } from "react";

function Counter() {
  const [state, setState] = useState(100); //state or reactive or source of truth

  useEffect(() => {
    console.log("Component rendered");
  }, [state]);
  const increment = () => {
    console.log("Increment called");
    setState(state + 1);
  };

  const decrement = () => {
    console.log("Decrement called");
    setState(state - 1);
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      {state}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
