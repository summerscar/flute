import { RefObject, FC, Suspense, useEffect, useRef, useImperativeHandle } from 'react';
import { Color, Vector3, Mesh, MeshPhongMaterial, Group } from 'three';
import { useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { camera } from '@/threejs/camera';

import './index.scss';

export type Actions = {
  setMaterialWithKeys: (keysConfig: Record<number, number[]>) => void;
  reset: () => void;
  setCameraPosition: (x: number, y: number, z: number) => void;
};

type FluteProps = {
  actionRef: RefObject<Actions>;
};

const Flute: FC<FluteProps> = ({ actionRef }) => {
  const isKeyFixed = useRef(false);
  const controls = useRef<OrbitControlsImpl | null>(null);
  const fbx = useLoader(FBXLoader, '/flute.fbx');
  const flute = useRef<Group>();
  const hightLightMaterial = useRef<MeshPhongMaterial>();
  const defaultMaterial = useRef<MeshPhongMaterial>();

  const setMaterialWithKeys = (keysConfig: Record<number, number[]>) => {
    Object.entries(keysConfig).forEach(([index, keys]) => {
      keys.forEach((key) => {
        if (!flute.current || !hightLightMaterial.current) return;
        (flute.current.children[index as unknown as number].children[key] as Mesh).material =
          hightLightMaterial.current;
      });
    });
  };

  const reset = () => {
    if (!flute.current) return;
    flute.current.children.forEach((child) => {
      (child.children as Mesh[]).forEach((item) => {
        item.material = defaultMaterial.current!;
      });
    });
  };

  const setCameraPosition = (x: number, y: number, z: number) => {
    if (!controls.current) return;

    controls.current.reset();
    camera.position.set(x, y, z);
  };

  useImperativeHandle(actionRef, () => ({
    setMaterialWithKeys,
    reset,
    setCameraPosition
  }));

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

  const fixOneKey = (fbx: Group) => {
    if (isKeyFixed.current) return;
    const key = fbx.children[2].children[13].clone();
    key.position.y = 110;
    fbx.children[2].add(key);
    isKeyFixed.current = true;
  };

  useEffect(() => {
    if (!fbx) return;
    fixOneKey(fbx);

    window.flute = flute.current = fbx;
    fbx.rotation.z = Math.PI / 2;
    fbx.position.x = -200;
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
        <OrbitControls ref={controls} panSpeed={1} />
      </Canvas>
    </div>
  );
};

export default Flute;
