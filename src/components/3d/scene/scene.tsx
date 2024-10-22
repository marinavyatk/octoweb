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
        <directionalLight intensity={1} position={[-3, 7, 0]} />
        <Environment preset={"city"} />
        <BigBubble />
        <SmallBubble />
      </Canvas>
    </div>
  );
};

export const SmallBubbleScene = () => {
  return (
    <div className={s.canvasScene}>
      <Canvas>
        <directionalLight intensity={1} position={[-3, 7, 0]} />
        <Environment preset={"city"} />
        <SmallBubble />
      </Canvas>
    </div>
  );
};
