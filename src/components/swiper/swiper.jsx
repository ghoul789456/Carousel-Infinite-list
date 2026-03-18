import React from "react";
import { useState, useEffect, useRef } from "react";
import "./index.css";

export default function Swiper() {
  const [position, setPosition] = useState(1);
  const [animation, setAnimaton] = useState(true);
  const swiper = useRef(null);
  function swiperFunc() {
    if (swiper.current) {
      clearInterval(swiper.current);
    }
    swiper.current = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 3000);
  }
  useEffect(() => {
    swiperFunc();
    return () => clearInterval(swiper);
  }, []);
  useEffect(() => {
    if (position === 4) {
      setTimeout(() => {
        setAnimaton(false);
        setPosition(1);
      }, 500);
    }
    if (position === 0) {
      setTimeout(() => {
        setAnimaton(false);
        setPosition(3);
      }, 500);
    }
    if (position === 1 || position === 3) {
      setTimeout(() => {
        setAnimaton(true);
      }, 50);
    }
    console.log("position", position);
  }, [position]);
  function back() {
    clearInterval(swiper.current);
    if (position !== 0) {
      setAnimaton(true);
      setPosition(position - 1);
    } else {
      setPosition(3);
    }
    swiperFunc();
  }
  function forward() {
    clearInterval(swiper.current);
    if (position !== 5) {
      setAnimaton(true);
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
    swiperFunc();
  }
  return (
    <div className="swiper-box">
      <div
        className="container-images"
        style={{
          transition: animation ? "transform 0.5s ease" : "none",
          transform: `translateX(-${position * 100}%)`,
        }}
      >
        <img src="/3.png" alt="" />
        <img src="/1.png" alt="" />
        <img src="/2.png" alt="" />
        <img src="/3.png" alt="" />
        <img src="/1.png" alt="" />
      </div>
      <div className="left" onClick={back}>
        {"<"}
      </div>
      <div className="right" onClick={forward}>
        {">"}
      </div>
    </div>
  );
}
