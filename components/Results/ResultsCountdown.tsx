import { useState } from 'react';
import { ResultsCountdownStyles } from '../../styles/ResultsStyles';
import {
  animationInterval,
  getVotingStartTime,
  secondsToString,
  timeUntilToString,
} from '../../util/times';
import { TriviaStatusConsumer, TriviaStatuses } from '../../lib/triviaStatus';

export default function ResultsCountdown(): JSX.Element {
  const controller = new AbortController();
  const { triviaStatusSet } = TriviaStatusConsumer();

  const [timeToVotingString, setTimeToVotingString] = useState(
    timeUntilToString(getVotingStartTime())
  );

  if (
    typeof window !== 'undefined' &&
    timeToVotingString !== secondsToString(0)
  ) {
    animationInterval(1000, controller.signal, (): void => {
      setTimeToVotingString(timeUntilToString(getVotingStartTime()));
    });
  } else if (typeof window !== 'undefined') {
    triviaStatusSet(TriviaStatuses.voting);
  }

  return (
    <ResultsCountdownStyles>
      <div>Voting starts in {timeToVotingString}</div>
    </ResultsCountdownStyles>
  );
}
