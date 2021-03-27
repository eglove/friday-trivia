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

export const daysToSeconds = (days: number): number => days * 24 * 60 * 60;

export const secondsToString = (seconds: number): string => {
  const numDays = Math.floor((seconds % 31536000) / 86400);
  const numHours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  const numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  const numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  return `${numDays} days ${numHours} hours ${numMinutes} minutes ${numSeconds} seconds`;
};

export const timeUntilTriviaString = (): string => {
  let friday = new Date();
  // Trivia starts at 9AM
  friday.setHours(9, 0, 0, 0);
  friday = new Date(friday.setDate(friday.getDate() + daysUntilFriday()));

  // Use millisecond values (Unix Timestamp)
  return secondsToString(
    Math.floor(friday.valueOf() / 1000) - Math.floor(Date.now() / 1000)
  );
};

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
