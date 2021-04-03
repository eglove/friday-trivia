import { createContext, SetStateAction, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../graphql/queries';
import { User } from '../graphql/objectInterfaces';

interface ILocalStateContext {
  triviaStatus: string;
  triviaStatusSet: Function;
  currentUser: User;
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
  const [triviaStatus, setTriviaStatus] = useState(TriviaStatuses.trivia);
  const { data } = useQuery(CURRENT_USER_QUERY);
  const currentUser = data?.authenticatedItem;

  function triviaStatusSet(status: TriviaStatuses): SetStateAction<void> {
    setTriviaStatus(status);
  }

  return (
    // @ts-ignore
    <LocalStateProvider value={{ triviaStatus, triviaStatusSet, currentUser }}>
      {children}
    </LocalStateProvider>
  );
}

function TriviaStatusConsumer(): ILocalStateContext {
  return useContext(LocalStateContext) as ILocalStateContext;
}

export { TriviaStatusProvider, TriviaStatusConsumer };
