import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Road from "./road/Road";
import { Garage } from "./garage/Garage";
import Porsche from "./car/Porsche";
import { CarConfigs } from "./interfaces";
import { BrightnessContrast, ChromaticAberration, DepthOfField, EffectComposer, Vignette } from "@react-three/postprocessing";

interface SceneProps {
  configs: CarConfigs,
  interiorEnvironment: boolean,
  highQuality: boolean
}

export const Scene = ({ configs, interiorEnvironment, highQuality }: SceneProps) => {
  return (
    <Canvas shadows style={{ background: "#161616" }}>
      <Suspense fallback={null}>
        {/* <Perf position="bottom-right" /> */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.45} />
        <PerspectiveCamera
          makeDefault
          fov={70}
          position={[0, 11, 20]}
          matrixWorldAutoUpdate={undefined}
          getObjectsByProperty={undefined}
        />
        <Environment
          files={`/public/hdris/${
            interiorEnvironment
              ? "dikhololo_night_4k.hdr"
              : "rolling_hills_4k.hdr"
          }`}
          background={!interiorEnvironment}
        />

        <Porsche
          exteriorDesign={configs.exteriorDesign}
          interiorDesign={configs.interiorDesign}
        />

        <EffectComposer enabled={highQuality}>
          <DepthOfField focusDistance={0} focalLength={0.06} bokehScale={3.5} height={480} />
          <Vignette eskil={false} offset={0.02} darkness={0.99} />
          <ChromaticAberration radialModulation={false} modulationOffset={0} />
          <BrightnessContrast brightness={0.04} contrast={0.04}/>
        </EffectComposer>

        {interiorEnvironment ? <Garage /> : <Road />}
      </Suspense>
    </Canvas>
  );
};
