import { useState } from 'react';
import { TriviaStatusConsumer, TriviaStatuses } from '../../lib/triviaStatus';
import {
  animationInterval,
  distanceBetweenTimes,
  getEndTime,
  getStartTime,
  secondsToString,
  triviaQuestionTimes,
  verifyTimesAreSameToSecond,
} from '../../util/times';
import { TimerStyles } from '../../styles/MainStyles';

export default function TriviaCountdown(): JSX.Element {
  const controller = new AbortController();
  const {
    currentNumberOfQuestions,
    currentNumberOfQuestionsSet,
    triviaStatusSet,
  } = TriviaStatusConsumer();

  const [timeToNextQuestion, setTimeToNextQuestion] = useState(2127);
  const questionTimes = triviaQuestionTimes();
  questionTimes[0] = getStartTime();

  if (typeof window !== 'undefined') {
    animationInterval(1000, controller.signal, (): void => {
      if (
        verifyTimesAreSameToSecond(
          new Date(),
          questionTimes[currentNumberOfQuestions - 1]
        )
      ) {
        currentNumberOfQuestionsSet(currentNumberOfQuestions + 1);
      }

      // 11 Start countdown to end trivia
      // 12 Move to results page
      if (currentNumberOfQuestions === 12) {
        triviaStatusSet(TriviaStatuses.results);
      } else if (currentNumberOfQuestions === 11) {
        setTimeToNextQuestion(distanceBetweenTimes(getEndTime(), new Date()));
      } else {
        setTimeToNextQuestion(
          distanceBetweenTimes(
            questionTimes[currentNumberOfQuestions],
            new Date()
          )
        );
      }
    });
  }

  return (
    <>
      {currentNumberOfQuestions === 10 && (
        <TimerStyles>Trivia Ends at 3:30!</TimerStyles>
      )}
      {currentNumberOfQuestions < 10 && (
        <TimerStyles>
          Time To Next Question: {secondsToString(timeToNextQuestion)}
        </TimerStyles>
      )}
    </>
  );
}
