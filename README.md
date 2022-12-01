# Animation-Plugin
A basic animation plugin I built in React with TypeScript
Currenty accepting two props:
  - ```animationType: string```, how the animation looks (slides in from sides or fades in), Possible values:
       -  slideFromLeft
       -  slideFromRight
       -  fadeIn
  - ```boxHeight: number | undefined``` , the height of the animation box in pixels if left undefined height will be 200px

Simply import the project and use like following example:

import Animation from "../components/Animation";

```html

<Animation animationType={"slideFromLeft"} boxHeight={500}>
     <div>from Left</div>
</Animation>

<Animation animationType={"slideFromRight"}>
     <div>from Right</div>
</Animation>

```
Everything within the ``` <Animation> ``` tags will be animated
