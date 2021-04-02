import { useQuery } from '@apollo/client';
import { USER_SCORES_QUERY } from '../../graphql/queries';
import { ColumnGrid } from '../../styles/MainStyles';
import { User } from '../../graphql/objectInterfaces';
import { LeaderBoardStyles } from '../../styles/LeaderBoardStyles';

export default function Leaderboard(): JSX.Element {
  const { data, loading, error } = useQuery(USER_SCORES_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  console.log(data.allUsers);
  const { allUsers } = data;

  return (
    <LeaderBoardStyles>
      <h1>Friday Trivia Leaderboard</h1>
      <ColumnGrid columns={3} id="scoreHeader">
        <div>Username</div>
        <div>Total Score</div>
        <div>Current Week Score</div>
      </ColumnGrid>
      {allUsers.map((user: User, index: number) => (
        <ColumnGrid columns={3} id="scoreTable">
          <div>
            {index + 1}. {user.name}
          </div>
          <div>{user.totalScore}</div>
          <div>{user.currentWeekScore}</div>
        </ColumnGrid>
      ))}
    </LeaderBoardStyles>
  );
}
