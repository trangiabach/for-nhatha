import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";
import { MeshRefractionMaterial } from "@react-three/drei";

export function Ring({ sceneOpacity, ...props }) {
    const { nodes, materials } = useGLTF("./models/ring/model.glb");

    const materialRef = useRef();

    // useFrame(() => {
    //     materialRef.current.opacity = sceneOpacity.current;
    // });

    return (
        <group {...props} dispose={null} scale={2}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials["Material.001"]}
                position={[0, 0.2, 0]}
                scale={74.509}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Gem.geometry}
                material={materials["Material.002"]}
                position={[0, 1.043, 0.133]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={53.42}
            >
            </mesh>
        </group>
    );
}

useGLTF.preload("./models/ring/model.glb");