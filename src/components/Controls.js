import React, { useState, useRef, useEffect } from "react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import '../style.css'
import { useSpring, a } from 'react-spring/three';


extend({ OrbitControls });

const Controls = (props) => {

  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {orbitRef.current.update()})

  return(
    <orbitControls autoRotate enableZoom={props.zoom}  args={[camera, gl.domElement]} ref={orbitRef}
    />
  )
}

export default Controls;