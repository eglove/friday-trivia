import Voting from '../components/Quiz/Voting';
import { triviaStatusConsumer, TriviaStatuses } from '../lib/triviaStatus';

export default function Index(): JSX.Element {
  const { triviaStatus } = triviaStatusConsumer();

  switch (triviaStatus) {
    case TriviaStatuses.voting: {
      return <Voting />;
    }
    case TriviaStatuses.trivia: {
      return <p>Trivia</p>;
    }
    case TriviaStatuses.results: {
      return <p>Results</p>;
    }
    default: {
      return <p>Hmm..</p>;
    }
  }
}
