import React from "react";
import { useState, useEffect, useRef } from "react";
import useObserve from "./list_observer";
import Img from "../img/img";
import "./index.css";

export default function List() {
  const initData = [
    { image: "/1.png", name: "tom", age: 18 },
    { image: "/2.png", name: "jerry", age: 19 },
    { image: "/3.png", name: "spike", age: 20 },
    { image: "/1.png", name: "tom", age: 18 },
    { image: "/2.png", name: "jerry", age: 19 },
    { image: "/3.png", name: "spike", age: 20 },
    { image: "/1.png", name: "tom", age: 18 },
    { image: "/2.png", name: "jerry", age: 19 },
    { image: "/3.png", name: "spike", age: 20 },
    { image: "/1.png", name: "tom", age: 18 },
    { image: "/2.png", name: "jerry", age: 19 },
    { image: "/3.png", name: "spike", age: 20 },
  ];
  let observeObj = useRef(null);
  let data = useObserve(observeObj);
  console.log("data", data);

  const allData = [...initData, ...data];
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>照片</td>
            <td>姓名</td>
            <td>年龄</td>
          </tr>
        </thead>
        <tbody>
          {allData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="imgbox">
                  <Img url={item.image} />
                </td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
          <tr ref={observeObj}>
            <td colSpan="3">加载中</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
