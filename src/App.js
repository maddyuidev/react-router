import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CakeContainerHooks from "./components/CakeContainerHooks";
import IceCreamContainerHooks from "./components/IceCreamContainerHook";
import Shop from "./components/shop";
import FormikContainer from "./components/forms/FormikContainer";

function App() {
  return (
    <div>
      <FormikContainer />
      <CakeContainer />
      <CakeContainerHooks />
      <IceCreamContainerHooks />
      <Shop />
    </div>
  );
}

export default App;
