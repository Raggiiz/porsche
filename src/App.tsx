import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Maclaren from "./Maclaren";
import Porsche from './Porsche'

function App() {
  return (
    <div className="App h-screen">
      <Canvas>
      <Stage environment={"city"}>
        <OrbitControls />
        {/* <Maclaren /> */}
        <Porsche />
      </Stage>
      </Canvas>
    </div>
  );
}

export default App;
