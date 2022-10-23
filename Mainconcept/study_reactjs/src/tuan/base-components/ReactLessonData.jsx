
import HelloWorld from "../react-lesson/t-1-hello-word/HelloWorld";

export function reactLessonData(){
  return {
    lessonList : [
      { component: <HelloWorld />, id: "HelloWorld", text: "Hello World" },
      { component: null, id: "IntroducingJSX", text: "Introducing JSX" },
      { component: null, id: "RenderingElements", text: "Rendering Elements" },
      { component: null, id: "ComponentsAndProps", text: "Components and Props" },
      { component: null, id: "StateAndLifecycle", text: "State and Lifecycle" },
      { component: null, id: "HandlingEvents", text: "Handling Events" },
      { component: null, id: "ConditionalRendering", text: "Conditional Rendering" },
      { component: null, id: "ListsAndKeys", text: "Lists and Keys" },
      { component: null, id: "Forms", text: "Forms" },
      { component: null, id: "LiftingStateUp", text: "Lifting State Up" },
      { component: null, id: "CompositionVsInheritance", text: "Composition vs Inheritance" },
      { component: null, id: "ThinkingInReact", text: "Thinking In React" },
    ]
  }
}