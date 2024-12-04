"use client";
import { Canvas } from "@react-three/fiber";
import { BigBubble } from "../bigBubble/bigBubble";
import s from "./scene.module.scss";
import { Environment } from "@react-three/drei";
import { SmallBubble } from "../smallBubble/smallBubble";

export const BigBubbleScene = () => {
  return (
    <div className={s.canvasScene}>
      <Canvas>
        {/*<directionalLight intensity={1} position={[-3, 7, 0]} />*/}
        {/*<Environment preset={"city"} />*/}
        <Environment files={'/potsdamer_platz_1k.hdr'} />
        <BigBubble />
      </Canvas>
    </div>
  );
};

export const Scene = () => {
  return (
    <div className={s.canvasScene}>
      <Canvas camera={{zoom: 1.5}}>
        {/*<directionalLight intensity={1} position={[-3, 7, 0]} />*/}
        {/*<Environment preset={"city"} />*/}
        <Environment files={'/potsdamer_platz_1k.hdr'} />
        <SmallBubble />
      </Canvas>
    </div>
  );
};
