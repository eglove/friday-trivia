import { useQuery } from '@apollo/client';
import { ALL_QUIZZES_QUERY } from '../../graphql/queries';
import { Quiz } from '../../graphql/objectInterfaces';
import { QuizContainerStyles } from '../../styles/QuizStyles';
import QuestionContainer from './QuestionContainer';
import { TwoColumnGrid } from '../../styles/MainStyles';

export default function QuizContainer(): JSX.Element {
  const { data, error, loading } = useQuery(ALL_QUIZZES_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  const { allQuizzes } = data;

  return (
    <QuizContainerStyles>
      {allQuizzes.map((quiz: Quiz) => (
        <div key={quiz.id}>
          <TwoColumnGrid>
            <div className="subject">{quiz.subject}</div>
            <div>{quiz.votes}</div>
          </TwoColumnGrid>
          <QuestionContainer questions={quiz.question} />
        </div>
      ))}
    </QuizContainerStyles>
  );
}
