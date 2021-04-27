import React, { useState, useRef, useEffect } from "react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import '../style.css'
import ReactDOM from 'react-dom'

extend({ OrbitControls });

const VolumeViewer = (props) => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load(props.content, setModel);
  }, [])
  return model ? <primitive object={model.scene} /> : null

}

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {orbitRef.current.update()})
  
  return(
    <orbitControls autoRotate  args={[camera, gl.domElement]} ref={orbitRef}
    /> 
  )
}


export default function PortalModal({ visible, content }) {
    
    if (!visible) return null

    return ReactDOM.createPortal((
      <>
        
        <div className='portal'>
          <h1 className='volume-title'>Volume Title</h1>
          <Canvas className='portal-canvas' id='pc' camera={{ position: [0, 0, 10] }} onCreated={({ gl }) => {
              gl.shadowMap.enabled = true
              gl.shadowMap.type = THREE.PCFShadowMap
          }}>
              <Controls />
              <ambientLight intensity={0.5}/>
              <spotLight position={[15, 5, 10]} penumbra={1} castShadow />
              <VolumeViewer content={content} />
          </Canvas>
        </div>
        
      </>
            
  
        
    ), document.getElementById('modal-root'))
}
