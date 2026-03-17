import { useState } from "react";
import Swiper from "./components/swiper/swiper";
import List from "./components/list/list";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Swiper />
      <List />
    </div>
  );
}

export default App;
