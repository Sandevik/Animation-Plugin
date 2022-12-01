import React, { useEffect, useState } from "react";
import { useAnimation } from "./useAnimation";
import style from "./AnimationComponent.module.css";

type AnimationType = "slideFromLeft" | "slideFromRight" | "fadeIn";

export type BoxHeight = number | undefined;

interface AnimationProps {
  children: React.ReactNode;
  animationType: AnimationType;
  boxHeight?: BoxHeight;
}

export default function Animation({ children, animationType, boxHeight }: AnimationProps) {
  
  const {randId, isInViewPort} = useAnimation(boxHeight)

  return (
    <div
      data-animate={randId}
      data-animation={animationType}
      className={ isInViewPort ? `${style.animationBox} ${style.inView}` : style.animationBox}
      >
      {children}
    </div>
  );
}
