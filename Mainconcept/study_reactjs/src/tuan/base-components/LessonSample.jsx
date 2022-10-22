import DescriptionLesson from "./DescriptionLesson";
import RenderSampleLesson from "./RenderSampleLesson";

function LessonSample(props) {
  return (
    <div id={"t-react-sample"}>
      <RenderSampleLesson componentActive={props.lessonActive} />
      <DescriptionLesson description={props.lessonActive.description} />
    </div>
  );
}

export default LessonSample;
