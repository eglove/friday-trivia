import { useState } from 'react';
import {
  animationInterval,
  getStartTime,
  secondsToString,
  timeUntilToString,
} from '../util/times';
import { TriviaStatusConsumer, TriviaStatuses } from '../lib/triviaStatus';
import { TimerStyles } from '../styles/MainStyles';

export default function CountdownToTrivia(): JSX.Element {
  const controller = new AbortController();
  const { triviaStatusSet } = TriviaStatusConsumer();

  const [fridayTimer, setFridayTimer] = useState(
    timeUntilToString(getStartTime())
  );

  if (typeof window !== 'undefined' && fridayTimer !== secondsToString(0)) {
    animationInterval(1000, controller.signal, (): void => {
      setFridayTimer(timeUntilToString(getStartTime()));
    });
  } else if (typeof window !== 'undefined') {
    triviaStatusSet(TriviaStatuses.trivia);
  }

  return <TimerStyles>Trivia starts in {fridayTimer}</TimerStyles>;
}
