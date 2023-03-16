import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stats, useAnimations, useGLTF} from '@react-three/drei';
//import Animation from '../components/AnimatedBox';
//import CameraOrbitController from '../components/CameraOrbitController';
import {PerspectiveCamera} from '@react-three/drei';
import Lights from '../components/Lights';
import Ground from '@/components/Ground';
import {Tree} from '../components/Tree';
import {useEffect} from 'react';

const MyCube = () => {
  const model = useGLTF('./models/cube.glb');
  const {actions} = useAnimations(model.animations, model.scene);
  
  useEffect(() => {
    actions?.CubeAction?.play();
  }, []);

  return <primitive object={model.scene} />;
};

export default function Home() {
  const testing = true;

  return (
    <>
      <div className="container">
        <Canvas shadows>
          {/* <PerspectiveCamera makeDefault /> */}
          {testing ? <Stats /> : null}
          {testing ? <axesHelper visible={testing} args={[2]} /> : null}
          <OrbitControls />
          {/* <CameraOrbitController /> */}

          <Lights />
          {/* <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh> */}
          <MyCube />
          <Tree />
          <Ground />
        </Canvas>
      </div>
    </>
  );
}
