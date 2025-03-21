/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/arcade/scene.gltf -t -r public
Author: Tomas_Tew (https://sketchfab.com/Tomas_Tew)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/arcade-machine-2d57b061781c480593841ca282f62a5f
Title: Arcade Machine
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    pCube1_blinn1_0: THREE.Mesh
    pCylinder1_blinn5_0: THREE.Mesh
    pCylinder1_blinn3_0: THREE.Mesh
    pCylinder3_blinn6_0: THREE.Mesh
    pCylinder4_blinn6_0: THREE.Mesh
    pCylinder5_blinn2_0: THREE.Mesh
    pCylinder6_blinn6_0: THREE.Mesh
  }
  materials: {
    blinn1: THREE.MeshStandardMaterial
    blinn5: THREE.MeshStandardMaterial
    blinn3: THREE.MeshStandardMaterial
    blinn6: THREE.MeshStandardMaterial
    blinn2: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Take 001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Arcade(props: JSX.IntrinsicElements['group']) {
  const group = useRef<any>()
  const { nodes, materials, animations } = useGLTF('/models/arcade/scene.gltf') as GLTFResult
  // const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="19cb20496a324dabbb8c7acf98897703fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="imagePlane1" position={[-3.56, 0, -3.96]} rotation={[0, Math.PI / 2, 0]} />
                <group name="pCube1" position={[0, 5.06, 0]} scale={10}>
                  <mesh name="pCube1_blinn1_0" geometry={nodes.pCube1_blinn1_0.geometry} material={materials.blinn1} castShadow receiveShadow/>
                </group>
                <group name="imagePlane2" position={[-2, 7, -4]} />
                <group name="pCylinder1" position={[4.41, 7.23, 0.46]} rotation={[0, 0, -0.07]} scale={0.07}>
                  <mesh name="pCylinder1_blinn5_0" geometry={nodes.pCylinder1_blinn5_0.geometry} material={materials.blinn5} castShadow receiveShadow/>
                  <mesh name="pCylinder1_blinn3_0" geometry={nodes.pCylinder1_blinn3_0.geometry} material={materials.blinn3} castShadow receiveShadow/>
                </group>
                <group name="pCylinder3" position={[4.61, 7.15, -0.95]} rotation={[0, 0, -0.05]} scale={[0.16, 0.03, 0.16]}>
                  <mesh name="pCylinder3_blinn6_0" geometry={nodes.pCylinder3_blinn6_0.geometry} material={materials.blinn6} castShadow receiveShadow/>
                </group>
                <group name="pCylinder4" position={[4.05, 7.18, -0.95]} rotation={[0, 0, -0.05]} scale={[0.16, 0.03, 0.16]}>
                  <mesh name="pCylinder4_blinn6_0" geometry={nodes.pCylinder4_blinn6_0.geometry} material={materials.blinn6} castShadow receiveShadow/>
                </group>
                <group name="pCylinder5" position={[1.23, 9.73, 0.41]} rotation={[0, 0, 0.22]} scale={[0.46, 1.62, 2.01]}>
                  <mesh name="pCylinder5_blinn2_0" geometry={nodes.pCylinder5_blinn2_0.geometry} material={materials.blinn2} castShadow receiveShadow/>
                </group>
                <group name="transform1" />
                <group name="transform2" />
                <group name="transform3" />
                <group name="transform4" />
                <group name="pCylinder6" position={[4.05, 7.18, -0.95]} rotation={[0.01, 0, -0.06]} scale={[0.16, 0.03, 0.16]}>
                  <mesh name="pCylinder6_blinn6_0" geometry={nodes.pCylinder6_blinn6_0.geometry} material={materials.blinn6} castShadow receiveShadow/>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/arcade/scene.gltf')
