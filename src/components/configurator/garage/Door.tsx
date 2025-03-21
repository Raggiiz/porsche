/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/door/scene.gltf -t -r public
Author: Zian (https://sketchfab.com/zian_0912)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/door-d23ec435af454cf985292778dbd65c9e
Title: Door
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_low002_Door_0: THREE.Mesh
  }
  materials: {
    Door: THREE.MeshStandardMaterial
  }
}

export default function Door(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/door/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Door_low002_Door_0.geometry} material={materials.Door} rotation={[-Math.PI / 2, 0, 0]} scale={1}/>
    </group>
  )
}

useGLTF.preload('/models/door/scene.gltf')
