import React from 'react'
import { useAnimation } from './useAnimation';
import style from "./AnimationComponent.module.css";

type AnimationType = "slideFromLeft" | "slideFromRight" | "fadeIn";
export type BoxHeight = number | undefined;

interface AnimationProps {
  children: React.ReactNode;
  animationType: AnimationType;
  boxHeight?: BoxHeight;
  delay?: number;
}

export default function Animation({children, animationType, boxHeight, delay}: AnimationProps) {
    const {inView, randId} = useAnimation({boxHeight, delay});

  return (
    <div className={style.wrapper}>
      <div
      data-animate={randId}
      data-animation={animationType}
      className={ inView ? `${style.animationBox} ${style.inView}` : style.animationBox}
      >
      {children}
    </div>
    </div>
  )
}
