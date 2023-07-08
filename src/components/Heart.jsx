import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

export function Heart({ sceneOpacity, ...props }) {
    const { nodes, materials } = useGLTF("./models/heart/model.glb");

    const materialRef = useRef();

    // useFrame(() => {
    //     materialRef.current.opacity = sceneOpacity.current;
    // });

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Heart2.geometry} material={materials["Heart Red"]} scale={0.02}>
                {/* <meshStandardMaterial
                    ref={materialRef}
                    envMapIntensity={10}
                    material={materials["Heart Red"]}
                /> */}
            </mesh>
        </group>
    );
}

useGLTF.preload("./models/heart/model.glb");