import { useQuery } from '@apollo/client';
import Voting from '../components/Quiz/Voting';
import { CURRENT_TRIVIA_STATE } from '../graphql/queries';
import { TriviaStatuses } from '../util/updateTriviaState';

export default function Index(): JSX.Element {
  const { data, loading, error } = useQuery(CURRENT_TRIVIA_STATE);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  const { status } = data.allTriviaStates[0];

  if (status === TriviaStatuses.voting) return <Voting />;

  if (status === TriviaStatuses.trivia) return <p>Trivia</p>;

  if (status === TriviaStatuses.results) return <p>Results</p>;

  return <p>Hmm...</p>;
}
