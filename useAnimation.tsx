import { useEffect, useState } from "react"
import type { BoxHeight } from "./Animation";

interface AnimationProps{
    boxHeight?: BoxHeight;
    delay?: number | undefined;
    duration?: number | undefined;
}

export const useAnimation = ({boxHeight, delay, duration}: AnimationProps) => {
    const[inView, setInView] = useState<boolean>(false);
    const[randId, setRandId] = useState<number>(0);
    function isElementInViewport(el: Element | null) {
        let rect = el
          ? el.getBoundingClientRect()
          : { bottom: 0, left: 0, right: 0, top: 0 };
      
        return (
          rect.bottom > 0 &&
          rect.top < (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    function generateRandomId (){
        return Math.random()*10000;
    }
    useEffect(()=>{setRandId(generateRandomId())},[])
    useEffect(()=>{
        const animate = document.querySelector(`[data-animate="${randId}"]`) as HTMLElement | null;
        animate?.parentElement?.style.setProperty("--Height", `${boxHeight ? boxHeight : "200"}px`);
        animate?.parentElement?.style.setProperty("--Duration", `${duration ? duration : "1"}s`);
        const scrollHandler = () => {
            if (isElementInViewport(animate)) {
                if (delay){
                    setTimeout(()=>{setInView(true);}, delay)
                }else{
                    setInView(true);
                }
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    },[inView, randId, boxHeight])

    return {inView, randId}
}
