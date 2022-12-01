import { useEffect, useState } from "react"
import type { BoxHeight } from "../components/Animation";

export const useAnimation = (boxHeight: BoxHeight) => {
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
        animate?.style.setProperty("--Height", `${boxHeight ? boxHeight : "200"}px`);
        const scrollHandler = () => {
            if (isElementInViewport(animate)) {
                setInView(true);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    },[inView, randId])

    return {inView, randId}
}
