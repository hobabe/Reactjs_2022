function RenderSampleLesson(prop) {
  console.log(prop);
  return <div id={"t-render-lesson-container"}>{prop.componentActive.component}</div>;
}

export default RenderSampleLesson;
