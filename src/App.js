import "./index.css";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);
  return (
    <div className="App">
      <motion.div
        className="bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>
      <h1>7</h1>
      <h1>8</h1>
      <h1>9</h1>
      <h1>10</h1>
    </div>
  );
}

export default App;
