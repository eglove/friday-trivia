import { Question } from '../../graphql/objectInterfaces';
import { TwoColumnGrid } from '../../styles/MainStyles';
import OptionContainer from './OptionContainer';

interface IQuestionContainer {
  questions: Array<Question>;
}

export default function QuestionContainer({
  questions,
}: IQuestionContainer): JSX.Element {
  return (
    <>
      {questions.map((question: Question) => (
        <>
          <TwoColumnGrid>
            <div>{question.content}</div>
            <div>{question.votes}</div>
          </TwoColumnGrid>
          <OptionContainer options={question.option} />
        </>
      ))}
    </>
  );
}
