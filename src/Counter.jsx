import { useState } from "react";

const Counter = () => {

  // update the count state variable when the button is clicked using setCount
  // replace the text inside the h1 tag with the value of count

  const [counter, setCount] = useState(0)

  const increment = () => {
    //   add code here
    console.log('clicked')
    setCount(counter + 1)
  };

  const decrement = () => {
    //   add code here
    console.log('clicked')
    setCount(counter - 1)
  };

  return (
    <div className="counter">
      <h1>Counter:{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
