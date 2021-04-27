import React from 'react'
import Controls from './Controls'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three'
import VolumeViewer from './VolumeViewer';
import '../style.css';
// import GLTFModal from './GLTFModal';

export default function CanvasHolder({content}) {

    return (
        <>
            <Canvas className='title-canvas' id='tc' camera={{ position: [0, 0, 0.155] }} onCreated={({ gl }) => {
              gl.shadowMap.enabled = true
              gl.shadowMap.type = THREE.PCFShadowMap
            }}>
                <Controls zoom={false}/>
                <ambientLight intensity={0.5}/>
                <spotLight position={[15, 5, 10]} penumbra={1} castShadow />
                <VolumeViewer content={content}/>
            </Canvas>
        </>
    )
}