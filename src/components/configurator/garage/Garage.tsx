import React from "react";
import { useLoader } from "@react-three/fiber";
import textureWall from "/textures/grunge-wall-texture.jpg";
import textureFloor from "/textures/old-grunge-concrete.jpg";
import textureBrick from "/textures/bricks.jpg";
import textureBrickGraffiti from "/textures/brick-graffiti.jpg";
import steelDoor from "/textures/steeldoor.jpg";
import roof from "/textures/roof.jpg";
import * as THREE from "three";
import Lamp from "./Lamp";
import HangingLight from "./HangingLight";
import Workbench from "./Workbench";
import Chair from "./Chair";
import Cabinet from "./Cabinet";
import Vendor from "./Vendor";
import Arcade from "./Arcade";
import Door from "./Door";
import { Lights } from "./Lights";

export const Garage = (props: JSX.IntrinsicElements["group"]) => {
  const textureWall1 = useLoader(THREE.TextureLoader, textureWall);
  const textureFloor1 = useLoader(THREE.TextureLoader, textureFloor);
  const textureBricks = useLoader(THREE.TextureLoader, textureBrick);
  const textureBricksGraffiti = useLoader(
    THREE.TextureLoader,
    textureBrickGraffiti
  );

  const SteelDoor = useLoader(THREE.TextureLoader, steelDoor);
  const Roof = useLoader(THREE.TextureLoader, roof);
  return (
    <>
      <Lights />
      <group {...props} dispose={null} scale={3} receiveShadow>
        <mesh position={[0, 2.5, -7]} receiveShadow castShadow>
          <planeGeometry args={[15, 5]} />
          <meshStandardMaterial map={textureWall1} />
        </mesh>

        <mesh
          position={[-7.3, 2.5, 0]}
          rotation={[-Math.PI / 1, 1.565, 0]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[15, 5]} />
          <meshStandardMaterial map={textureBricksGraffiti} />
        </mesh>

        <group scale={1.46} position={[-7.25,1.6,-4]}>
          <Door />
        </group>

        <mesh
          position={[7.3, 2.5, 0]}
          rotation={[-Math.PI / 1, -1.565, 0]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[15, 5]} />
          <meshStandardMaterial map={textureBricks} />
        </mesh>

        <mesh
          position={[0, 2.5, 7]}
          rotation={[-Math.PI / 1, 0, 0]}
          receiveShadow
          castShadow
        >
          <planeGeometry args={[15, 5]} />
          <meshStandardMaterial map={SteelDoor} />
        </mesh>

        <group position={[7.259, 0, 3.6]} rotation-y={-Math.PI / 2}>
          <Workbench />
        </group>

        <group rotation-y={-Math.PI / 0.8} position={[5.5, 0, -5]}>
          <Chair />
        </group>

        <group position={[-6, 1.4, -7]} scale={0.65}>
          <Cabinet />
        </group>

        <group position={[-3.5, 0, -6.5]} scale={0.025}>
          <Vendor />
        </group>

        <group position={[-7, 0, 4.2]} scale={0.18}>
          <Arcade />
        </group>

        <mesh
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
        >
          <planeGeometry args={[15, 15]} />
          <meshStandardMaterial map={textureFloor1} />
        </mesh>

        <group position={[0, 5, 0]}>
          <Lamp />
        </group>

        <group position={[6.6, 4, 4]} scale={0.15}>
          <HangingLight />
        </group>


        <group position={[4, 4, -5]} scale={0.15} rotation-y={-Math.PI / 2}>
          <HangingLight />
        </group>

        <group position={[-4, 4, -5]} scale={0.15} rotation-y={-Math.PI / 2}>
          <HangingLight />
        </group>

        <group position={[-6.6, 4, 4]} scale={0.15}>
          <HangingLight />
        </group>

        <mesh
          position={[0, 5, 0]}
          rotation={[-Math.PI / -2, 0, 0]}
          castShadow
          receiveShadow
        >
          <planeGeometry args={[15, 15]} />
          <meshStandardMaterial map={Roof} />
        </mesh>
      </group>
    </>
  );
};
