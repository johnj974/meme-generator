//FIX THIS, CURRENT MOOD NEEDS TO BE STATE
import React from "react";

export default function Happy() {
  const [happyMeter, setHappyMeter] = React.useState(true);
  let currentMood = "😁";

  function increaseHappy() {
    setHappyMeter(true);
  }
  function decreaseHappy() {
    setHappyMeter(false);
    console.log(happyMeter);
  }

  if (happyMeter === true) {
    currentMood = "😁";
  } else {
    currentMood = "🤬";
  }

  return (
    <div className="happyBox">
      <button onClick={decreaseHappy}>Decrease Happiness</button>
      <h1>{currentMood}</h1>
      <button onClick={increaseHappy}>Increase Happiness</button>
    </div>
  );
}
