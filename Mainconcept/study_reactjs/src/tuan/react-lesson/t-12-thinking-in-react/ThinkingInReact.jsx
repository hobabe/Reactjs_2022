function ThinkingInReact() {
  const urlMock = "/photoshop/20221022-tuan-space.bmp";
  return (
    <div>
      <h3>1. Start With A Mock</h3>
      <div className={"context-body"}>
        <img src={urlMock} />
        <p>My app build with these components: </p>
        <pre>
          <h6>1. ReactLesson</h6>
          <h6> {"  1. LessonList"}</h6>
          <h6> {"  2. LessonSample"}</h6>
          <h6> {"   1. RenderSampleLesson"}</h6>
          <h6> {"   3. DescriptionLesson"}</h6>
        </pre>
        <hr />
      </div>
    </div>
  );
}

export default ThinkingInReact;
