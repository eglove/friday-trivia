import { useState } from 'react';
import {
  animationInterval,
  secondsToString,
  timeUntilTriviaString,
} from '../util/times';
import { triviaStatusConsumer, TriviaStatuses } from '../lib/triviaStatus';

export default function CountdownToTrivia(): JSX.Element {
  const controller = new AbortController();
  const { triviaStatusSet } = triviaStatusConsumer();

  const [fridayTimer, setFridayTimer] = useState(timeUntilTriviaString);

  if (typeof window !== 'undefined' && fridayTimer !== secondsToString(0)) {
    animationInterval(1000, controller.signal, (): void => {
      setFridayTimer(timeUntilTriviaString);
    });
  } else if (typeof window !== 'undefined') {
    triviaStatusSet(TriviaStatuses.trivia);
  }

  return (
    <p className="timer">
      Trivia starts in <span id="fridayTimer">{fridayTimer}</span>
    </p>
  );
}
