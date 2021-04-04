import { useMutation } from '@apollo/client';
import { VoteButton } from '../../../styles/QuizStyles';
import { VOTE_ON_QUIZ } from '../../../graphql/mutations';
import { ALL_QUIZZES_QUERY } from '../../../graphql/queries';
import { Vote } from '../../../graphql/objectInterfaces';
import { TriviaStatusConsumer } from '../../../lib/triviaStatus';
import { thisWeeksQuiz } from '../../../util/util';
import { getStartTime } from '../../../util/times';
import { questionsPerQuiz } from '../../../config';

export default function UpdateQuiz({
  voteId,
  votes,
  usersVoted,
}: Vote): JSX.Element {
  const { currentUser } = TriviaStatusConsumer();
  const nextWeeksQuiz = thisWeeksQuiz(questionsPerQuiz);

  const inputs = {
    quizId: voteId,
    userId: currentUser?.id,
    votes: votes + 1,
    week:
      typeof nextWeeksQuiz !== 'boolean' && nextWeeksQuiz.id === voteId
        ? getStartTime().toString()
        : null,
  };

  const [updateQuiz, { loading }] = useMutation(VOTE_ON_QUIZ, {
    variables: inputs,
    refetchQueries: [{ query: ALL_QUIZZES_QUERY }],
  });

  let userHasVoted;
  usersVoted.forEach(user => {
    if (user.id === currentUser?.id) {
      userHasVoted = true;
    }
  });

  return (
    <>
      <VoteButton
        disabled={loading || userHasVoted}
        aria-disabled={loading || userHasVoted}
        onClick={async (): Promise<void> => {
          await updateQuiz();
        }}
      >
        {votes} Votes
      </VoteButton>
    </>
  );
}
