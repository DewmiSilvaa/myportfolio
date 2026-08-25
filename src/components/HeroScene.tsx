import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Astronaut from './Astronaut';
import { Starfield, DustParticles, Planet } from './SpaceScene';

/**
 * Full 3D hero canvas: starfield, drifting dust, a distant planet,
 * and a floating astronaut the user can orbit around.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-8, 2, -4]} intensity={2} color="#26c6da" distance={30} />
        <pointLight position={[6, -3, 2]} intensity={1.5} color="#ff5722" distance={25} />
        <spotLight position={[0, 10, 5]} angle={0.4} penumbra={0.5} intensity={1.5} color="#4dd0e1" />

        {/* Scene contents */}
        <Starfield count={6000} />
        <DustParticles count={250} />
        <Planet position={[12, -4, -18]} size={3.5} color="#ff5722" />
        <Planet position={[-16, 6, -25]} size={2.5} color="#26c6da" />
        <Astronaut floating />

        <Environment preset="night" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
