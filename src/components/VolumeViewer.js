import React, { useState, useEffect } from "react"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const VolumeViewer = (props) => {
    const [model, setModel] = useState();
    useEffect(() => {
      new GLTFLoader().load(props.content, setModel);
    }, [])
    return model ? <primitive object={model.scene} /> : null
  
  }

export default VolumeViewer;