import * as THREE from 'three'
import React, { useRef } from 'react'
import { Plane, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import TireRack from './TireRack'
import { useLoader } from '@react-three/fiber'
import textureWall from '../../../../public/textures/grunge-wall-texture.jpg'
import textureFloor from '../../../../public/textures/old-grunge-concrete.jpg'


export default function Model(props: JSX.IntrinsicElements['group']) {
  const textureWall1 = useLoader(THREE.TextureLoader, textureWall)
  const textureFloor1 = useLoader(THREE.TextureLoader, textureFloor)
  return (
    <group {...props} dispose={null} scale={3} receiveShadow>
      <TireRack />
      <mesh position={[0, 2.5, -7]} receiveShadow castShadow>
        <planeGeometry args={[15, 5]} />
        <meshStandardMaterial map={textureWall1}  />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[15, 15]}/>
        <meshStandardMaterial map={textureFloor1}/>
      </mesh>
    </group>
  )
}

