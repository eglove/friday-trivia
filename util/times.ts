enum DaysOfWeek {
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
}

export const daysUntilFriday = (): number => {
  const days = DaysOfWeek.Friday - new Date().getDay();

  // If today is Saturday, result will be -1 days to Friday
  // Instead return 7 + -1
  if (days < 0) {
    return 7 + days;
  }

  return days;
};

export const getStartTime = (): Date => {
  let startTime = new Date();
  // Trivia starts at 9AM friday
  startTime.setHours(9, 0, 0, 0);
  startTime = new Date(
    startTime.setDate(startTime.getDate() + daysUntilFriday())
  );
  return startTime;
};

export const getEndTime = (): Date => {
  let endTime = new Date();
  // Trivia ends at 3:30PM friday
  endTime.setHours(15, 30, 0, 0);
  endTime = new Date(endTime.setDate(endTime.getDate() + daysUntilFriday()));
  return endTime;
};

export const triviaQuestionTimes = (): Array<Date> => {
  const startTime = getStartTime();
  const endTime = getEndTime();
  const numberOfQuestions = 10;

  const questionTimes = [startTime];
  const questionTime = (endTime.valueOf() - startTime.valueOf()) / 10;
  for (let i = 0; i < numberOfQuestions - 1; i += 1) {
    questionTimes.push(
      new Date(startTime.setTime(startTime.getTime() + questionTime))
    );
  }

  return questionTimes;
};

export const daysToSeconds = (days: number): number => days * 24 * 60 * 60;

export const secondsToString = (seconds: number): string => {
  const numDays = Math.floor((seconds % 31536000) / 86400);
  const numHours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  const numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  const numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  return `${numDays} days ${numHours} hours ${numMinutes} minutes ${numSeconds} seconds`;
};

export const timeUntilTriviaString = (): string => {
  const startTime = getStartTime();

  // Use millisecond values (Unix Timestamp)
  return secondsToString(
    Math.floor(startTime.valueOf() / 1000) - Math.floor(Date.now() / 1000)
  );
};

export const distanceBetweenTimes = (farDate: Date, nearDate: Date): number =>
  Math.floor(farDate?.valueOf() / 1000) -
  Math.floor(nearDate?.valueOf() / 1000);

export const verifyTimesAreSameToSecond = (
  timeOne: Date,
  timeTwo: Date
): boolean =>
  timeOne.getDay() === timeTwo.getDay() &&
  timeOne.getHours() === timeTwo.getHours() &&
  timeOne.getMinutes() === timeTwo.getMinutes() &&
  timeOne.getSeconds() === timeTwo.getSeconds();

// An overengineered setInterval
// https://youtu.be/MCi6AZMkxcU
// https://gist.github.com/jakearchibald/cb03f15670817001b1157e62a076fe95
export function animationInterval(
  ms: number,
  signal: AbortSignal,
  callback: { (time: number): void; (arg0: never): void }
): void {
  // Prefer currentTime, as it'll better sync animations queued in the
  // same frame, but if it isn't supported, performance.now() is fine.
  const start = document.timeline
    ? document.timeline.currentTime
    : performance.now();

  function frame(time: number): void {
    if (signal.aborted) return;
    callback(time);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    scheduleFrame(time);
  }

  function scheduleFrame(time: number | null): void {
    if (time !== null && start !== null) {
      const elapsed = time - start;
      const roundedElapsed = Math.round(elapsed / ms) * ms;
      const targetNext = start + roundedElapsed + ms;
      const delay = targetNext - performance.now();
      setTimeout(() => requestAnimationFrame(frame), delay);
    }
  }

  scheduleFrame(start);
}
