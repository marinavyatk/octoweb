import { MeshTransmissionMaterial, useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useLayoutEffect, useRef } from "react";

export const BigBubble = () => {
  const bubbleRef = useRef(null);
  const { nodes, animations } = useGLTF("medias/bigBubble.glb");
  const { actions, names } = useAnimations(animations, bubbleRef);
  console.log("animations", animations);

  useLayoutEffect(() => {
    names.forEach((animation) => {
      const action = actions?.[animation]?.play();
      if (action) {
        action.setEffectiveTimeScale(0.3);
        action.play();
      }
    });
  }, [actions, names]);

  const materialProps = useControls({
    thickness: { value: 1, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  // const materialProps = {
  //   thickness: 1,
  //   roughness: 0,
  //   transmission: 1,
  //   ior: 1.2,
  //   chromaticAberration: 0.02,
  //   backside: true,
  // };

  return (
    <group ref={bubbleRef} dispose={null} position={[6, 1, -1]} scale={1.1}>
      {/*<Text position={[0, 0, -1]} fontSize={2.5} color="white" anchorX="center" anchorY="middle">*/}
      {/*  hello world!*/}
      {/*</Text>*/}
      <mesh {...nodes.Object_11002} position={[-12, 2, 0]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};
