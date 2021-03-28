import { useMutation, useQuery } from '@apollo/client';
import { CURRENT_TRIVIA_STATE } from '../graphql/queries';
import { UPDATE_TRIVIA_STATUS_MUTATION } from '../graphql/mutations';

export enum TriviaStatuses {
  'voting' = 'voting',
  'trivia' = 'trivia',
  'results' = 'results',
}

export const updateTriviaStatus = async (
  status: TriviaStatuses
): Promise<void> => {
  const { data } = useQuery(CURRENT_TRIVIA_STATE);
  const { id } = data.allTriviaStates[0];

  const [updateTriviaState] = useMutation(UPDATE_TRIVIA_STATUS_MUTATION, {
    variables: {
      id,
      status,
    },
    refetchQueries: [{ query: CURRENT_TRIVIA_STATE }],
  });

  await updateTriviaState();
};
