import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// to extend three  we need to use extend, choose the class and the name
extend({ OrbitControls: OrbitControls });

function Experience() {
  // get the same state as in useFrame but only when component mount, not on each frame
  const { camera, gl } = useThree();

  const cubeRef = useRef();
  const group = useRef();

  // the scene is already being drawn on each frame but we can’t see it because nothing is moving.
  // We are going to rotate the cube, and to do that, we are going to use the useFrame hook provided by R3F
  useFrame((state, delta) => {});

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return (
    <>
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
