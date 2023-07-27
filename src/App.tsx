import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/shared/nav-bar/NavBar";
import { Configurator } from "./components/configurator/Configurator";
import { AnimatePresence } from "framer-motion";
import { Checkout } from "./components/checkout/Checkout";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <div className="w-full overflow-x-hidden">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/911/gt2" />} />
            <Route path="/911/gt2" element={<Home />} />
            <Route path="/911/gt2/configurator" element={<Configurator />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
