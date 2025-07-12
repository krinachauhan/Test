import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function View({ modelUrl }) {
  const gltfRef = useRef();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={gltfRef} />
      <Suspense fallback={null}>
        <GLTFModel gltfRef={gltfRef} modelUrl={modelUrl} />
      </Suspense>
    </Canvas>
  );
}

function GLTFModel({ gltfRef, modelUrl }) {
  const loader = new GLTFLoader();

  loader.load(modelUrl, (gltf) => {
    gltfRef.current.children = gltf.scene.children;
  });

  return null;
}

export default View;
