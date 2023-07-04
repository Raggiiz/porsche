import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/nav-bar/NavBar";
import { Car } from "./components/car/Car";
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();
  return (
    <>
      <NavBar />
      <div className="w-full overflow-x-hidden">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/customize" element={<Car />} />
        </Routes>
      </AnimatePresence>
      </div>
    </>
  );
}

export default App;
