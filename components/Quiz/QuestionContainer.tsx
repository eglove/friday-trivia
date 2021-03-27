import { Question } from '../../graphql/objectInterfaces';
import { ColumnGrid } from '../../styles/MainStyles';
import OptionContainer from './OptionContainer';
import { VoteButton } from '../../styles/QuizStyles';

interface IQuestionContainer {
  questions: Array<Question>;
}

export default function QuestionContainer({
  questions,
}: IQuestionContainer): JSX.Element {
  return (
    <>
      {questions.map((question: Question) => (
        <div key={question.id}>
          <ColumnGrid columns={2} className="question">
            <div>{question.content}</div>
            <VoteButton>{question.votes} Votes</VoteButton>
          </ColumnGrid>
          <OptionContainer options={question.option} />
        </div>
      ))}
    </>
  );
}
