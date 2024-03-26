import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "un React Dev",
        1000,
        "un NodeJS Dev",
        1000,
        "un SQL Dev",
        1000,
        "un API Dev",
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
