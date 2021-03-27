import { Question } from '../../graphql/objectInterfaces';
import { ColumnGrid } from '../../styles/MainStyles';
import OptionContainer from './OptionContainer';
import UpdateQuestion from './VoteButtons/UpdateQuestion';

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
            <UpdateQuestion voteId={question.id} votes={question.votes} />
          </ColumnGrid>
          <OptionContainer options={question.option} />
        </div>
      ))}
    </>
  );
}
