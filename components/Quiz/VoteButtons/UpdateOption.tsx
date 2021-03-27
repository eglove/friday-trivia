import { useMutation } from '@apollo/client';
import { Vote } from '../../../graphql/objectInterfaces';
import { VOTE_ON_OPTION } from '../../../graphql/mutations';
import { ALL_QUIZZES_QUERY } from '../../../graphql/queries';
import { VoteButton } from '../../../styles/QuizStyles';

export default function UpdateOption({ voteId, votes }: Vote): JSX.Element {
  const inputs = {
    id: voteId,
    votes: votes + 1,
  };

  const [updateOption, { loading }] = useMutation(VOTE_ON_OPTION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_QUIZZES_QUERY }],
  });

  return (
    <>
      <VoteButton
        disabled={loading}
        aria-disabled={loading}
        onClick={async (): Promise<void> => {
          await updateOption();
        }}
      >
        {votes} Votes
      </VoteButton>
    </>
  );
}
