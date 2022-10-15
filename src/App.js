import { Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Home } from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
