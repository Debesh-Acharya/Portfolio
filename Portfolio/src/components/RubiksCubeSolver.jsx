import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RubiksCube = () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.x += 0.01;
    group.current.rotation.y += 0.01;
  });

  const cubeSize = 2;
  const cubeSpacing = 0.1;

  const createCube = (x, y, z) => {
    const materials = [
      new THREE.MeshBasicMaterial({ color: '#000000' }), // Black material for inside faces
      new THREE.MeshBasicMaterial({ color: '#ffffff' })  // White material for border faces
    ];

    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cube = new THREE.Mesh(geometry, materials);

    cube.position.set(x * (cubeSize + cubeSpacing), y * (cubeSize + cubeSpacing), z * (cubeSize + cubeSpacing));

    // Assign materials to specific faces
    cube.geometry.groups.forEach((face, idx) => {
      const materialIndex = cube.geometry.faces[face.materialIndex].normal.z === 0 ? 1 : 0; // Check if face is on the border (z-axis)
      cube.geometry.faces.slice(face.start, face.start + face.count).forEach((f) => {
        f.materialIndex = materialIndex;
      });
    });

    cube.geometry.groupsNeedUpdate = true; // Ensure groups are updated

    return cube;
  };

  const cubes = [];

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push(createCube(x, y, z));
      }
    }
  }

  return (
    <group ref={group}>
      {cubes.map((cube, index) => (
        <mesh key={index} position={[cube.position.x, cube.position.y, cube.position.z]}>
          <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
          {cube.material.map((m, i) => (
            <meshBasicMaterial key={i} attachArray="material" color={m.color} />
          ))}
        </mesh>
      ))}
    </group>
  );
};

const RubiksCubeSolver = () => {
  return (
    <Canvas style={{ background: '#000', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <RubiksCube />
    </Canvas>
  );
};

export default RubiksCubeSolver;
