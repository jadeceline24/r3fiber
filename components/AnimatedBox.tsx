import {useHelper} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';
import {BoxHelper} from 'three';

type Props = {
  isTesting: boolean;
};

const Animation: React.FC<Props> = ({isTesting}) => {
  const myMesh = useRef<THREE.Mesh>(null);

  {
    isTesting ? useHelper(myMesh, BoxHelper, 'cyan') : null;
  }

  useFrame(() => {
    if (myMesh.current) {
      myMesh.current.rotation.x += 0.01;
    }
  });

  return (
    <>
      
      <mesh
        ref={myMesh}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 1, 0]}
        castShadow
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export default Animation;
