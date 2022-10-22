import React from "react";
import HelloWorld from "../react-lesson/t-1-hello-word/HelloWorld";
import LessonList from "./LessonList";
import LessonSample from "./LessonSample";
import WelcomeToReactLesson from "./WelcomeToReactLesson";

class ReactLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactLesson: [
        { component: HelloWorld, text: "Hello World" },
        { component: null, text: "Introducing JSX" },
        { component: null, text: "Rendering Elements" },
        { component: null, text: "Components and Props" },
        { component: null, text: "State and Lifecycle" },
        { component: null, text: "Handling Events" },
        { component: null, text: "Conditional Rendering" },
        { component: null, text: "Lists and Keys" },
        { component: null, text: "Forms" },
        { component: null, text: "Lifting State Up" },
        { component: null, text: "Composition vs Inheritance" },
        { component: null, text: "Thinking In React" },
      ],
      lessonActive: {
        component: <WelcomeToReactLesson />,
        description: "No description",
      },
    };
  }

  render() {
    return (
      <div>
        <div id={"t-react-lesson"}>
          <LessonList reactLesson={this.state.reactLesson} />
          <LessonSample lessonActive={this.state.lessonActive} />
        </div>
        <a href={"./"}>Go home</a>
      </div>
    );
  }
}

export default ReactLesson;
