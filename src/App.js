import { Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Home } from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="about" element={<About />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
