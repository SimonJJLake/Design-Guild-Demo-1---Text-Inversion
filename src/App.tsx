import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import "./App.css";
import logo from "./logo.png";

function App() {
  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <motion.div
      className="App"
      style={{
        backgroundColor: `hsl(0, 0%, ${
          10 + Math.max(Math.min((scroll - 0.7) * 20 * 100, 100), 0)
        }%`,
        // backgroundColor: "black",
      }}
    >
      <div className="imageContainer">
        <img className="image" src={logo} />
      </div>
      <div className="box1" />
      <div className="box2" />
      <div className="titleContainer">
        <div>
          <h2 className="subTitle">Welcome to</h2>
        </div>
        <h1 className="mainTitle">DESIGN GUILD</h1>
      </div>
    </motion.div>
  );
}

export default App;
