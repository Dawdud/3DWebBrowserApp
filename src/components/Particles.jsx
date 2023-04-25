import React, { useRef, useState, useMemo, useEffect } from "react";

const Particles = (props) => {
  const points = useRef();
  const COUNT_PARTICLES = 30000;
  const particlesPosition = useMemo((props) => {
    const positions = new Float32Array(COUNT_PARTICLES);

    for (let i = 0; i < 9000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      positions.set([x, y, z], i);
    }

    return positions;
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        color="white"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};
export default Particles;
