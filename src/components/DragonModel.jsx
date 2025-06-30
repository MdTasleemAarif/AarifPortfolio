'use client';

import { useGLTF } from '@react-three/drei';

export default function DragonModel() {
  const { scene } = useGLTF('/models/dragon.glb');

  return (
    <primitive
      object={scene}
      scale={2}
      position={[1, -1.2, 0]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}
