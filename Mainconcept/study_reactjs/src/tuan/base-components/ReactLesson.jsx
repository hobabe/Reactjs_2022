import React from "react";
import HelloWorld from "../react-lesson/t-1-hello-word/HelloWorld";
import LessonList from "./LessonList";
import LessonSample from "./LessonSample";
import WelcomeToReactLesson from "./WelcomeToReactLesson";

class ReactLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactLessonList: [
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
      ],
      lessonActive: {
        id: "",
        component: <WelcomeToReactLesson />,
        description: "No description",
      },
      func: {
        switchToLesson: this.switchToLesson,
      }
    };

    this.initEvents();
  }

  initEvents() {
    this.state.func.switchToLesson = this.switchToLesson.bind(this);
  }

  switchToLesson(id) {
    const selectedLesson = this.state.reactLessonList.filter((item) => {
      return item.id === id;
    });

    const foundBuiltLesson = (selectedLesson.length > 0 && selectedLesson[0]) ?? null;

    this.setState((state) => ({
      lessonActive: {
        id: foundBuiltLesson.id,
        component: foundBuiltLesson ? foundBuiltLesson.component : null,
        description: foundBuiltLesson && foundBuiltLesson.component ? "" : "This lesson is not built, please select other lesson",
      },
    }));
  }

  render() {
    return (
      <div>
        <div id={"t-react-lesson"}>
          <LessonList reactLesson={this.state} />
          <LessonSample lessonActive={this.state.lessonActive} />
        </div>
        <a href={"./"}>Go home 🏠</a>
      </div>
    );
  }
}

export default ReactLesson;
