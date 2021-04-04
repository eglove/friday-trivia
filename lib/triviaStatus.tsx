import { createContext, SetStateAction, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../graphql/queries';
import { User } from '../graphql/objectInterfaces';

interface ILocalStateContext {
  triviaStatus: string;
  triviaStatusSet: Function;
  currentUser: User;
  currentNumberOfQuestions: number;
  currentNumberOfQuestionsSet: Function;
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
  // todo set initial status state by current date/time
  const [triviaStatus, setTriviaStatus] = useState(TriviaStatuses.trivia);
  // todo set initial state by value on database
  const [currentNumberOfQuestions, setCurrentNumberOfQuestions] = useState(1);
  const { data } = useQuery(CURRENT_USER_QUERY);
  const currentUser = data?.authenticatedItem;

  function triviaStatusSet(status: TriviaStatuses): SetStateAction<void> {
    setTriviaStatus(status);
  }

  function currentNumberOfQuestionsSet(numOfQ: number): SetStateAction<void> {
    setCurrentNumberOfQuestions(numOfQ);
  }

  return (
    // @ts-ignore
    <LocalStateProvider
      value={{
        triviaStatus,
        triviaStatusSet,
        currentNumberOfQuestions,
        currentNumberOfQuestionsSet,
        currentUser,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function TriviaStatusConsumer(): ILocalStateContext {
  return useContext(LocalStateContext) as ILocalStateContext;
}

export { TriviaStatusProvider, TriviaStatusConsumer };
