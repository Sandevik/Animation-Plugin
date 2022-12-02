# Animation-Plugin
A basic animation plugin I built in React with TypeScript
Currenty accepting these props:
  - ```animationType: string``` (Required), how the object animates, 
  Possible values:
       -  slideFromLeft
       -  slideFromRight
       -  fadeIn
  - ```boxHeight: number | undefined``` , the height of the animation box in pixels, if left undefined height will be 200px
  - ```delay: number | undefined```, the delay for the animation to begin in milliseconds
  - ```delay: number | undefined```, the duration of the animation in seconds

Simply import the project and use like following example:

```html

import Animation from "../components/Animation";


<Animation animationType={"slideFromLeft"} boxHeight={500} delay={1000} duration={2}>
     <div>from Left</div>
</Animation>

<Animation animationType={"slideFromRight"}>
     <div>from Right</div>
</Animation>

```
Everything within the ``` <Animation> ``` tags will be animated
