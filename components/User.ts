import { ApolloQueryResult, useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../graphql/queries';

export function getCurrentUser(): ApolloQueryResult<any> {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}

export function isCurrentUser(): boolean {
  const { data } = useQuery(CURRENT_USER_QUERY);

  return !!data?.authenicatedItem;
}
