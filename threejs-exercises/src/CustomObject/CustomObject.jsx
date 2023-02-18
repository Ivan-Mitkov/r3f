import React, { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

const CustomObject = () => {
  const geometry = useRef();
  // 10 triangels with 3 vertices
  const verticesCount = 10 * 3;

  // don't recalculate vertices on each rerender useMemo
  const positions = useMemo(() => {
    // each vertice has x,y,z
    const positions = new Float32Array(verticesCount * 3);
    //create random positions
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  /**
   * It’s because we didn’t provide any normal to the geometry and the triangles don’t know where they are oriented.

Instead of calculating and sending our own normal attribute, we can ask Three.js to do it with computeVertexNormals on BufferGeometry.
   */
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
      {
        // to see both sides side={THREE.DoubleSide}
      }
      <meshStandardMaterial color="magenta" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CustomObject;
