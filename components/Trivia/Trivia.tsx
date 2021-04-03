import { useQuery } from '@apollo/client';
import { TOP_VOTED_VALID_QUIZ_QUERY } from '../../graphql/queries';
import { TriviaStyles } from '../../styles/TrivaStyles';
import TriviaQuestions from './TriviaQuestions';

export default function Trivia(): JSX.Element {
  const { data, loading, error } = useQuery(TOP_VOTED_VALID_QUIZ_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  const trivia = data?.allQuizzes[0];

  const validated = (): boolean => {
    if (!trivia || trivia.question.length < 10) {
      return false;
    }

    for (let i = 0; i < trivia.question.length; i += 1) {
      if (trivia.question[i].option.length < 4) {
        return false;
      }
    }

    return true;
  };

  if (validated()) {
    return (
      <TriviaStyles>
        <h1>{trivia.subject}</h1>
        <TriviaQuestions questions={trivia.question} />
      </TriviaStyles>
    );
  }

  return (
    <TriviaStyles>
      <h1>Sorry, no trivia this week. 😥</h1>
      <p>Here's our criteria for a valid trivia:</p>
      <ul>
        <li>1 Subject must be available.</li>
        <li>10 Questions must be available for that subject.</li>
        <li>4 Answers must be available for each question.</li>
      </ul>
      <p>
        Be sure to suggest trivia subjects, questions and answers during the
        voting period!
      </p>
      <p>The top voted items will be using during trivia time.</p>
    </TriviaStyles>
  );
}
