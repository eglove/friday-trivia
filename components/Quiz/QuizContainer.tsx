import { useQuery } from '@apollo/client';
import { ALL_QUIZZES_QUERY } from '../../graphql/queries';
import { Quiz } from '../../graphql/objectInterfaces';
import { QuizContainerStyles } from '../../styles/QuizStyles';
import QuestionContainer from './QuestionContainer';
import { ColumnGrid } from '../../styles/MainStyles';
import UpdateQuiz from './VoteButtons/UpdateQuiz';
import { quizPerPage } from '../../config';

interface IQuizContainer {
  currentPage: number;
}

export default function QuizContainer({
  currentPage,
}: IQuizContainer): JSX.Element {
  const { data, error, loading } = useQuery(ALL_QUIZZES_QUERY, {
    variables: {
      skip: currentPage * quizPerPage - quizPerPage,
      first: quizPerPage,
    },
  });

  if (loading) return <span />;

  if (error) return <p>Error! {error.message}</p>;

  const allQuizzes = data?.allQuizzes;

  return (
    <>
      {allQuizzes &&
        allQuizzes.map((quiz: Quiz) => (
          <QuizContainerStyles key={quiz.id}>
            <ColumnGrid columns={2}>
              <div className="subject">{quiz.subject}</div>
              <UpdateQuiz voteId={quiz.id} votes={quiz.votes} />
            </ColumnGrid>
            <QuestionContainer quizId={quiz.id} questions={quiz.question} />
          </QuizContainerStyles>
        ))}
    </>
  );
}
