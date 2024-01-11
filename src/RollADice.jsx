import React from "react";
import Dice from "./Dice";
import { useState } from "react";

function RollADice() {
  // 1. declare a state variable called side and initialize it to 0 - check if useState is imported

  const [side, setSide] = useState(0)

  // use this function to generate a random number between 0 and 5
  const getRand = () => {
    return Math.floor(Math.random() * 6);

  };

  function handleClick() {
    setSide(getRand())
  }

  return (
    <div className="rolldice">
      <Dice value={side} />
      <button onClick={handleClick}>Roll</button>
    </div>
  );
}

export default RollADice;
