import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

function Cube(props) {
  const ref = useRef();

  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    // state.camera.position.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  return (
    <mesh {...props} ref={ref} scale={0.2} onClick={(event) => click(!clicked)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial key={0} attach={`material-${0}`} color={"red"} />
      <meshBasicMaterial key={1} attach={`material-${1}`} color={"green"} />
      <meshBasicMaterial key={2} attach={`material-${2}`} color={"purple"} />
      <meshBasicMaterial key={3} attach={`material-${3}`} color={"yellow"} />
      <meshBasicMaterial key={4} attach={`material-${4}`} color={"white"} />
      <meshBasicMaterial key={4} attach={`material-${5}`} color={"blue"} />
    </mesh>
  );
}

export default Cube;
