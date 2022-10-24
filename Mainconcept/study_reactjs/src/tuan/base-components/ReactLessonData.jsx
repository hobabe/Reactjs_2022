
import HelloWorld from "../react-lesson/t-1-hello-word/HelloWorld";
import IntroducingJSX from "../react-lesson/t-2-IntroducingJSX/IntroducingJSX";

export function reactLessonData(){
  return {
    lessonList : [
      { 
        component: <HelloWorld />, 
        id: "HelloWorld", 
        text: "Hello World", 
        description: "'Hello world' will be rendered by render method of root element, this is so cool!" 
      },
      { component: <IntroducingJSX />, id: "IntroducingJSX", text: "Introducing JSX", description: "" },
      { component: null, id: "RenderingElements", text: "Rendering Elements", description: "" },
      { component: null, id: "ComponentsAndProps", text: "Components and Props", description: "" },
      { component: null, id: "StateAndLifecycle", text: "State and Lifecycle", description: "" },
      { component: null, id: "HandlingEvents", text: "Handling Events", description: "" },
      { component: null, id: "ConditionalRendering", text: "Conditional Rendering", description: "" },
      { component: null, id: "ListsAndKeys", text: "Lists and Keys", description: "" },
      { component: null, id: "Forms", text: "Forms", description: "" },
      { component: null, id: "LiftingStateUp", text: "Lifting State Up", description: "" },
      { component: null, id: "CompositionVsInheritance", text: "Composition vs Inheritance", description: "" },
      { component: null, id: "ThinkingInReact", text: "Thinking In React", description: "" },
    ]
  }
}