import { Question } from '../../graphql/objectInterfaces';
import { TriviaQuestionStyles } from '../../styles/TrivaStyles';
import TriviaOptions from './TriviaOptions';

interface IShowTriviaQuestions {
  questions: Array<Question>;
}

export default function TriviaQuestions({
  questions,
}: IShowTriviaQuestions): JSX.Element {
  return (
    <>
      {questions.map((question: Question) => (
        <TriviaQuestionStyles key={question.id}>
          <p>{question.content}</p>
          <TriviaOptions
            questionId={question.id}
            // @ts-ignore
            correctOption={question.correct[0]}
            // @ts-ignore
            incorrectOptions={question.incorrect}
          />
        </TriviaQuestionStyles>
      ))}
    </>
  );
}
