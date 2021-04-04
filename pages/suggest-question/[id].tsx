import { NextRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import SuggestQuestion from '../../components/Voting/SuggestForms/SuggestQuestion';
import { SINGLE_QUIZ_QUERY } from '../../graphql/queries';

export default function suggestQuestion({ query }: NextRouter): JSX.Element {
  const { id } = query;

  const { data, loading, error } = useQuery(SINGLE_QUIZ_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  if (id) {
    return <SuggestQuestion quiz={data.Quiz} />;
  }
  return <p>No question found.</p>;
}
