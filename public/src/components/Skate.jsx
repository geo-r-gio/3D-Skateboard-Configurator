/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/skate.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from '../contexts/Customization'


const Skate = (props) => {
  const { shape, tapeColor, wheelColor } = useCustomization();

  const { nodes, materials } = useGLTF('./models/skate.gltf')

  const wheelTextureProps = useTexture({
    normalMap: './textures/griptape/Plastic_003_normal.jpg',
    roughnessMap: './textures/griptape/Plastic_003_roughness.jpg',
    aoMap: './textures/griptape/Plastic_003_ambientOcclusion.jpg',
  });

  const woodTextureProps = useTexture({
    normalMap: './textures/griptape/Wood_027_normal.jpg',
    roughnessMap: './textures/griptape/Wood_027_roughness.jpg',
    aoMap: './textures/griptape/Wood_027_ambientOcclusion.jpg',
  });

  materials['Material.002'].color.set(tapeColor.color);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.065} position={[0, -0.091, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_01031.geometry} >
            <meshStandardMaterial  {...wheelTextureProps} color={wheelColor.color} roughness={2.7} />
          </mesh>  
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_01100.geometry} material={materials['Material.002']} position={[13.36, 8.79, -15.16]} visible={shape === 1}>
            {/* <meshBasicMaterial color={tapeColor.color} /> */}
          </mesh>
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_0224.geometry} material={materials.M_GB14_Skateboard} />
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_0270.geometry} visible={shape === 1}>
            <meshStandardMaterial {...woodTextureProps} color={0xB67B5C} roughness={2.7} />
          </mesh>
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_0271.geometry} visible={shape === 1}>
            <meshStandardMaterial {...woodTextureProps} color={0xB67B5C} roughness={2.7} />
          </mesh>
        </group>
      </group>
      <group position={[0, 0.44, -0.2]} rotation={[0, -1.57, 0]} scale={0.7}>
        <mesh geometry={nodes.Mesh006.geometry} visible={shape === 2}>
          <meshStandardMaterial  {...woodTextureProps} color={0xB67B5C} roughness={2.7} />
        </mesh>
        <mesh geometry={nodes.Mesh006_1.geometry} material={materials['Material.002']} visible={shape === 2}/>
      </group>
    </group>
  )
}

useGLTF.preload('./models/skate.gltf')

export default Skate;