import { useState } from 'react';
import {
  animationInterval,
  secondsToString,
  timeUntilTriviaString,
} from '../util/times';
import { TriviaStatuses, updateTriviaStatus } from '../util/updateTriviaState';

export default function CountdownToTrivia(): JSX.Element {
  const controller = new AbortController();

  const [fridayTimer, setFridayTimer] = useState(timeUntilTriviaString);

  if (typeof window !== 'undefined' && fridayTimer !== secondsToString(0)) {
    animationInterval(1000, controller.signal, (): void => {
      setFridayTimer(timeUntilTriviaString);
    });
  } else {
    updateTriviaStatus(TriviaStatuses.trivia);
  }

  return (
    <p className="timer">
      Trivia starts in <span id="fridayTimer">{fridayTimer}</span>
    </p>
  );
}
