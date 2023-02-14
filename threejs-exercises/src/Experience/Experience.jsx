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

  useFrame((state, delta) => {
    // for rorating with the same rate no matter what is the frame rate of the system
    cubeRef.current.rotation.y += delta;
    group.current.rotation.z += delta * 0.1;
    group.current.rotation.y += delta * 0.5;
  });

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    console.log("useEffect");

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return (
    <>
      <mesh
        rotation={[Math.PI * 1.5, Math.PI * 1, 0]}
        position={[0, -4, -6]}
        scale={[18, 18, 12]}
      >
        <planeGeometry args={[2.5, 2.5, 23, 23]} />
        <meshBasicMaterial
          args={[
            {
              color: "green",
              wireframe: true,
            },
          ]}
        />
      </mesh>
      <group ref={group}>
        <mesh
          ref={cubeRef}
          rotation={[2, 2, 2]}
          position={[2, 0, 0]}
          scale={[1.5, 1.5, 1.5]}
        >
          <boxGeometry args={[1, 1, 1, 6, 6, 6]} />
          <meshBasicMaterial
            args={[
              {
                color: "mediumpurple",
                wireframe: true,
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
          <meshBasicMaterial
            args={[
              {
                color: "orange",
                wireframe: true,
              },
            ]}
          />
        </mesh>
      </group>
    </>
  );
}
export default Experience;
