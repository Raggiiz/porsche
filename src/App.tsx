import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/shared/nav-bar/NavBar";
import { Configurator } from "./components/configurator/Configurator";
import { AnimatePresence } from "framer-motion";
import { Checkout } from "./components/checkout/Checkout";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(true);

  

  useEffect(() => {
    setIsLogged(localStorage.getItem('porschaLogin') === 'true');
    
    function checkUserData() {
      setIsLogged(localStorage.getItem('porschaLogin') === 'true');
    }
    window.addEventListener('storage', checkUserData)

    return () => {
      window.removeEventListener('storage', checkUserData)
    }
  }, []);


  return (
    <>
      <NavBar />
      <div className="w-full overflow-x-hidden">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/911/gt2" />} />
            <Route path="/911/gt2" element={<Home />} />
            <Route path="/911/gt2/configurator" element={<Configurator />} />
            <Route path="/checkout" element={isLogged ? <Checkout /> : <Navigate to="/" />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
