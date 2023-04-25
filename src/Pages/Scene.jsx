import { Canvas } from "@react-three/fiber";
import React from "react";
import Cube from "../components/Cube";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Earth from "../models/EarthModel";

function Scene() {
  return (
    <>
      <section
        className="App-header"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas style={{ background: "#171717" }}>
          <PerspectiveCamera makeDefault position={[0, 1, 5]} />
          <pointLight position={[20, 10, 10]} />
          <ambientLight intensity={0.5} />

          <Earth />

          <OrbitControls />
        </Canvas>
      </section>
    </>
  );
}

export default Scene;
