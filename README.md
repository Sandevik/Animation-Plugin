# Animation-Plugin
A basic animation plugin I built in React with TypeScript
Currenty accepting two props:
  - animationType: string, how the animation looks (slides in from sides or fades in), Possible values:
       -  slideFromLeft, slideFromRight, fadeIn
  - boxHeight: number, the height of the animation box in pixels

Simply import the project and use like following example:
'
import Animation from "../components/Animation";

<Animation animationType={"slideFromLeft"} boxHeight={500}>
     <div className={style.slideIn}>from Left</div>
</Animation>
'
