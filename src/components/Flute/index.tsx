import React, { RefObject, FC, Suspense, useEffect, useRef, useImperativeHandle } from 'react';
import { Color, Vector3, Mesh, MeshPhongMaterial, Group } from 'three';
import { useLoader, Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { camera } from '@/threejs';

import './index.scss';

export type Actions = { setMaterialWithKeyIndex: (index: number) => void; reset: () => void };

type FluteProps = {
  actionRef: RefObject<Actions>;
};

const Flute: FC<FluteProps> = ({ actionRef }) => {
  const fbx = useLoader(FBXLoader, '/flute.fbx');
  const flute = useRef<Group>();
  const hightLightMaterial = useRef<MeshPhongMaterial>();
  const defaultMaterial = useRef<MeshPhongMaterial>();

  const getHightLightMaterial = (material: MeshPhongMaterial) => {
    defaultMaterial.current = material;

    const newMaterial = material.clone();
    newMaterial.color = new Color('blue');
    newMaterial.emissiveIntensity = 0;
    newMaterial.reflectivity = 0;
    newMaterial.refractionRatio = 0;
    newMaterial.shininess = 0;
    hightLightMaterial.current = newMaterial;
  };

  const setMaterialWithKeyIndex = (keyIndex: number) => {
    if (!flute.current || !hightLightMaterial.current) return;
    (flute.current.children[2].children[keyIndex] as Mesh).material = hightLightMaterial.current;
  };

  const reset = () => {
    if (!flute.current) return;
    (flute.current.children[2].children as Mesh[]).forEach((item) => {
      item.material = defaultMaterial.current!;
    });
  };

  useImperativeHandle(actionRef, () => ({
    setMaterialWithKeyIndex,
    reset
  }));

  useEffect(() => {
    window.flute = flute.current = fbx;
    fbx.rotation.z = Math.PI / 2;
    getHightLightMaterial((fbx.children[3] as Mesh).material as MeshPhongMaterial);
  }, [fbx]);

  return (
    <div className="threejs">
      <Canvas camera={camera}>
        {/* 灯光 */}
        <ambientLight color={0x404040} />
        <directionalLight color={0xffffff} position={new Vector3(-500, 0, 1000)} />
        <directionalLight color={0xffffff} position={new Vector3(0, 0, -1000)} />
        <directionalLight color={0xffffff} position={new Vector3(0, 1000, 0)} />
        <directionalLight color={0xffffff} position={new Vector3(0, -1000, 0)} />
        <pointLight
          color={0xff0000}
          intensity={1}
          distance={100}
          position={new Vector3(300, 300, 300)}
        />
        {/* flute */}
        <Suspense fallback={'loading'}>
          <primitive object={fbx} />
        </Suspense>
        {/* control */}
        <TrackballControls rotateSpeed={1.5} zoomSpeed={10} panSpeed={1} />
      </Canvas>
    </div>
  );
};

export default Flute;
