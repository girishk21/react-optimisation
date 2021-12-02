import * as React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const FogColor = new THREE.Color(0xffa3c6);

function Cube() {
  const ref = React.useRef<THREE.Mesh>();

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={0xf1db50} />
    </mesh>
  );
}

function Three() {
  return (
    <Canvas camera={{ fov: 75, position: [3, 3, 3], far: 10, near: 0.001 }}>
      <fog color={FogColor} far={5} near={0.001} />
      <ambientLight intensity={1.2} color={0xffa3c6} />
      <pointLight intensity={0.8} position={[-3, 4, 2]} color={0xffe642} />
      <pointLight intensity={1.2} position={[0, 3, 0]} color={0xbd0048} />
      <Cube />
    </Canvas>
  );
}

export default Three;
