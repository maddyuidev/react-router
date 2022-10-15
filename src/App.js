import { Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Home } from "./components/home";
import Navbar from "./components/navbar";
import NoMatch from "./components/noMatch";
import OrderSummary from "./components/orderSummary";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
