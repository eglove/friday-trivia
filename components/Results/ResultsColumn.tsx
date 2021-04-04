import { useQuery } from '@apollo/client';
import { CURRENT_WEEK_RESULTS_QUERY } from '../../graphql/queries';
import { ColumnGrid } from '../../styles/MainStyles';
import { User } from '../../graphql/objectInterfaces';
import { UserResultsColumnStyles } from '../../styles/ResultsStyles';

export default function ResultsColumn(): JSX.Element {
  const { data, loading, error } = useQuery(CURRENT_WEEK_RESULTS_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  const { allUsers } = data;
  console.log(allUsers);

  return (
    <UserResultsColumnStyles>
      <ColumnGrid columns={2}>
        <div className="header">Username</div>
        <div className="header">Score</div>
      </ColumnGrid>
      {allUsers.map((user: User, index: number) => (
        <ColumnGrid key={user.id} columns={2}>
          <div>{`${index + 1}. ${user.name}`}</div>
          <div>{user.currentWeekScore}</div>
        </ColumnGrid>
      ))}
    </UserResultsColumnStyles>
  );
}
