function WelcomeToReactLesson(props) {
  function LessonRemainingCount(){
    var builtLessons = props.lessonList.filter((lesson) => {
      return lesson.component
    });

    return props.lessonList.length - builtLessons.length;
  }

  return (
    <div>
      <h3>Welcome to Tuan's Space 👦</h3>
      <br />
      <p>Please chose a part in the list to see lesson is built!</p>
      <p>Notice that, I'm building these sections 🏭({LessonRemainingCount()}/{props.lessonList.length} remaining)</p>
    </div>
  );
}

export default WelcomeToReactLesson;
