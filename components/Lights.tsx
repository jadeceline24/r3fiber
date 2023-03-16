import {useRef} from 'react';
import {useHelper} from '@react-three/drei';
import {DirectionalLightHelper} from 'three';

const Lights: React.FC = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  useHelper(lightRef, DirectionalLightHelper, 5, 'cyan');
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight ref={lightRef} color="red" position={[0, 10, 10]} castShadow/>
    </>
  );
};

export default Lights;
