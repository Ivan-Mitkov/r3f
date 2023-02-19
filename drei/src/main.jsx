import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Canvas
      // dpr={[1, 2]} // limit pixel ratio between 1 and 2 for better performance this the default values set by R3F
      gl={{
        antialias: true,
        // toneMapping: THREE.CineonToneMapping,
      }}
      // orthographic
      camera={{
        // zoom: 100,
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);
