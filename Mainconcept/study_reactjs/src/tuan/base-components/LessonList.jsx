function LessonList(props) {
  function selectedItemStyle(id) {
    return props.reactLesson.lessonActive.id === id ? "t-item-selected" : "";
  }

  function switchToLesson(e, id) {
    props.reactLesson.func.switchToLesson(id);
  }

  const lessonElements = props.reactLesson.reactLessonList.map((value) => {
    return (
      <li key={value.id} className={selectedItemStyle(value.id)} onClick={(e, id) => switchToLesson(e, value.id)}>
        {value.text}
      </li>
    );
  });

  return (
    <div id={"t-lesson-list"}>
      <ul className={"t-list"}>{lessonElements}</ul>
    </div>
  );
}

export default LessonList;
