import { useMutation } from '@apollo/client';
import { Vote } from '../../../graphql/objectInterfaces';
import { VOTE_ON_QUESTION } from '../../../graphql/mutations';
import { ALL_QUIZZES_QUERY } from '../../../graphql/queries';
import { VoteButton } from '../../../styles/QuizStyles';

export default function UpdateQuestion({ voteId, votes }: Vote): JSX.Element {
  const inputs = {
    id: voteId,
    votes: votes + 1,
  };

  const [updateQuestion, { loading }] = useMutation(VOTE_ON_QUESTION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_QUIZZES_QUERY }],
  });

  return (
    <>
      <VoteButton
        disabled={loading}
        aria-disabled={loading}
        onClick={async (): Promise<void> => {
          await updateQuestion();
        }}
      >
        {votes} Votes
      </VoteButton>
    </>
  );
}
