import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "../CustomObject/CustomObject";
// to extend three  we need to use extend, choose the class and the name
extend({ OrbitControls: OrbitControls });

function Experience() {
  // get the same state as in useFrame but only when component mount, not on each frame
  const { camera, gl } = useThree();

  const cubeRef = useRef();
  const group = useRef();

  // the scene is already being drawn on each frame but we can’t see it because nothing is moving.
  // We are going to rotate the cube, and to do that, we are going to use the useFrame hook provided by R3F
  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // for rotating with the same rate no matter what is the frame rate of the system
    cubeRef.current.rotation.y += delta;
    group.current.rotation.z += delta * 0.1;
    group.current.rotation.y += delta * 0.5;
    // make camera rotate aoround the scene and look at at the center
    //works better without orbit controls
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
  });

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
      <mesh rotation-x={-Math.PI * 0.5} position-y={-3} scale={50}>
        <planeGeometry />
        <meshStandardMaterial
          args={[
            {
              color: "green",
            },
          ]}
        />
      </mesh>
      {
        //group the cube and the sphere (not the floor) and then animate that group like a carousel
      }
      <group ref={group}>
        <mesh
          ref={cubeRef}
          rotation={[2, 2, 2]}
          position={[2, 0, 0]}
          scale={[1.5, 1.5, 1.5]}
        >
          <boxGeometry args={[1, 1, 1, 6, 6, 6]} />
          <meshStandardMaterial
            args={[
              {
                color: "mediumpurple",
              },
            ]}
          />
        </mesh>
        <mesh
          rotation={[Math.PI * 0.25, 0, 0]}
          position={[-2, 0, 0]}
          scale={[1, 1, 1]}
        >
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            args={[
              {
                color: "orange",
              },
            ]}
          />
        </mesh>
      </group>
      <CustomObject />
    </>
  );
}
export default Experience;
