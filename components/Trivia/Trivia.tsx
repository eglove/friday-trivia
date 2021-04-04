import Head from 'next/head';
import { TriviaStyles } from '../../styles/TrivaStyles';
import TriviaQuestions from './TriviaQuestions';
import { thisWeeksQuiz } from '../../util/util';
import TriviaCountdown from './TriviaCountdown';
import { TriviaStatusConsumer } from '../../lib/triviaStatus';
import { questionsPerQuiz } from '../../config';

export default function Trivia(): JSX.Element {
  const { currentNumberOfQuestions } = TriviaStatusConsumer();
  const quiz = thisWeeksQuiz(
    currentNumberOfQuestions > 10 ? 10 : questionsPerQuiz
  );

  if (typeof quiz !== 'boolean') {
    return (
      <TriviaStyles>
        <Head>
          <title>Friday Trivia!</title>
        </Head>
        <h1>{quiz.subject}</h1>
        <TriviaCountdown />
        <TriviaQuestions questions={quiz.question} />
      </TriviaStyles>
    );
  }

  return (
    <TriviaStyles>
      <Head>
        <title>Friday Trivia!</title>
      </Head>
      <h1>Sorry, no trivia this week. 😥</h1>
      <p>Here's our criteria for a valid trivia:</p>
      <ul>
        <li>1 Subject must be available.</li>
        <li>
          {questionsPerQuiz} Questions must be available for that subject.
        </li>
        <li>4 Answers must be available for each question.</li>
        <li>3 Answers must be incorrect, 1 answer must be correct.</li>
      </ul>
      <p>
        Be sure to suggest trivia subjects, questions and answers during the
        voting period!
      </p>
      <p>The top voted items will be using during trivia time.</p>
    </TriviaStyles>
  );
}
