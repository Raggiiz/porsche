import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/nav-bar/NavBar";
import { Car } from "./components/car/Car";

function App() {


  return (
    <>
      <NavBar />
      <div className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize" element={<Car />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
