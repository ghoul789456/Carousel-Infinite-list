import React from "react";
import { useEffect, useState } from "react";
function fetchData() {
  const data = [
    { image: "/1.png", name: "tom", age: 18 },
    { image: "/2.png", name: "jerry", age: 19 },
    { image: "/3.png", name: "spike", age: 20 },
  ];
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push(...data);
  }
  return result;
}

export default function useObserve(obj) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!obj.current) return;
    console.log("obj", obj.current);
    const callback = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const newData = fetchData();
        setData((prev) => [...prev, ...newData]);
      }
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(obj.current);
    console.log("data", data);
    return () => observer.disconnect();
  }, [obj]);
  return data;
}
