import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const GLTFModal = ({ scenePath, position, rotation, ...rest }) => {
    const gltf = useGLTF(scenePath, true);
    const mesh = React.useRef();
    useFrame(() => 
        rotation
            ? ((mesh.current.rotation.x += rotation[0]),
                (mesh.current.rotation.y += rotation[1]),
                (mesh.current.rotation.z += rotation[2]))
            : null,
    )
    
    return(
        <mesh castShadow ref={mesh} {...rest} position={position}>
            <primitive object={gltf.scene} dispose={null} />
        </mesh>
    )
}

export default GLTFModal;