import { useRef } from "react";
import {
  OrbitControls,
  PivotControls,
  TransformControls,
  Html,
} from "@react-three/drei";
import styles from "./Experience.module.scss";

function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const group = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      {
        //makeDefault for not moving the camera with TransformControls
      }
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
          scale={1.5}
          position={[3, -0.2, 0]}
        >
          <boxGeometry args={[1, 1, 1, 6, 6, 6]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} mode="translate" />
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={2}
          axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
          scale={1.2}
          // fixed={true} if true scale is pixels
        >
          <mesh
            rotation={[0, 0, 0]}
            position={[-2, 0, 0]}
            scale={[1, 1, 1]}
            ref={sphereRef}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="orange" />
            <Html
              position={[1, 1, 1]}
              wrapperClass={styles.label}
              center
              distanceFactor={6}
              occlude={[cubeRef, sphereRef]}
            >
              That's a sphere
            </Html>
          </mesh>
        </PivotControls>
      </group>
    </>
  );
}
export default Experience;
