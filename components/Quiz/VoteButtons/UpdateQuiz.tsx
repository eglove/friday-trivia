import { useMutation } from '@apollo/client';
import { VoteButton } from '../../../styles/QuizStyles';
import { VOTE_ON_QUIZ } from '../../../graphql/mutations';
import { ALL_QUIZZES_QUERY } from '../../../graphql/queries';
import { Vote } from '../../../graphql/objectInterfaces';

export default function UpdateQuiz({ voteId, votes }: Vote): JSX.Element {
  const inputs = {
    id: voteId,
    votes: votes + 1,
  };

  const [updateQuiz, { loading }] = useMutation(VOTE_ON_QUIZ, {
    variables: inputs,
    refetchQueries: [{ query: ALL_QUIZZES_QUERY }],
  });

  return (
    <>
      <VoteButton
        disabled={loading}
        aria-disabled={loading}
        onClick={async (): Promise<void> => {
          await updateQuiz();
        }}
      >
        {votes} Votes
      </VoteButton>
    </>
  );
}
