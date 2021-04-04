import { NextRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { SINGLE_QUESTION_QUERY } from '../../graphql/queries';
import SuggestOption from '../../components/Voting/SuggestForms/SuggestOption';

export default function suggestAnswer({ query }: NextRouter): JSX.Element {
  const { id } = query;

  const { data, loading, error } = useQuery(SINGLE_QUESTION_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  if (id) {
    return <SuggestOption question={data.Question} />;
  }

  return <p>No options found.</p>;
}
