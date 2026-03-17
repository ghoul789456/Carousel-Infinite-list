import React from "react";
import { useState, useEffect, useRef } from "react";
import "./index.css";

export default function Swiper() {
  const [position, setPosition] = useState(0);
  let swiper;
  useEffect(() => {
    swiper = setInterval(() => {
      const index = (position + 1) % 3;
      setPosition(index);
    }, 3000);
    console.log("position", position);
    return () => clearInterval(swiper);
  }, [position]);

  return (
    <div className="swiper-box">
      <div
        className="container-images"
        style={{ transform: `translateX(-${position * 100}%)` }}
      >
        <img src="/1.png" alt="" />
        <img src="/2.png" alt="" />
        <img src="/3.png" alt="" />
      </div>
    </div>
  );
}
