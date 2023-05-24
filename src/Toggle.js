import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setToggled] = useState(true);

  const fade = useSpring({
    opacity: isToggled ? 1 : 0,
    fontSize: isToggled ? "2rem" : "5em",
    color: isToggled ? "#A93226" : "green",
    transform: isToggled ? "translate3d(0,0,0)" : "translate3d(0,-50px,0)",
  });
  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggled(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
