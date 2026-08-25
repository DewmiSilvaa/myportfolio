import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural astronaut built from primitives — a suited figure with
 * a reflective visor, floating gently in space with a slow rotation.
 */
function Astronaut({ floating = true }: { floating?: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.2) * 0.5;
    if (floating) {
      group.current.position.y = Math.sin(t * 0.6) * 0.3;
      group.current.position.x = Math.sin(t * 0.3) * 0.15;
    }
  });

  const suitMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#e8eef7', roughness: 0.6, metalness: 0.2 }),
    [],
  );
  const accentMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#26c6da', roughness: 0.3, metalness: 0.7, emissive: '#004d5b', emissiveIntensity: 0.4 }),
    [],
  );
  const darkMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#1a1a2e', roughness: 0.5, metalness: 0.3 }),
    [],
  );
  const visorMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#0e1b35', roughness: 0.05, metalness: 1.0, emissive: '#26c6da', emissiveIntensity: 0.15 }),
    [],
  );
  const goldMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#ffca28', roughness: 0.2, metalness: 0.9, emissive: '#5c3d00', emissiveIntensity: 0.3 }),
    [],
  );

  return (
    <group ref={group} dispose={null}>
      {/* Head + Helmet */}
      <mesh material={darkMat} position={[0, 2.4, 0]} castShadow>
        <sphereGeometry args={[0.95, 32, 32]} />
      </mesh>
      {/* Visor glass */}
      <mesh material={visorMat} position={[0, 2.45, 0.15]} rotation={[0.1, 0, 0]}>
        <sphereGeometry args={[0.88, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.65]} />
      </mesh>
      {/* Visor highlight */}
      <mesh position={[-0.35, 2.7, 0.6]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#4dd0e1" transparent opacity={0.6} emissive="#4dd0e1" emissiveIntensity={0.8} />
      </mesh>
      {/* Helmet ring */}
      <mesh material={accentMat} position={[0, 1.75, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.08, 16, 48]} />
      </mesh>

      {/* Neck */}
      <mesh material={suitMat} position={[0, 1.4, 0]} castShadow>
        <cylinderGeometry args={[0.42, 0.5, 0.4, 24]} />
      </mesh>

      {/* Torso */}
      <mesh material={suitMat} position={[0, 0.55, 0]} castShadow>
        <capsuleGeometry args={[0.7, 1.1, 8, 24]} />
      </mesh>
      {/* Chest panel */}
      <mesh material={accentMat} position={[0, 0.8, 0.62]} castShadow>
        <boxGeometry args={[0.7, 0.7, 0.12]} />
      </mesh>
      {/* Chest lights */}
      <mesh position={[-0.18, 0.95, 0.7]}>
        <circleGeometry args={[0.06, 16]} />
        <meshStandardMaterial color="#ffca28" emissive="#ffca28" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.18, 0.95, 0.7]}>
        <circleGeometry args={[0.06, 16]} />
        <meshStandardMaterial color="#26c6da" emissive="#26c6da" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0, 0.7, 0.7]}>
        <circleGeometry args={[0.04, 16]} />
        <meshStandardMaterial color="#ff5722" emissive="#ff5722" emissiveIntensity={2} />
      </mesh>

      {/* Backpack */}
      <mesh material={darkMat} position={[0, 0.55, -0.75]} castShadow>
        <boxGeometry args={[1.1, 1.4, 0.5]} />
      </mesh>
      {/* Backpack thrusters */}
      <mesh material={goldMat} position={[-0.3, 1.1, -1.0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.3, 12]} />
      </mesh>
      <mesh material={goldMat} position={[0.3, 1.1, -1.0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.3, 12]} />
      </mesh>
      <mesh material={goldMat} position={[-0.3, 0.1, -1.0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.3, 12]} />
      </mesh>
      <mesh material={goldMat} position={[0.3, 0.1, -1.0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.3, 12]} />
      </mesh>

      {/* Shoulders */}
      <mesh material={suitMat} position={[-0.95, 1.1, 0]} castShadow>
        <sphereGeometry args={[0.38, 24, 24]} />
      </mesh>
      <mesh material={suitMat} position={[0.95, 1.1, 0]} castShadow>
        <sphereGeometry args={[0.38, 24, 24]} />
      </mesh>

      {/* Left arm */}
      <group position={[-0.95, 1.0, 0]}>
        <mesh material={suitMat} position={[0, -0.5, 0]} castShadow rotation={[0, 0, 0.2]}>
          <capsuleGeometry args={[0.25, 0.8, 8, 16]} />
        </mesh>
        {/* Elbow joint */}
        <mesh material={accentMat} position={[0.08, -0.85, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>
        <mesh material={suitMat} position={[0.2, -1.3, 0]} castShadow rotation={[0, 0, -0.3]}>
          <capsuleGeometry args={[0.22, 0.7, 8, 16]} />
        </mesh>
        {/* Glove */}
        <mesh material={darkMat} position={[0.3, -1.75, 0]} castShadow>
          <sphereGeometry args={[0.26, 16, 16]} />
        </mesh>
      </group>

      {/* Right arm */}
      <group position={[0.95, 1.0, 0]}>
        <mesh material={suitMat} position={[0, -0.5, 0]} castShadow rotation={[0, 0, -0.2]}>
          <capsuleGeometry args={[0.25, 0.8, 8, 16]} />
        </mesh>
        <mesh material={accentMat} position={[-0.08, -0.85, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
        </mesh>
        <mesh material={suitMat} position={[-0.2, -1.3, 0]} castShadow rotation={[0, 0, 0.3]}>
          <capsuleGeometry args={[0.22, 0.7, 8, 16]} />
        </mesh>
        <mesh material={darkMat} position={[-0.3, -1.75, 0]} castShadow>
          <sphereGeometry args={[0.26, 16, 16]} />
        </mesh>
      </group>

      {/* Waist ring */}
      <mesh material={accentMat} position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.6, 0.08, 16, 48]} />
      </mesh>

      {/* Legs */}
      <mesh material={suitMat} position={[-0.35, -1.3, 0]} castShadow rotation={[0, 0, 0.05]}>
        <capsuleGeometry args={[0.3, 1.4, 8, 16]} />
      </mesh>
      <mesh material={suitMat} position={[0.35, -1.3, 0]} castShadow rotation={[0, 0, -0.05]}>
        <capsuleGeometry args={[0.3, 1.4, 8, 16]} />
      </mesh>

      {/* Knee joints */}
      <mesh material={accentMat} position={[-0.37, -1.5, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
      </mesh>
      <mesh material={accentMat} position={[0.37, -1.5, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
      </mesh>

      {/* Boots */}
      <mesh material={darkMat} position={[-0.35, -2.25, 0.1]} castShadow>
        <boxGeometry args={[0.5, 0.45, 0.7]} />
      </mesh>
      <mesh material={darkMat} position={[0.35, -2.25, 0.1]} castShadow>
        <boxGeometry args={[0.5, 0.45, 0.7]} />
      </mesh>
      {/* Boot soles accent */}
      <mesh material={accentMat} position={[-0.35, -2.45, 0.15]}>
        <boxGeometry args={[0.5, 0.06, 0.7]} />
      </mesh>
      <mesh material={accentMat} position={[0.35, -2.45, 0.15]}>
        <boxGeometry args={[0.5, 0.06, 0.7]} />
      </mesh>

      {/* US flag patch on shoulder */}
      <mesh position={[0.95, 1.35, 0.35]}>
        <boxGeometry args={[0.18, 0.12, 0.02]} />
        <meshStandardMaterial color="#ff5722" emissive="#ff5722" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

export default Astronaut;
