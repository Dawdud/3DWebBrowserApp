/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Jacobs Development (https://sketchfab.com/Jacobs_Development)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-planet-earth-7b1dc4f802a54a6297e7a46888a85f77
title: Low Poly Planet Earth
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function Earth(props) {
  const { nodes, materials } = useGLTF("assets/low_poly_planet_earth.glb");
  const meshRef = useRef();
  const { camera } = useThree();

  const CAMERA_OFFSET = { x: 5, y: 2, z: 5 };
  const CAMERA_SPEED = 0.2;
  useFrame((state) => {
    // state.camera.position.x += 0.01;
    const time = state.clock.elapsedTime.toFixed(2);
    state.camera.position.x =
      meshRef.current.position.x +
      CAMERA_OFFSET.x * Math.sin(time * CAMERA_SPEED);
    state.camera.position.z =
      meshRef.current.position.z +
      CAMERA_OFFSET.z * Math.cos(time * CAMERA_SPEED);
    state.camera.position.y = meshRef.current.position.y + CAMERA_OFFSET.y;

    state.camera.lookAt(
      meshRef.current.position.x,
      meshRef.current.position.y,
      meshRef.current.position.z
    );
  });
  useEffect(() => {});

  return (
    <group {...props} dispose={null}>
      <group>
        <group>
          <group position={[0.05, 0, 0]}>
            <mesh
              ref={meshRef}
              castShadow
              receiveShadow
              geometry={nodes.Object_Planet_0.geometry}
              material={materials.Planet}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("assets/low_poly_planet_earth.glb");
