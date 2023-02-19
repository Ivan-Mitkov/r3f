import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function Experience() {
  const cubeRef = useRef();
  const group = useRef();

  return (
    <>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
      <group ref={group}>
        <mesh
          ref={cubeRef}
          rotation={[0, 0, 0]}
          position={[3, -0.2, 0]}
          scale={1.5}
        >
          <boxGeometry args={[1, 1, 1, 6, 6, 6]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh rotation={[0, 0, 0]} position={[-2, 0.5, 0]} scale={[1, 1, 1]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
    </>
  );
}
export default Experience;
