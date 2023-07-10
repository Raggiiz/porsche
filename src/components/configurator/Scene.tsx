import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  PointLightHelper,
  DirectionalLightHelper,
  SpotLightHelper,
} from "three";
import Road from "./road/Road";
import { Garage } from "./garage/Garage";
import Porsche from "./car/Porsche";

export const Scene = ({ configs, interiorEnvironment }: any) => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Perf position="bottom-left" />
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

        {interiorEnvironment ? <Garage /> : <Road />}
      </Suspense>
    </Canvas>
  );
};
