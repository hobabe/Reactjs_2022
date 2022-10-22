function LessonList(props) {
  var lessonElements = props.reactLesson.map((value) => {
    return <li key={value.text}>{value.text}</li>;
  });
  
  return (
    <div id={"t-lesson-list"}>
      <ul className={"t-list"}>{lessonElements}</ul>
    </div>
  );
}

export default LessonList;
