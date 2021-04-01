import { useMutation } from '@apollo/client';
import { Vote } from '../../../graphql/objectInterfaces';
import { VOTE_ON_QUESTION } from '../../../graphql/mutations';
import { ALL_QUIZZES_QUERY } from '../../../graphql/queries';
import { VoteButton } from '../../../styles/QuizStyles';
import { TriviaStatusConsumer } from '../../../lib/triviaStatus';

export default function UpdateQuestion({
  voteId,
  votes,
  usersVoted,
}: Vote): JSX.Element {
  const { currentUser } = TriviaStatusConsumer();

  const inputs = {
    questionId: voteId,
    userId: currentUser.id,
    votes: votes + 1,
  };

  const [updateQuestion, { loading }] = useMutation(VOTE_ON_QUESTION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_QUIZZES_QUERY }],
  });

  let userHasVoted;
  usersVoted.forEach(user => {
    if (user.id === currentUser.id) {
      userHasVoted = true;
    }
  });

  return (
    <>
      <VoteButton
        disabled={loading || userHasVoted}
        aria-disabled={loading || userHasVoted}
        onClick={async (): Promise<void> => {
          await updateQuestion();
        }}
      >
        {votes} Votes
      </VoteButton>
    </>
  );
}
