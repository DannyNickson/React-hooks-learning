import React from "react";
import { useRef } from "react";
import useHover from './../hooks/useHover';

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref)


  return (
    <div ref={ref} style={{ width: 300, height: 300, background: isHovering?'blue':'black' }}></div>
  );
};

export default Hover;
