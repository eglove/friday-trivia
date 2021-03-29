import { createContext, SetStateAction, useContext, useState } from 'react';

interface ILocalStateContext {
  triviaStatus: string;
  triviaStatusSet: Function;
}

export enum TriviaStatuses {
  'voting' = 'voting',
  'trivia' = 'trivia',
  'results' = 'results',
}

// @ts-ignore
const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function TriviaStatusProvider({ children }: any): JSX.Element {
  const [triviaStatus, setTriviaStatus] = useState('voting');

  function triviaStatusSet(status: TriviaStatuses): SetStateAction<void> {
    setTriviaStatus(status);
  }

  return (
    // @ts-ignore
    <LocalStateProvider value={{ triviaStatus, triviaStatusSet }}>
      {children}
    </LocalStateProvider>
  );
}

function triviaStatusConsumer(): ILocalStateContext {
  return useContext(LocalStateContext) as ILocalStateContext;
}

export { TriviaStatusProvider, triviaStatusConsumer };
