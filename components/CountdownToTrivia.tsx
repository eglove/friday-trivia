import { useState } from 'react';
import { animationInterval, timeUntilTriviaString } from '../util/times';

export default function CountdownToTrivia(): JSX.Element {
  const controller = new AbortController();

  const [fridayTimer, setFridayTimer] = useState(timeUntilTriviaString);

  if (typeof window !== 'undefined') {
    animationInterval(1000, controller.signal, (): void => {
      setFridayTimer(timeUntilTriviaString);
    });
  }

  return <p className="timer">Trivia starts in {fridayTimer}</p>;
}
