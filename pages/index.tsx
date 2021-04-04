import Voting from '../components/Voting/Voting';
import { TriviaStatusConsumer, TriviaStatuses } from '../lib/triviaStatus';
import Trivia from '../components/Trivia/Trivia';
import Results from '../components/Results/Results';

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
      return <Results />;
    }
    default: {
      return <p>Hmm..</p>;
    }
  }
}
