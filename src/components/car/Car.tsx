import React, { useState } from 'react'
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Porsche from './scene/Porsche';

export const Car = () => {

  const [wheel, setWheel] = useState<"originalWheel" | "wheelExtra" | "wheelExtra2">("originalWheel");
  const [primaryColor, setPrimaryColor] = useState<string>("silver");
  const [secondaryColor, setSecondaryColor] = useState<string>("carbon");
  const [internalColor, setInternalColor] = useState<string>("black");
  const [brakesColor, setbrakeColor] = useState<string>("green");

  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <Stage environment={"city"}>
          <OrbitControls />
          <Porsche
            wheel={wheel}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            internalColor={internalColor}
            brakesColor={brakesColor}
          />
        </Stage>
      </Canvas>
    </div>
  )
}
