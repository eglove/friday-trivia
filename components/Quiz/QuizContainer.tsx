import { useQuery } from '@apollo/client';
import { ALL_QUIZZES_QUERY } from '../../graphql/queries';
import { Quiz } from '../../graphql/objectInterfaces';

export default function QuizContainer(): JSX.Element {
  const { data, error, loading } = useQuery(ALL_QUIZZES_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  const { allQuizzes } = data;
  console.log(allQuizzes);

  return (
    <>
      {allQuizzes.map((quiz: Quiz) => (
        <p key={quiz.id}>{quiz.subject}</p>
      ))}
    </>
  );
}
