

import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const PythonLogo = (props)=> {
  const { nodes, materials } = useGLTF('/models/python.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.1} {...props}>
        <mesh
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.39,0.39,0.39]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/python.glb')
export default PythonLogo; 




