"use client";
import { Canvas } from "@react-three/fiber";
import { BigBubble, BigBubbleLeft } from "../bigBubble/bigBubble";
import s from "./scene.module.scss";
import { Environment } from "@react-three/drei";
import { SmallBubble, SmallBubbleRight } from "../smallBubble/smallBubble";
import { clsx } from "clsx";

export const BigBubbleScene = () => {
  return (
    <div className={s.canvasScene}>
      <Canvas>
        {/*<directionalLight intensity={1} position={[-3, 7, 0]} />*/}
        {/*<Environment preset={"city"} />*/}
        <Environment files={"/potsdamer_platz_1k.hdr"} />
        <BigBubble />
      </Canvas>
    </div>
  );
};

export const Scene = () => {
  return (
    <div className={s.canvasScene}>
      <Canvas camera={{ zoom: 1.5 }}>
        {/*<directionalLight intensity={1} position={[-3, 7, 0]} />*/}
        {/*<Environment preset={"city"} />*/}
        <Environment files={"/potsdamer_platz_1k.hdr"} />
        <SmallBubble />
      </Canvas>
    </div>
  );
};


export const SmallBubbleScene = () => {
  return (
    <div className={s.canvasScene}>
      <Canvas>
        {/*<directionalLight intensity={1} position={[-3, 7, 0]} />*/}
        {/*<Environment preset={"city"} />*/}
        <Environment files={"/potsdamer_platz_1k.hdr"} />
        <SmallBubble />
      </Canvas>
    </div>
  );
};

export const BigBubbleSceneLeft = () => {
  return (
    <div className={clsx(s.canvasScene, s.canvasSceneLeft)}>
      <Canvas camera={{ position: [0, 5, 0] }}>
        <Environment files={"/potsdamer_platz_1k.hdr"} />
        <BigBubbleLeft />
      </Canvas>
    </div>
  );
};

export const SmallBubbleSceneRight = () => {
  return (
    <div className={clsx(s.canvasScene, s.canvasSmallRight)}>
      <Canvas>
        <Environment files={"/potsdamer_platz_1k.hdr"} />
        <SmallBubbleRight />
      </Canvas>
    </div>
  );
};