import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { useGLTF, useHelper } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Road006_Fallen_Leaves_0: THREE.Mesh
    Road013_Asphalt_Edge_0: THREE.Mesh
    Road001_Rock_Decal_0: THREE.Mesh
    Road002_Green_tree_0: THREE.Mesh
    Road003_OFFICIAL_MARKINGS_0: THREE.Mesh
    Road004_Guardrails_0: THREE.Mesh
    Road005_Cliff_Rocks_0: THREE.Mesh
    Road007_Fallen_Leaves_0: THREE.Mesh
    Road008_Small_Rocks_0: THREE.Mesh
    Road009_Grass_Vegetation_0: THREE.Mesh
    Road010_Road_Groove_0: THREE.Mesh
    Road011_Road_Signs_0: THREE.Mesh
    Road012_Cracked_Road_0: THREE.Mesh
    Road014_Dark_Rocks_0: THREE.Mesh
    Road015_Grey_Rock_0: THREE.Mesh
    Road016_Tree_Trunk_0: THREE.Mesh
    Road016_Tree_Trunk_0_1: THREE.Mesh
    Road016_Tree_Trunk_0_2: THREE.Mesh
    Road017_Red_Tree_0: THREE.Mesh
    Road018_Grass_0: THREE.Mesh
    Road019_Asphalt_0: THREE.Mesh
  }
  materials: {
    Fallen_Leaves: THREE.MeshStandardMaterial
    Asphalt_Edge: THREE.MeshStandardMaterial
    Rock_Decal: THREE.MeshStandardMaterial
    Green_tree: THREE.MeshStandardMaterial
    ['OFFICIAL_MARKINGS.']: THREE.MeshStandardMaterial
    Guardrails: THREE.MeshStandardMaterial
    Cliff_Rocks: THREE.MeshStandardMaterial
    Small_Rocks: THREE.MeshStandardMaterial
    Grass_Vegetation: THREE.MeshStandardMaterial
    Road_Groove: THREE.MeshStandardMaterial
    Road_Signs: THREE.MeshStandardMaterial
    Cracked_Road: THREE.MeshStandardMaterial
    Dark_Rocks: THREE.MeshStandardMaterial
    Grey_Rock: THREE.MeshStandardMaterial
    Tree_Trunk: THREE.MeshStandardMaterial
    Red_Tree: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
    Asphalt: THREE.MeshStandardMaterial
  }
}

export default function Road({highQuality}: {highQuality: boolean}) {
  const { nodes, materials } = useGLTF('/models/externalEnvironment/scene.gltf') as GLTFResult

  const spotlight = useMemo(() => new THREE.SpotLight("#ede7d3"), []); // Ponto de luz para simular o sol

  // const spotLightHelper = useRef<any>(null);
  //   useHelper(spotLightHelper, SpotLightHelper, 1);
  return (
    <group dispose={null} position={[520,18.3,480]} rotation-z={-Math.PI / -30}>
      {highQuality &&
        <group>
          <primitive
            object={spotlight}
            position={[-500, 100, -470]}
            intensity={1.6}
            angle={1}
            castShadow
            penumbra={0.9}
            shadow-radius={10}
            shadow-bias={-0.0001} // Define o quanto da sombra para pela textura do objeto
          />
          <primitive object={spotlight.target} position={[-520, 20, -480]} />
        </group>
      }
      <group scale={0.0084}>
        <group position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100}>
          <mesh geometry={nodes.Road016_Tree_Trunk_0.geometry} material={materials.Tree_Trunk} receiveShadow/>
          <mesh geometry={nodes.Road016_Tree_Trunk_0_1.geometry} material={materials.Tree_Trunk} receiveShadow/>
          <mesh geometry={nodes.Road016_Tree_Trunk_0_2.geometry} material={materials.Tree_Trunk} receiveShadow/>
        </group>
        <mesh geometry={nodes.Road006_Fallen_Leaves_0.geometry} material={materials.Fallen_Leaves} position={[-46697.9, 3718.04, -48355.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100} castShadow receiveShadow/>
        
        <mesh geometry={nodes.Road013_Asphalt_Edge_0.geometry} material={materials.Asphalt} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road001_Rock_Decal_0.geometry} material={materials.Rock_Decal} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road002_Green_tree_0.geometry} material={materials.Green_tree} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        {/* <mesh geometry={nodes.Road003_OFFICIAL_MARKINGS_0.geometry} material={materials['OFFICIAL_MARKINGS.']} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} /> */}
        <mesh geometry={nodes.Road004_Guardrails_0.geometry} material={materials.Guardrails} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road005_Cliff_Rocks_0.geometry} material={materials.Cliff_Rocks} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road007_Fallen_Leaves_0.geometry} material={materials.Fallen_Leaves} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road008_Small_Rocks_0.geometry} material={materials.Small_Rocks} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road009_Grass_Vegetation_0.geometry} material={materials.Grass_Vegetation} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road010_Road_Groove_0.geometry} material={materials.Road_Groove} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        {/* <mesh geometry={nodes.Road011_Road_Signs_0.geometry} material={materials.Road_Signs} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} /> */}
        <mesh geometry={nodes.Road012_Cracked_Road_0.geometry} material={materials.Cracked_Road} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road014_Dark_Rocks_0.geometry} material={materials.Dark_Rocks} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road015_Grey_Rock_0.geometry} material={materials.Grey_Rock} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road017_Red_Tree_0.geometry} material={materials.Red_Tree} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road018_Grass_0.geometry} material={materials.Grass} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
        <mesh geometry={nodes.Road019_Asphalt_0.geometry} material={materials.Asphalt} position={[-49695.98, 3837.65, -45093.66]} rotation={[0, 0.15, 0]} scale={100} castShadow receiveShadow/>
      </group>
    </group>
  )
}

useGLTF.preload('/models/externalEnvironment/scene.gltf')
