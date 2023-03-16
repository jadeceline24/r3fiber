import React, {useEffect, useRef} from 'react';
import {useGLTF, useAnimations} from '@react-three/drei';
import {useState} from 'react';

export function Tree(props) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF('/models/tree.glb');
  const {actions} = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Tree_lp_11"
          castShadow
          receiveShadow
          geometry={nodes.Tree_lp_11.geometry}
          material={nodes.Tree_lp_11.material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/tree.glb');
