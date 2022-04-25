import { Button } from "antd";
import "antd/dist/antd.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      {/* <Button type="primary">wanshi </Button> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
