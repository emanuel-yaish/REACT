import QuizTitle from "../quiztitle/quiztitle";
import Q1 from "../q1/q1";
import Q1Input from "../q1input/q1input";
import Q2 from "../q2/q2";
import Q2Input from "../q2input/q2input";
import "./quiz.css";

function Quiz() {
  return (
    <div className="quiz">
      <QuizTitle />
      <Q1 />
      <Q1Input />
      <Q2 />
      <Q2Input />
    </div>
  );
}

export default Quiz;
