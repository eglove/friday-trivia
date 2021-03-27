import { useQuery } from '@apollo/client';
import { ALL_QUIZZES_QUERY } from '../../graphql/queries';
import { Quiz } from '../../graphql/objectInterfaces';
import { QuizContainerStyles, VoteButton } from '../../styles/QuizStyles';
import QuestionContainer from './QuestionContainer';
import { ColumnGrid } from '../../styles/MainStyles';

export default function QuizContainer(): JSX.Element {
  const { data, error, loading } = useQuery(ALL_QUIZZES_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  const { allQuizzes } = data;

  return (
    <>
      {allQuizzes.map((quiz: Quiz) => (
        <QuizContainerStyles key={quiz.id}>
          <ColumnGrid columns={2}>
            <div className="subject">{quiz.subject}</div>
            <VoteButton>{quiz.votes} Votes</VoteButton>
          </ColumnGrid>
          <QuestionContainer questions={quiz.question} />
        </QuizContainerStyles>
      ))}
    </>
  );
}
