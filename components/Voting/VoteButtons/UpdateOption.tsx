import { useMutation } from '@apollo/client';
import { Vote } from '../../../graphql/objectInterfaces';
import { VOTE_ON_OPTION } from '../../../graphql/mutations';
import { ALL_QUIZZES_QUERY } from '../../../graphql/queries';
import { VoteButton } from '../../../styles/QuizStyles';
import { TriviaStatusConsumer } from '../../../lib/triviaStatus';

export default function UpdateOption({
  voteId,
  votes,
  usersVoted,
}: Vote): JSX.Element {
  const { currentUser } = TriviaStatusConsumer();

  const inputs = {
    optionId: voteId,
    userId: currentUser?.id,
    votes: votes + 1,
  };

  const [updateOption, { loading }] = useMutation(VOTE_ON_OPTION, {
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
          await updateOption();
        }}
      >
        {votes} Votes
      </VoteButton>
    </>
  );
}
