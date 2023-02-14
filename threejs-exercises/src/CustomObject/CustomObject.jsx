import React, { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

const CustomObject = () => {
  const geometry = useRef();
  // 10 triangels with 3 vertices
  const verticesCount = 10 * 3;

  const positions = useMemo(() => {
    // each vertice has x,y,z
    const positions = new Float32Array(verticesCount * 3);
    //create random positions
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    geometry.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometry}>
        {
          //  attach="attributes-position"geometry.attributes.position
          //itemSize how many values for one position
        }
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="magenta" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CustomObject;
