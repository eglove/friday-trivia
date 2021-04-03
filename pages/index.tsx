import Voting from '../components/Quiz/Voting';
import { TriviaStatusConsumer, TriviaStatuses } from '../lib/triviaStatus';
import Trivia from '../components/Trivia/Trivia';

export default function Index(): JSX.Element {
  const { triviaStatus } = TriviaStatusConsumer();

  switch (triviaStatus) {
    case TriviaStatuses.voting: {
      return <Voting />;
    }
    case TriviaStatuses.trivia: {
      return <Trivia />;
    }
    case TriviaStatuses.results: {
      return <p>Results</p>;
    }
    default: {
      return <p>Hmm..</p>;
    }
  }
}
