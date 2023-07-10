import { useHelper } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { PointLightHelper, DirectionalLightHelper, SpotLightHelper } from "three";
import * as THREE from "three";

export const Lights = () => {
    const pointLightRef = useRef<any>(null);
    useHelper(pointLightRef, PointLightHelper, 1, "red");
  
    const directionalRef = useRef<any>(null);
    useHelper(directionalRef, DirectionalLightHelper, 1);
  
    const spotLightHelper = useRef<any>(null);
    useHelper(spotLightHelper, SpotLightHelper, 1);
  
    const spotlight = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
    const spotlight2 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
    const spotlight3 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
    const spotlight4 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
  
    const spotlight5 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
    const spotlight6 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
    const spotlight7 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
    const spotlight8 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
    const spotlight9 = useMemo(() => new THREE.SpotLight("#ede7d3"), []);
  
    return (
      <>
        {/* <pointLight position={[0,8,5]} intensity={1} castShadow ref={pointLightRef}/> */}
        {/* <directionalLight intensity={0.5} castShadow ref={directionalRef}/> */}
        {/* <spotLight position={[0,18,0]} intensity={0.7} angle={0.8} castShadow penumbra={1} ref={spotLightHelper} /> */}
        {/* <ambientLight intensity={0.1}/> */}
        <group>
          <primitive
            object={spotlight}
            position={[0, 14, 0]}
            intensity={1.5}
            angle={1}
            castShadow
            penumbra={0.9}
            shadow-radius={10}
            shadow-bias={-0.0001}
          />
          <primitive object={spotlight.target} position={[0, 0, 0]} />
        </group>
  
        <group>
          <primitive
            object={spotlight2}
            position={[19, 14, 13]}
            intensity={0.7}
            angle={0.6}
            castShadow
            penumbra={0.9}
            shadow-radius={10}
            shadow-bias={-0.0001}
          />
          <primitive object={spotlight2.target} position={[19, -4, 13]} />
        </group>
  
        <group>
          <primitive
            object={spotlight9}
            position={[13, 14, -15]}
            intensity={0.7}
            angle={0.9}
            castShadow
            penumbra={0.9}
            shadow-radius={10}
            shadow-bias={-0.0001}
          />
          <primitive object={spotlight9.target} position={[13, -4, -15]} />
        </group>
  
        <group>
          <primitive
            object={spotlight5}
            position={[-19, 14, 13]}
            intensity={0.7}
            angle={0.6}
            castShadow
            penumbra={0.9}
            shadow-radius={10}
            shadow-bias={-0.0001}
          />
          <primitive object={spotlight5.target} position={[-19, -4, 13]} />
        </group>
  
        <group>
          <primitive
            object={spotlight8}
            position={[-13, 14, -15]}
            intensity={0.7}
            angle={0.9}
            castShadow
            penumbra={0.9}
            shadow-radius={10}
            shadow-bias={-0.0001}
          />
          <primitive object={spotlight8.target} position={[-13, -4, -15]} />
        </group>
      </>
    );
  };
  