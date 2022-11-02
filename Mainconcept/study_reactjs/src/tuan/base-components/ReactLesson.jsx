import React from "react";
import LessonList from "./LessonList";
import LessonSample from "./LessonSample";
import WelcomeToReactLesson from "./WelcomeToReactLesson";
import {reactLessonData} from "./ReactLessonData"

class ReactLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactLessonList: [],
      lessonActive: {
        id: "",
        component: null,
        description: "No description",
      },
      func: {
        switchToLesson: this.switchToLesson,
        setDescription: this.setDescription,
      },
    };

    this.initData();
    this.initEvents();
    this.InitWelcome();
  }

  initData() {
    this.state.reactLessonList = reactLessonData().lessonList;
  }

  initEvents() {
    this.state.func.switchToLesson = this.switchToLesson.bind(this);
  }

  switchToLesson(id) {
    const selectedLesson = this.state.reactLessonList.filter((item) => {
      return item.id === id;
    });

    const foundBuiltLesson = (selectedLesson.length > 0 && selectedLesson[0]) ?? null;

    if(foundBuiltLesson){
      this.setState((state) => ({
        lessonActive: {
          id: foundBuiltLesson.id,
          component: foundBuiltLesson.component,
          description: foundBuiltLesson.component ? foundBuiltLesson.description : "This lesson is not built, please select other lesson!",
        },
      }));
    }
  }

  InitWelcome(){
    this.state.lessonActive.component = <WelcomeToReactLesson lessonList={this.state.reactLessonList}/>
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
