import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "un React Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "un NodeJS Developer",
        1000,
        "un SQL Developer",
        1000,
        "un API Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text[40px] sm:text[35px] text-[25px] font-bold text-white"
      repeat={Infinity}
    />
  );
};

export default TypeWriterEffect;
